const jsonServer = require('json-server');
const router = jsonServer.create();

router.get('/custom', (req, res) => {
  res.json("EXIT")
});

module.exports = {
  router
}
