const express = require('express');

const weatherRouter = require('./weather/weather.route.js');

const app = express();

app.use('/api/weather', weatherRouter);

app.listen(3001, () => console.log(`Server started on 3001`));

module.exports = app;
