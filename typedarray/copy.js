module.exports = copy

function copy(source, target, target_start, source_start, source_end) {
  target_start = arguments.length < 3 ? 0 : target_start
  source_start = arguments.length < 4 ? 0 : source_start
  source_end = arguments.length < 5 ? source.length : source_end
  if(source.buffer !== target.buffer) {
    return fast_copy(source, target, target_start, source_start, source_end)
  }
  return slow_copy(source, target, target_start, source_start, source_end)
}

function fast_copy(from, to, j, i, jend) {
  for(var iend = jend - j + i; i < iend; ++i) {
    to[j++] = from[i]
  } 
}

function slow_copy(from, to, j, i, jend) {
  // the buffers could overlap.
  return fast_copy(
      new Uint8Array(Array.prototype.slice.call(from, i, jend - j + i))
    , to
    , j
    , i
    , jend
  )
}
