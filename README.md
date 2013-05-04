# bops

buffer/typed array agnostic buffer operations.

```javascript
var binary = require('bops')

binary.readUInt8(new Buffer(10), 0) // === 10

```

in browser, will default to using `Uint8Array` instances.
in node, will default to using `Buffer` instances.

# License

MIT
