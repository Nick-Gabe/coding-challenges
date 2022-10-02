const romanToInt = (romanStr) => {
  if (typeof romanStr !== 'string') return

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

  const symbols = Object.keys(dict).sort(biggerToSmaller)

  const symbolsRegex = new RegExp(symbols.join('|'), 'gi')

  const convertSymbolToNumber = (symbol) => dict[symbol]
  const sumAll = (acc, cur) => acc + cur

  const stringMatches = romanStr.match(symbolsRegex)
  const finalNumber = stringMatches.map(convertSymbolToNumber).reduce(sumAll)

  return finalNumber
}

module.exports = romanToInt
