const pubSub = require('../helpers/pub_sub')

const ResultView = function() {
  this.result = document.querySelector('#result')
}

ResultView.prototype.addListener = function() {
  pubSub.subscribe('WordCounter:count', event => {
    const wordCount = event.detail
    this.result.textContent = `There are ${wordCount} words.`
  })
}

module.exports = ResultView
