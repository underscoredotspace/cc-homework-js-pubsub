const InputView = require('./views/InputView')
const ResultView = require('./views/ResultView')
const WordCounter = require('./models/WordCounter')

console.log('Loaded JS')

const inputView = new InputView
inputView.addListener()

const wordCounter = new WordCounter
wordCounter.addListener()

const resultView = new ResultView
resultView.addListener()