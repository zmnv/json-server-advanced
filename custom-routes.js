const jsonServer = require('json-server');
const router = jsonServer.create();

const RestartServer = require('./config/restarter');

// router.post('/restart', function (req, res) {
//   res.json('Server Restart');
//   Restarter.RestartServer();
// });

router.post('/deploy', function (req, res) {
  res.json('Server Deploy');
  RestartServer();
});

module.exports = {
  router
}
