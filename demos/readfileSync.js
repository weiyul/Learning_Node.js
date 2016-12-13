// from https://github.com/nodejs/node/blob/master/doc/topics/blocking-vs-non-blocking.md#overview-of-blocking-vs-non-blocking

const fs = require('fs');
const data = fs.readFileSync('blocking-vs-non-blocking.md'); // blocks here until file is read
console.log(data);