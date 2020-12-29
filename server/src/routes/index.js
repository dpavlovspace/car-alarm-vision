const express = require('express');
const app = express();

// app.get('/getLatestEvents', (req, res) => res.json({
//     events: [
//         { id: 1832, timestamp: 1608081283, type: 'HIT' },
//         { id: 3742, timestamp: 1608081273, type: 'HIT' },
//         { id: 4642, timestamp: 1608081253, type: 'INCLINE' },
//         { id: 5542, timestamp: 1608081233, type: 'HIT' },
//         { id: 6452, timestamp: 1608081223, type: 'IGNITION' },
//         { id: 8342, timestamp: 1608081213, type: 'HIT' },
//         { id: 6262, timestamp: 1608081283, type: 'HIT' },
//         { id: 7142, timestamp: 1608081273, type: 'HIT' },
//         { id: 5280, timestamp: 1608081253, type: 'INCLINE' },
//         { id: 3249, timestamp: 1608011233, type: 'HIT' },
//         { id: 8298, timestamp: 1608021223, type: 'IGNITION' },
//         { id: 9247, timestamp: 1608031213, type: 'HIT' },
//         { id: 1206, timestamp: 1608041283, type: 'HIT' },
//         { id: 2245, timestamp: 1608051273, type: 'HIT' },
//         { id: 5244, timestamp: 1608061253, type: 'INCLINE' },
//         { id: 9243, timestamp: 1608071233, type: 'HIT' },
//         { id: 8242, timestamp: 1608081223, type: 'IGNITION' },
//         { id: 1241, timestamp: 1608091213, type: 'HIT' }
//     ]
// }));

// app.get('/getSettings', (req, res) => res.json({
//     arm: true,
//     compress: false,
//     debug: true
// }));

app.use((err, req, res, next) => {
    console.log('Error:', err.message);
    res.status(422).json(err.message);
});

module.exports = app;