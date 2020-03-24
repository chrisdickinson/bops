var Buffer = require('buffer').Buffer

var version = ((process || {}).version || 'v0.0.0').slice(1).split('.')[0]

module.exports = (
  Number(version) < 6
  ? function from(source, encoding) { return new Buffer(source, encoding) }
  : function from(source, encoding) { return Buffer.from(source, encoding) }
)
