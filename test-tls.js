const tls = require('tls');

const options = {
  host: 'www.google.com', // Change to a domain with HTTPS support
  port: 443, // HTTPS port
};

const socket = tls.connect(options, () => {
  console.log('TLS connection successful');
  console.log(`TLS Version: ${socket.getProtocol()}`);
});

socket.on('error', (error) => {
  console.error('Error connecting via TLS:', error);
});
