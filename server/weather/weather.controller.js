const rp = require('request-promise-native');

function fetchWeather(req, res) {
  const { address } = req.query;
  const geoCodeOptions = {
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${process.env.GOOGLE_API_KEY}`,
    json: true
  };
  let formattedAddress;

  // Fetch Weather using query string
  rp(geoCodeOptions)
    .then(result => {
      if (result.status === 'ZERO_RESULTS') {
        throw new Error('Address is invalid');
      } else {
        const { lat } = result.results[0].geometry.location;
        const { lng } = result.results[0].geometry.location;

        formattedAddress = {
          components: result.results[0].address_components,
          formatted: result.results[0].formatted_address
        };

        const weatherOptions = {
          url: `https://api.darksky.net/forecast/${process.env.DARKSKY_API_KEY}/${lat},${lng}?units=uk`,
          json: true
        };
        return rp(weatherOptions);
      }
    })
    .then(doc => {
      if (doc.status === 400) {
        throw new Error(doc.error);
      }

      const { latitude, longitude, timezone, currently, daily } = doc;
      res.status(200).json({ weather: { latitude, longitude, timezone, currently, daily }, address: formattedAddress });
    })
    .catch(err => {
      console.log(err);
      res.status(400).json({ message: err.toString() });
    });
}

module.exports = fetchWeather;
