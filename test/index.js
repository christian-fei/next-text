/* globals test */
'use strict'
const nextText = require('..')
const {ok, equal} = require('assert')

test('nextText', function () {
  test('returns an object with `.toString()`', function () {
    let text = nextText('Lorem')
    ok(text.toString)
    equal(typeof text.toString, 'function')
  })

  test('`.toString()` returns each letter in sequence', function () {
    let text = nextText('Lorem')
    equal(text.toString(), '')
    text = text.next()
    equal(text.toString(), 'L')
    text = text.next()
    equal(text.toString(), 'Lo')
    text = text.next()
    equal(text.toString(), 'Lor')
    text = text.next()
    equal(text.toString(), 'Lore')
    text = text.next()
    equal(text.toString(), 'Lorem')
  })

  test('`.toString()` can also be omitted when coercing to string', function () {
    let text = nextText('Lorem')
    equal(text, '')
    equal(text = text.next(), 'L')
    equal(text = text.next(), 'Lo')
    equal(text = text.next(), 'Lor')
    equal(text = text.next(), 'Lore')
    equal(text = text.next(), 'Lorem')
  })

  test('when the string has been iterated', function () {
    test('returns always the original text', function () {
      let text = nextText('test')
      equal(text, '')
      equal(text = text.next(), 't')
      equal(text = text.next(), 'te')
      equal(text = text.next(), 'tes')
      equal(text = text.next(), 'test')
      equal(text = text.next(), 'test')
      equal(text = text.next(), 'test')
      equal(text = text.next(), 'test')
    })

    test('can be specified if the string should be iterated from the start', function () {
      let text = nextText('test', {restart: true})
      equal(text, '')
      equal(text = text.next(), 't')
      equal(text = text.next(), 'te')
      equal(text = text.next(), 'tes')
      equal(text = text.next(), 'test')
      equal(text = text.next(), '')
      equal(text = text.next(), 't')
      equal(text = text.next(), 'te')
      equal(text = text.next(), 'tes')
      equal(text = text.next(), 'test')
    })
  })
})
