import _defn from './internal/_defn'

/**
 * @name scan
 * @signature (b, a -> b) -> b -> [a] -> [b]
 * @since v0.12.0
 * @description
 * Similar to reduce, but, instead of returning the final accumulator value,
 * returns a list containing each iteration of the accumulator.
 * @see reduce
 *
 * @example
 * // initial accumulator  --> 0
 * // first step:  0 + 1   --> 1
 * // second step: 1 + 2   --> 3
 * // third step:  3 + 3   --> 6
 * // fourth step: 6 + 4   --> 10
 * scan(add, 0, [1, 2, 3, 4]) // => [0, 1, 3, 6, 10]
 */
export default _defn('scan', function (fn, acc, xs) {
  var i   = 0
    , res = [acc]

  for (; i < xs.length; i++) {
    acc = fn(acc, xs[i])
    res[res.length] = acc
  }
  return res
})
