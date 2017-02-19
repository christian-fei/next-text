'use strict'
const {parseArgs} = require('./utils')

module.exports = function nextText () {
  const {originalString, options, currentString} = parseArgs(arguments)
  return {
    toString,
    next
  }

  function next () {
    var currentLength = currentString.length
    var remainingText = originalString.slice(currentLength)
    var nextLetter = remainingText.length === 0 ? '' : remainingText[0]
    var nextString = currentString + nextLetter
    if (options.restart) {
      if (nextLetter === '') {
        return nextText(originalString, options, '')
      }
      return nextText(originalString, options, nextString)
    }
    return nextText(originalString, nextString)
  }

  function toString () {
    return currentString
  }
}
