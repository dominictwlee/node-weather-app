const express = require('express');
const cors = require('cors');
require('dotenv').config();

const weatherRouter = require('./weather/weather.route.js');

const app = express();
app.use(cors());

app.use('/api/weather', weatherRouter);

app.listen(3000, () => console.log(`Server started on 3000`));

module.exports = app;
