const http = require('http');
const config = require('./config');
const app = require('./app');

const server = http.createServer(app.callback());

server.listen(config.appPort, () => {
  console.log(`Started on port ${config.appPort}`);
});
