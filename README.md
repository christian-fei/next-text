nextText is a small utility function to get the next letter from a partial string.

# usage

```
const nextText = require('next-text')
let text = nextText('Lorem')
console.log(text.toString()) // ''
text = text.next()
console.log(text) // 'L'
text = text.next()
console.log(text) // 'o'
// you get the point
```
