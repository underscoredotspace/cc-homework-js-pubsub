const wordCount = words => words.length===0?0:words.trim().replace(/\s+/g, ' ').split(' ').length

module.exports = wordCount