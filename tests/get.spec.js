const test    = require('ava')
    , { get } = require('../dist/redash')

test('properly reports its arity (is binary)', (t) => {
  t.is(get.length, 2)
})

test('is curried', (t) => {
  t.is(typeof get('foo'), 'function')
})

test('returns the requested property off of the object', (t) => {
  t.is(get('foo', { foo: 'bar' }), 'bar')
})

test('returns undefined when the property is not defined', (t) => {
  t.is(get('foo', {}), undefined)
})

test('returns undefined if the target is nil', (t) => {
  t.is(get('foo', null), undefined)
})
