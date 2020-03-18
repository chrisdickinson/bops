module.exports = create

var Buffer = require('buffer').Buffer

var majorVersion = process.version.replace(/^v/, '').split('.')[0];

function create(size) {
var version = ((process || {}).version || 'v0.0.0').slice(1).split('.')[0]
var create = (
  Number(version) < 6
  ? function create(size) { return new Buffer(size) }
  : function create(size) { return Buffer.alloc(size) }
)
}
