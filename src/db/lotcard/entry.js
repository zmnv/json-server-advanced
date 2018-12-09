const myitems = require('./myitems.json');
const keckitems = require('./keckitems.json');

module.exports = {
  ...myitems,
  ...keckitems
}
