'use strict'
module.exports = function nextText (originalString, options = {}, currentString = '') {
  return {
    toString,
    next
  }

  function next () {
    var remainingText = originalString.slice(currentString.length)
    var finishedTyping = remainingText.length === 0
    if (finishedTyping) {
      return nextText(originalString, options, options.restart ? '' : originalString)
    }
    return nextText(originalString, options, currentString + remainingText[0])
  }

  function toString () {
    return currentString
  }
}
