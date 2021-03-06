import _defn from './internal/_defn'
import chain from './chain'
import init from './init'

/**
 * @name interpose
 * @signature Any a => a -> [a] -> [a]
 * @since v0.21.0
 * @description
 * Interposes a separator between elements in a list.
 *
 * @example
 * interpose('FOO', ['a', 'b', 'c']) // => ['a', 'FOO', 'b', 'FOO', 'c']
 */
export default _defn('interpose', function (separator, xs) {
  return init(chain(function (x) {
    return [x, separator]
  }, xs))
})
