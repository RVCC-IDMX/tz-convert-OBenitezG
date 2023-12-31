const moment = require('moment-timezone');

const yargs = require('yargs');

const targetTimezone = yargs.argv._[0];

if (yargs.argv.format === true) {
  console.log(moment().tz(targetTimezone).format('dddd, MMMM Do YYYY, h:mm:ss a'));
} else {
  console.log(`The time in ${targetTimezone} timezone is ${moment().tz(targetTimezone).format()}`);
}
