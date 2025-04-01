const moment = require('moment-timezone');

const timeZones = [
  'America/New_York',
  'Europe/London',
  'Asia/Tokyo',
  'Australia/Sydney'
];

const displayTimeZones = () => {
  console.log('Current Time in Different Time Zones:');
  timeZones.forEach(timeZone => {
    const time = moment().tz(timeZone).format('YYYY-MM-DD HH:mm:ss');
    console.log(`${timeZone}: ${time}`);
  });
};

displayTimeZones();
