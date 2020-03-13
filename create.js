module.exports = create

var Buffer = require('buffer').Buffer

function create(size) {
  return Buffer.alloc(size)
}
