import _defn from './internal/_defn'

/**
 * @name multiply
 * @signature Number -> Number -> Number
 * @since v0.14.0
 * @description
 * Returns the product of two numbers.
 *
 * @example
 * multiply(2, 3) // => 6
 * map(multiply(2), [1, 2, 3, 4]) // => [2, 4, 6, 8]
 */
export default _defn('multiply', function (a, b) {
  return a * b
})
