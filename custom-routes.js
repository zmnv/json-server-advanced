const jsonServer = require('json-server');
const router = jsonServer.create();

const RestartServer = require('./config/restarter');

router.post('/restart', function () {
  // res.json(req.body);
  RestartServer();
});

module.exports = {
  router
}
