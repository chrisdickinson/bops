module.exports = create

var Buffer = require('buffer').Buffer

var majorVersion = process.version.replace(/^v/, '').split('.')[0];

function create(size) {
  if (!majorVersion || majorVersion < 6) {
    return new Buffer(size)
  } else {
    return Buffer.alloc(size)
  }
}
