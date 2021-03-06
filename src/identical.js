import _defn from './internal/_defn'
import _identical from './internal/_identical'

/**
 * @name identical
 * @signature a -> a -> Boolean
 * @since v0.13.0
 * @description
 * Checks whether two values are strictly identical. For objects, this test
 * asserts that they reference the same place in memory (think `===`).
 * For deep comparisons, use `equals`.
 * @see equals
 *
 * @example
 * identical(5, 5) // => true
 *
 * // Objects are compared by reference, unlike `equals`.
 * const a = { id: 1 }
 * identical(a, a)         // => true
 * identical(a, { id: 1 }) // => false
 */
export default _defn('identical', _identical)
