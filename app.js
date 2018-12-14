const jsonServer = require('json-server');
const fs = require('fs');
const path = require('path');

const server = jsonServer.create();
const middlewares = jsonServer.defaults();

const ScanDirectoryBootstrap = require('./scanDirectory');
const ScanRoutes = require('./scanRoutes');

const Tools = require('./config/tools');

console.log(require('./config/welcome'));

server.use(middlewares);

function ServerBootstrap() {
  server.set('port', process.env.PORT || 3000);
  server.listen(server.get('port'), () => {
    console.log(
      `\x1b[92mServer is running on http://localhost:${server.get(
        'port',
      )} \x1b[90m...\x1b[0m`,
    );
  });
}

ScanDirectoryBootstrap().then(res => {
  const pathsList = res.exit;
  let filesCounter = 0;
  let routesCounter = 0;

  pathsList.forEach(element => {
    filesCounter = filesCounter + 1;

    server.use(element.parentName, jsonServer.router(element.pathAbsName));
  });

  const routesList = ScanRoutes(res.exit);
  const exitList = [];

  routesList.forEach(elem => exitList.push(...elem));
  routesList.sort((a, b) => {
    var x = a.parentName;
    var y = b.parentName;
    if (x < y) {
      return -1;
    }
    if (x > y) {
      return 1;
    }
    return 0;
  });

  exitList.forEach(element => {
    console.log(
      ` \x1b[90m§\x1b[0m \x1b[95m${element.slugName.slice(
        1,
      )}\x1b[0m \x1b[1m\x1b[96mhttp://localhost:3000${element.slugName}\x1b[0m`,
    );
    console.log(`   \x1b[90m${element.pathRltName}\x1b[0m`);
    console.log();
    routesCounter = routesCounter + 1;
  });

  const newList = {
    "routes": Tools.getListOfRoutes(routesList)
  }

  server.use('/', jsonServer.router(newList));

  ServerBootstrap();
  
});
