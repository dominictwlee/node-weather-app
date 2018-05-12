const express = require('express');
const path = require('path');
const cors = require('cors');
require('dotenv').config();

const weatherRouter = require('./weather/weather.route.js');

const app = express();

app.use(cors());

app.use(express.static(path.join(__dirname, 'client/dist')));

app.use('/api/weather', weatherRouter);

app.listen(process.env.PORT, () => console.log(`Server started on 3000`));

module.exports = app;
