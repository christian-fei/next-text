'use strict'
module.exports = function nextText (originalString, currentString) {
  currentString = currentString || ''
  return {
    toString,
    next
  }

  function next () {
    var currentLength = currentString.length
    var remainingText = originalString.slice(currentLength)
    var nextLetter = remainingText.length === 0 ? '' : remainingText[0]
    var nextString = currentString + nextLetter
    return nextText(originalString, nextString)
  }

  function toString () {
    return currentString
  }
}
