const jsonServer = require('json-server');
const router = jsonServer.create();

const RestartServer = require('./config/restarter');
const DeployAndRestartServer = require('./config/restarter');

router.post('/restart', function (req, res) {
  res.json('Server Restart');
  RestartServer();
});

router.post('/deploy', function (req, res) {
  res.json('Server Deploy');
  DeployAndRestartServer();
});

module.exports = {
  router
}
