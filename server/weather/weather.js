const request = require('request');

function getWeather(lat, lon, callback) {
  request({
    url: `https://api.darksky.net/forecast/96e799841992b68258e6a4934ef136d2/${lat},${lon}?units=uk`,
    json: true,
  }, (err, res, body) => {
    if (!err && res.statusCode === 200) {
      callback(null, {
        temperature: body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature,
      });
    } else {
      callback('Cannot fetch weather');
    }
  });
}

module.exports = {
  getWeather,
};
