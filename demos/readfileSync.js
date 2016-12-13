// from https://github.com/nodejs/node/blob/master/doc/topics/blocking-vs-non-blocking.md#overview-of-blocking-vs-non-blocking

const fs = require('fs');
const data = fs.readFileSync('blocking-vs-non-blocking.md'); // blocks here until file is read
console.log(data);
// console will sholw data from the file,blocking-vs-non-blocking.md, as, <Buffer 4f 76 65 72 76 69 65 77 20 6f 66 20 42 6c 6f 63 6b 69 6e 67 20 76 73 20 4e 6f 6e 2d 42 6c 6f 63 6b 69 6e 67 0d 0a 0d 0a 54 68 69 73 20 6f 76 65 72 76 ... >
