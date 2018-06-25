const assert = require('assert')
const wordCount = require('../src/models/wordCounter')

describe('wordCounter', () => {
  it('returns 0 where no string given', () => {
    assert.strictEqual(wordCount(''), 0)
  })

  it('returns 4 given 4 words', () => {
    assert.strictEqual(wordCount('how now brown cow'), 4)
  })

  it('returns 4 given 4 words with duplicated spaces', () => {
    assert.strictEqual(wordCount('how  now brown    cow'), 4)
  })

  it('returns 4 given 4 words with spaces on outside of string', () => {
    assert.strictEqual(wordCount('  how now brown cow '), 4)
  })
})