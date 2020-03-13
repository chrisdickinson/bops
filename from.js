var Buffer = require('buffer').Buffer

module.exports = function(source, encoding) {
  return Buffer.from(source, encoding)
}
