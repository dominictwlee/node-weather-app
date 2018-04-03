// Command line argument for address
const argv = require('yargs')
  .option({
    a: {
      alias: ('address'),
      demandOption: true,
      describe: 'Address for weather fetch',
      type: 'string',
    },
  })
  .help()
  .argv;

const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');

geocode.geocodeAddress(argv.address, (errMessage, results) => {
  if (errMessage) {
    console.log(errMessage);
  } else {
    console.log(results.address);
    weather.getWeather(results.latitude, results.longitude, (errMessage, weatherResults) => {
      if (errMessage) {
        console.log(errMessage);
      } else {
        const degreeUnit = String.fromCharCode(8451);
        console.log(`It's currently ${weatherResults.temperature}${degreeUnit}. It feels like ${weatherResults.apparentTemperature}${degreeUnit}`);
      }
    });
  }
});
