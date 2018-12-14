const jsonServer = require('json-server');
const router = jsonServer.create();

const DeployAndRestartServer = require('./config/restarter');

// router.post('/restart', function (req, res) {
//   res.json('Server Restart');
//   Restarter.RestartServer();
// });

router.post('/deploy', function (req, res) {
  res.json('Server Deploy');
  DeployAndRestartServer();
});

module.exports = {
  router
}
