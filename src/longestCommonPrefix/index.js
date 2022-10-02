function longestCommonPrefix(strs) {
  // stores a prefix that will be returned at the end
  let prefix = ''
  // if there are no words, or there are empty words, return early
  if (!strs.length || strs.some(a => !a)) return prefix

  // stores the first words letters in an array
  const firstWordLetters = strs[0].split('')

  // checks if every other word has the same letters as this one
  // and if they do, store on prefix variable
  firstWordLetters.every((letter, index) => {
    // if all words have the same letter in same place, return true and
    // continue for the next letter, else return false early and stop execution
    if (strs.every(word => word[index] === letter)) {
      prefix += letter
      return true
    } else return false
  })

  // at the end, return the prefix we stored
  return prefix
}

module.exports = longestCommonPrefix