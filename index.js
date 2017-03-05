module.exports = nextText

function nextText (originalString, options, currentString) {
  originalString = originalString || ''
  options = options || {}
  currentString = currentString ? currentString : ''
  return Object.assign(currentString, {
    next: nextFor(originalString, options, currentString),
    reset: function () { return nextText(originalString, options, '') }
  })
}

function nextFor (originalString, options, currentString) {
  var remainingText = originalString.slice(currentString.length)
  var finishedTyping = remainingText.length === 0
  if (finishedTyping) {
    return function () { return nextText(originalString, options, options.restart ? '' : originalString) }
  }
  return function () { return nextText(originalString, options, currentString + remainingText[0]) }
}
