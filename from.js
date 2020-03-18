var Buffer = require('buffer').Buffer

var majorVersion = process.version.replace(/^v/, '').split('.')[0];

module.exports = function(source, encoding) {
  if (!majorVersion || majorVersion < 6) {
    return new Buffer(source, encoding)
  } else {
    return Buffer.from(source, encoding)
  }
}
