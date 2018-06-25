const pubSub = require('../helpers/pub_sub')

const ResultView = function() {
  this.result = document.querySelector('#result')
}

ResultView.prototype.addListener = function() {
  pubSub.subscribe('WordCounter:count', wordCount => {
    this.result.textContent = `There are ${wordCount.detail} words.`
  })
}

module.exports = ResultView