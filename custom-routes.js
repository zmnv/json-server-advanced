const jsonServer = require('json-server');
const router = jsonServer.create();

const Restarter = require('./config/restarter');

router.post('/restart', function (req, res) {
  res.json('Server Restart');
  Restarter.RestartServer();
});

router.post('/deploy', function (req, res) {
  res.json('Server Deploy');
  Restarter.DeployAndRestartServer();
});

module.exports = {
  router
}
