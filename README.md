[![travis-build-status](https://travis-ci.org/christian-fei/next-text.svg?branch=master)](https://travis-ci.org/christian-fei/next-text)
[![npm-dependencies](https://img.shields.io/badge/dependencies-none-blue.svg?style=flat-square&colorB=44CC11)](package.json)
[![standard-js](https://img.shields.io/badge/coding%20style-standard-brightgreen.svg?style=flat-square)](http://standardjs.com/)
[![npm-node-version](https://img.shields.io/badge/node-6%2B-blue.svg?style=flat-square)](https://nodejs.org/docs/v6.0.0/api)
[![npm-version](https://img.shields.io/npm/v/next-text.svg?style=flat-square&colorB=007EC6)](https://www.npmjs.com/package/next-text)
[![license](https://img.shields.io/npm/l/next-text.svg?style=flat-square&colorB=007EC6)](https://spdx.org/licenses/MIT)

nextText is a small utility function to get the next letter from a partial string.

# api

## `nextText`

`nextText` creates an [instance of nextText](#nexttextinstance).


### Params

#### `text : String` (*required*)

The complete string the module should iterate incrementally.

#### `options : Object` (*optional*)

You can override these options:

| Option name | Default value | Description                                                  |
|-------------|---------------|--------------------------------------------------------------|
| restart     | false         | Once the text has been iterated, restart from the beginning. |

<!-- |             |               |                                                              | -->


## `nextTextInstance`

The return value of calling `nextText(string[, options])`.

### Methods

#### `.toString`

Returns the current value of the instance.

#### `.next`

Returns the next instance, with the updated current value.


# usage

[See Tests](./test/index.js).


```
const nextText = require('next-text')
let text = nextText('This is a test')
console.log(text.toString()) // ''
text = text.next()
console.log(text) // 'T'
text = text.next()
console.log(text) // 'Th'
text = text.next()
console.log(text) // 'Thi'
text = text.next()
console.log(text) // 'This'
text = text.next()
console.log(text) // 'This '
text = text.next()
console.log(text) // 'This i'
text = text.next()
console.log(text) // 'This is'
// you get the point
```
