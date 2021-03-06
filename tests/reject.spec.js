const test       = require('ava')
    , { reject } = require('../dist/redash')

test('properly reports its arity (is binary)', (t) => {
  t.is(reject.length, 2)
})

test('is curried', (t) => {
  t.is(typeof reject(() => {}), 'function')
})

test('returns an array containing only the items where the predicate returned false', (t) => {
  t.deepEqual(reject(x => x < 3, [1, 2, 3, 4, 5]), [3, 4, 5])
})

test('works for objects', (t) => {
  t.deepEqual(
    reject(x => x > 5, { a: 1, b: 6, c: 5, d: 7 }),
    { a: 1, c: 5 }
  )
})
