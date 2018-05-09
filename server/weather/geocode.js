const request = require('request');

function geocodeAddress(address, callback) {
  const encodedAddress = encodeURIComponent(address);

  //  Fetch request from Google Maps Geocoding API.
  request(
    {
      url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=AIzaSyBGi7OVobHDgApodlELBIcKwPqk95m8rcU`,
      json: true
    },
    (err, res, body) => {
      if (err) {
        callback('Unable to connect to google servers.');
      } else if (body.status === 'ZERO_RESULTS') {
        callback('Unable to find address.');
      } else if (body.status === 'OK') {
        callback(null, {
          address: body.results[0].formatted_address,
          latitude: body.results[0].geometry.location.lat,
          longitude: body.results[0].geometry.location.lng
        });
      }
    }
  );
}

module.exports = {
  geocodeAddress
};
