var test = require('tape')
  , binary = require('../index')

test('is works', function(assert) {
  var yes = binary.from("Hello")
    , no = "World"
  
  assert.equal(binary.is(yes), true)
  assert.equal(binary.is(no), false)
  assert.end()
})
