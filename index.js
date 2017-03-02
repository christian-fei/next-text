module.exports = nextText

function nextText (originalString, options = {}, currentString = '') {
  const next = nextFor(originalString, options, currentString)
  const reset = () => nextText(originalString, options, '')
  const toString = () => currentString
  return { toString, next, reset }
}

function nextFor (originalString, options, currentString) {
  var remainingText = originalString.slice(currentString.length)
  var finishedTyping = remainingText.length === 0
  if (finishedTyping) {
    return () => nextText(originalString, options, options.restart ? '' : originalString)
  }
  return () => nextText(originalString, options, currentString + remainingText[0])
}
