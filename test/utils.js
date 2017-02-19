/* globals test */
'use strict'
const utils = require('../utils')
const {equal, deepEqual} = require('assert')

test('utils', function () {
  test('.parseArgs', function () {
    test('parses 1 parameter', function () {
      test('text', function () {
        const {originalString, options, currentString} = utils.parseArgs(['text'])
        equal(originalString, 'text')
        deepEqual(options, {})
        equal(currentString, '')
      })
    })

    test('parses 2 parameters', function () {
      test('text, currentString', function () {
        const {originalString, options, currentString} = utils.parseArgs(['text', 'te'])
        equal(originalString, 'text')
        deepEqual(options, {})
        equal(currentString, 'te')
      })
      test('text, options', function () {
        const {originalString, options, currentString} = utils.parseArgs(['text', {restart: true}])
        equal(originalString, 'text')
        deepEqual(options, {restart: true})
        equal(currentString, '')
      })
    })
    test('parses 3 parameters', function () {
      test('text, options, currentString', function () {
        const {originalString, options, currentString} = utils.parseArgs(['text', {restart: true}, 'te'])
        equal(originalString, 'text')
        deepEqual(options, {restart: true})
        equal(currentString, 'te')
      })
    })
  })
})
