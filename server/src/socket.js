const io = require('socket.io');
const cv = require('opencv4nodejs');
const path = require('path');
const CarAlarmVision = require('./cav');

class CAVSocket extends CarAlarmVision {
    constructor(props) {
        super(props);

        this.socket = io(global.server);
        this.clientsOnline = 0;
        this.updateInterval = null;
    }

    // start sending frames
    start() {
        this.updateInterval = setInterval(async () => {
            if (this.clientsOnline > 0) {
                await this.updateFrame();

                console.info(`<- Send a frame (clientsOnline: ${this.clientsOnline})`);
                this.socket.emit('frame', await this.getFrame());
            }
        }, this.options.updateTimeout);
    }

    // stop sending frames
    stop() {
        clearInterval(this.updateInterval);
    }

    async afterInit() {
        try {
            await this.socket.on('connection', socket => {
                this.clientsOnline += 1;
                this.socket.emit('online', this.clientsOnline);
                console.log(`[+] Client is connected [socketId: ${socket.id}]`);
                console.log(`[?] Clients online: ${this.clientsOnline}`);
            
                socket.on('disconnect', () => {
                    this.clientsOnline -= 1;
                    this.socket.emit('online', this.clientsOnline);
                    console.log(`[-] Client is disconnected [socketId: ${socket.id}]`);
                    console.log(`[?] Clients online: ${this.clientsOnline}`);
                });
            });
            this.start();
        } catch (e) {
            this.stop();
            console.error(e);
        }
    }
}

const cavSocket = new CAVSocket({
    devicePort: process.env.DEVICE_PORT,
    options: {
        updateTimeout: 1000,
        maxMatchUpdateTimeout: 5000,
        alarmDurationTime: 30000
    },
    icons: [
        { 
            name: 'hit',
            matchLimit: 7,
            src: cv.imread(path.join('./storage/images/icons/hit.jpg'), cv.IMREAD_GRAYSCALE)
        },
        { 
            name: 'ignition',
            matchLimit: 7,
            src: cv.imread(path.join('./storage/images/icons/ignition.jpg'), cv.IMREAD_GRAYSCALE)
        },
        { 
            name: 'incline',
            matchLimit: 7,
            src: cv.imread(path.join('./storage/images/icons/incline.jpg'), cv.IMREAD_GRAYSCALE) },
        { 
            name: 'sound',
            matchLimit: 7,
            src: cv.imread(path.join('./storage/images/icons/sound.jpg'), cv.IMREAD_GRAYSCALE)
        }
    ],
    debug: true
});

module.exports = cavSocket;
