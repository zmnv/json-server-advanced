const jsonServer = require('json-server');
const argv = require('minimist')(process.argv.slice(2));

const server = jsonServer.create();
const middlewares = jsonServer.defaults();

const database = require('./db/entry');

for ( property in database ) {
  console.log(property);
  server.use(`/${property}`, jsonServer.router(database[property]));
}

server.use(middlewares);

const definePort = argv['port'] ? argv['port'] : 3000;

server.listen(3000, () => {
  console.log(definePort);
  console.log('JSON Server is running');
});
