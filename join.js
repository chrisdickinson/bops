var Buffer = require('buffer').Buffer

module.exports = function(targets, ready) {
  ready(null, Buffer.concat(targets))
}
