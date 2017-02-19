'use strict'
exports.parseArgs = function parseArgs (argsArray) {
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
