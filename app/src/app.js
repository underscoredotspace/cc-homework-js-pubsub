const InputView = require('./views/InputView')
const WordCounter = require('./models/WordCounter')

console.log('Loaded JS')

const inputView = new InputView
inputView.addListener()

const wordCounter = new WordCounter
wordCounter.addListener()