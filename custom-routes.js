const jsonServer = require('json-server');
const router = jsonServer.create();

router.post('/custom', (req, res) => {
  console.log(res);
});

module.exports = {
  router
}
