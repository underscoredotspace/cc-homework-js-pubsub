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
    const words = event.detail
    const wordCount = this.count(words)
    pubSub.publish('WordCounter:count', wordCount)
  })
}

module.exports = WordCounter
