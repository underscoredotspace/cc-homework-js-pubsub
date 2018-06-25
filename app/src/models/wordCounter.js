const pubSub = require('../helpers/pub_sub')
const WordCounter = function() {}

WordCounter.prototype.count = function(words) {
  return words.length===0?0:  // return 0 if empty string
    words.trim()              // remove spaces at start and end
      .replace(/\s+/g, ' ')   // remove duplicate spaces
      .split(' ')             // split by remaining spaces
      .length                 // return count
}

WordCounter.prototype.addListener = function() {
  pubSub.subscribe('InputView:words', event => {
    const wordCount = this.count(event.detail)
    console.log(`There are ${wordCount} words. `)
  })
}

module.exports = WordCounter