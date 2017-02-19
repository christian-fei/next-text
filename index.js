'use strict'
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

function parseArgs (argsArray) {
  var args = Array.prototype.slice.call(argsArray)
  if (args.length === 1) {
    return {
      originalString: args[0],
      options: {},
      currentString: ''
    }
  }
  if (args.length === 2) {
    if (typeof args[1] === 'object') {
      return {
        originalString: args[0],
        options: args[1],
        currentString: args[2] || ''
      }
    }
    return {
      originalString: args[0],
      options: {},
      currentString: args[1] || ''
    }
  }
  return {
    originalString: args[0],
    options: args[1],
    currentString: args[2] || ''
  }
}
