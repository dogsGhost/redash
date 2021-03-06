import _defn from './internal/_defn'
import complement from './complement'
import filter from './filter'

/**
 * @name reject
 * @signature
 * (a -> Boolean) -> [a] -> [a]
 * String k, Any v => (v -> Boolean) -> {k:v} -> {k:v}
 * @since v0.1.0
 * @description
 * Returns a subset of a list which excludes all items for which the
 * predicate function returned true. This is the inverse of `filter` and is
 * equivalent to `filter(complement(predicate))`.
 *
 * @example
 * reject(isEven, [1, 2, 3, 4, 5]) // => [1, 3, 5]
 */
export default _defn('reject', function (pred, xs) {
  return filter(complement(pred), xs)
})
