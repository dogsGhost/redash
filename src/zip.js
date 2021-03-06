import _defn from './internal/_defn'

/**
 * @name zip
 * @signature [a] -> [b] -> [[a, b]]
 * @since v0.3.0
 * @description
 * Returns a list of tuples generated by pairing elements of the first
 * list with elements of the second list, by position. The result
 * is truncated to the length of the shorter of the two input lists.
 * @see zipObj
 *
 * @example
 * zip(['a', 'b', 'c'], [1, 2, 3]) // => [['a', 1], ['b', 2], ['c', 3]]
 * zip(['a', 'b', 'c'], [1])       // => [['a', 1]]
 */
export default _defn('zip', function (as, bs) {
  var i   = 0
    , len = Math.min(as.length, bs.length)
    , abs = new Array(len)

  for (; i < len; i++) {
    abs[i] = [as[i], bs[i]]
  }
  return abs
})
