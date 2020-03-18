var Buffer = require('buffer').Buffer

var version = ((process || {}).version || 'v0.0.0').slice(1).split('.')[0]

module.exports = (
  Number(version) < 6
  ? function create(size) { return new Buffer(size) }
  : function create(size) { return Buffer.alloc(size) }
)
