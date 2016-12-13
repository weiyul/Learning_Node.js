// node.js v6.9.2
var net = require('net');
var server = net.createServer((socket) => {
  socket.end('goodbye\n');
}).on('error', (err) => {
  // handle errors here
  throw err;
});

// grab a random port.
server.listen(() => {
  console.log('opened server on', server.address());
});
