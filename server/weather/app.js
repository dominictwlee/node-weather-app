// Command line argument for address
const argv = require('yargs')
  .option({
    a: {
      alias: 'address',
      demandOption: true,
      describe: 'Address for weather fetch',
      type: 'string'
    }
  })
  .help().argv;

const rp = require('request-promise-native');

const encodedAddress = encodeURIComponent(argv.address);

const geoCodeOptions = {
  url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=AIzaSyBGi7OVobHDgApodlELBIcKwPqk95m8rcU`,
  json: true
};

rp(geoCodeOptions)
  .then(res => {
    console.log(res);
    if (res.status === 'ZERO_RESULTS') {
      throw new Error('Invalid Address');
    } else {
      const lat = res.results[0].geometry.location.lat;
      const lng = res.results[0].geometry.location.lng;
      const weatherOptions = {
        url: `https://api.darksky.net/forecast/96e799841992b68258e6a4934ef136d2/${lat},${lng}?units=uk`,
        json: true
      };
      console.log(res.results[0].formatted_address);
      return rp(weatherOptions);
    }
  })
  .then(res => {
    const temperature = res.currently.temperature;
    const apparentTemperature = res.currently.apparentTemperature;
    const degreeUnit = String.fromCharCode(8451);
    console.log(`It's currently ${temperature}${degreeUnit}. It feels like ${apparentTemperature}${degreeUnit}`);
  })
  .catch(err => {
    if (err.code === 'ENOTEFOUND') {
      console.log('Unable to connect to API server.');
    } else {
      console.log(err.message);
    }
  });
