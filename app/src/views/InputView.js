const pubSub = require('../helpers/pub_sub')

const InputView = function() {
  this.form = document.querySelector('#wordcounter-form')
}

InputView.prototype.addListener = function() {
  this.form.addEventListener('submit', event => {
    event.preventDefault()
    const words = event.target.text.value
    pubSub.publish('InputView:words', words)
  })
}

module.exports = InputView