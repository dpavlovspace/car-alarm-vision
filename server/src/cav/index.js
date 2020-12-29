const path = require('path');
const cv = require('opencv4nodejs');
const imagemin = require('imagemin');
const imageminMozjpeg = require('imagemin-mozjpeg');
const config = require('../config');

class CarAlarmVision {
    constructor({ devicePort, options = {updateTimeout, maxMatchUpdateTimeout, alarmDurationTime}, icons, debug}) {
        this.devicePort = devicePort;
        this.capture = null;
        this.frame = null;

        this.options = options;
        this.icons = icons;
        this.debug = debug;

        this.drawParams = {
            fontSize: 1,
            fontType: cv.FONT_HERSHEY_PLAIN,
            thickness: 1 
        };

        this.init();
    }

    // initialization before starting work with the video capture
    async init() {
        try {
            this.capture = new cv.VideoCapture(this.devicePort);
            this.frame = await this.capture.readAsync();

            if (this.debug) {
                let [height, width] = this.frame.sizes;
                console.info('\nInit Car Alarm Vision');
                console.info(`RESOLUTION: ${width}x${height}`);
                console.info(`LOADED ICONS: ${this.icons.map(icon => icon.name).join(', ').toUpperCase()}`);
                console.info(`OPTIONS: \n- updateTimeout: ${this.options.updateTimeout}ms, \n- maxMatchUpdateTimeout: ${this.options.maxMatchUpdateTimeout}ms, \n- alarmDurationTimeout: ${this.options.alarmDurationTime}ms\n`);
            }

            await this.afterInit();
        } catch(e) {
            cv.destroyAllWindows();
            console.error(e);
        }
    }

    async afterInit(cb) {
        await cb;
    }

    // finding icons on the keychain display and outputting the number of their matches
    async getMatchFeaturesCount(frame) {
        const detector = new cv.SIFTDetector();
        const bf = new cv.BFMatcher();
        const matchFeaturesCount = this.icons.map(async icon => {
            // detect keypoints
            const frameKeypoints = await detector.detectAsync(frame);
            const iconKeypoints = await detector.detectAsync(icon.src);

            // compute feature descriptors
            const frameDescriptors = await detector.computeAsync(frame, frameKeypoints);
            const iconDescriptors = await detector.computeAsync(icon.src, iconKeypoints);

            // match the feature descriptors
            const matches = await bf.knnMatchAsync(frameDescriptors, iconDescriptors, 2);
            let matchCount = 0;

            // counting the number of good matches
            if (matches[0].length > 1 && matches[1] !== undefined) {
                matchCount = matches.reduce((count, match) => {
                    return match[0].distance <= match[1].distance * 0.7 ?
                        count += 1 : count
                }, 0);
            }

            return { name: icon.name, matchCount };
        })
        return await Promise.all(matchFeaturesCount);
    }

    // debug info to display per frame
    async drawDebugInfo(frame) {
        // text lines to be drawn per frame
        const textLines = [
            { text: 'DEBUG' },
            { text: `Update timeout: ${this.options.updateTimeout}` }, 
            { text: `Max match update timeout: ${this.options.maxMatchUpdateTimeout}` }, 
            { text: `Alarm duration time: ${this.options.alarmDurationTime}` }, 
            { text: `Status: Armed` }
        ];

        // drawing text lines to a frame
        let y = 10;
        const drawTextLines = textLines.map(async (textLine, index) => {
            y = index === 0 ? y : y + 40;
            return cv.drawTextBox(
                frame,
                { x: 10, y },
                [{ ...textLine, ...this.drawParams}],
                0.2
            );
        });
        return await Promise.all(drawTextLines);
    }

    // crops the frame to the sides
    async cropFrame(frame) {
        const x = frame.cols / 6, y = 0, width = frame.cols / 6 * 4, height = frame.rows; 
        const cropSize = new cv.Rect(x, y, width, height);
        return await frame.getRegion(cropSize).copyAsync();
    }

    async getFrame() {
        // Mat or Array of Mat
        let frame = this.frame.sizes
          ? await cv.imencodeAsync('.jpg', this.frame)
          : await cv.imencodeAsync('.jpg', this.frame[0])
        // frame = await imagemin.buffer(frame, {
        //     plugins: [imageminMozjpeg({quality: 50})]
        // });
        return frame.buffer;
    }

    // frame processing
    async updateFrame() {
        let frame = await this.capture.readAsync();

        if (frame.empty) {
            this.capture.reset();
            frame = await this.capture.readAsync();
        }

        // effects for good visibility of the keychain screen
        frame = await frame.cvtColorAsync(cv.COLOR_BGR2GRAY);
        frame = await frame.medianBlurAsync(3);
        frame = await frame.adaptiveThresholdAsync(255, cv.ADAPTIVE_THRESH_GAUSSIAN_C, cv.THRESH_BINARY, 85, 11);
        frame = await frame.resizeAsync(0, 0, 0.5, 0.5);
        frame = await this.cropFrame(frame);

        // console.log(await this.getMatchFeaturesCount(frame));

        // if (this.debug) {
        //     frame = await this.drawDebugInfo(frame);
        // }

        this.frame = frame;
    }
}

module.exports = CarAlarmVision;