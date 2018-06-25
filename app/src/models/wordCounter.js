const wordCount = words => {
  return words.length===0?0:  // return 0 if empty string
    words.trim()              // remove spaces at start and end
      .replace(/\s+/g, ' ')   // remove duplicate spaces
      .split(' ')             // split by remaining spaces
      .length                 // return count
}

module.exports = wordCount