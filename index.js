'use strict'
module.exports = nextText

function nextText (originalString, options = {}, currentString = '') {
  const next = nextFor(originalString, options, currentString)
  const toString = () => currentString

  return {
    toString,
    next
  }
}

function nextFor (originalString, options, currentString) {
  var remainingText = originalString.slice(currentString.length)
  var finishedTyping = remainingText.length === 0
  if (finishedTyping) {
    return () => nextText(originalString, options, options.restart ? '' : originalString)
  }
  return () => nextText(originalString, options, currentString + remainingText[0])
}

function nextFrom (nextTextInstance) {
  return nextFor(nextTextInstance.originalString, nextTextInstance.options, nextTextInstance.currentString)()
}
