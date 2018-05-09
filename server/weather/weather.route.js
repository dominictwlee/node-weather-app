const express = require('express');

const fetchWeather = require('./weather.controller');

const router = express.Router();

router.get('/', fetchWeather);

module.exports = router;
