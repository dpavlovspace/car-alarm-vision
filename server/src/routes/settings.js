const express = require('express');
const router = express.Router();

const { getSettings, updateSettings } = require('../controllers/settings');

router.get('/getSettings', getSettings);
router.post('/setSettings', updateSettings);

module.exports = router;