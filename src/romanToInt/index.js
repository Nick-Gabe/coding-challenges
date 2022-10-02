const romanToInt = (romanStr) => {
  // if it isn't string, return early
  if (typeof romanStr !== 'string') return

  // stores the basic values we need and their symbols
  const dict = {
    I: 1,
    IV: 4,
    V: 5,
    IX: 9,
    X: 10,
    XL: 40,
    L: 50,
    XC: 90,
    C: 100,
    CD: 400,
    D: 500,
    CM: 900,
    M: 1000,
  }

  const biggerToSmaller = (a, b) => (a.length < b.length ? 1 : -1)

  // makes an array with symbols and sorts them
  const symbols = Object.keys(dict).sort(biggerToSmaller)

  // creates a regular expression for validating and sepparating the string
  const symbolsRegex = new RegExp(symbols.join('|'), 'gi')

  const convertSymbolToNumber = (symbol) => dict[symbol]
  const sumAll = (acc, cur) => acc + cur

  // returns all the matches of symbols inside an array
  const stringMatches = romanStr.match(symbolsRegex)
  // convert all the symbols to numbers and sum all of 
  const finalNumber = stringMatches.map(convertSymbolToNumber).reduce(sumAll)

  return finalNumber
}

module.exports = romanToInt
