const romanToInt = require('../src/romanToInt');

test('recognizes simple numbers', () => {
  expect(romanToInt('I')).toBe(1)
  expect(romanToInt('II')).toBe(2)
  expect(romanToInt('III')).toBe(3)
  expect(romanToInt('IV')).toBe(4)
  expect(romanToInt('V')).toBe(5)
  expect(romanToInt('VI')).toBe(6)
  expect(romanToInt('VII')).toBe(7)
  expect(romanToInt('VIII')).toBe(8)
  expect(romanToInt('IX')).toBe(9)
  expect(romanToInt('X')).toBe(10)
  expect(romanToInt('L')).toBe(50)
  expect(romanToInt('C')).toBe(100)
  expect(romanToInt('D')).toBe(500)
  expect(romanToInt('M')).toBe(1000)
})

test('understands more complex numbers', () => {
  expect(romanToInt('XII')).toBe(12)
  expect(romanToInt('XXIV')).toBe(24)
  expect(romanToInt('XLI')).toBe(41)
  expect(romanToInt('LXXVIII')).toBe(78)
  expect(romanToInt('XCIX')).toBe(99)
  expect(romanToInt('CLXII')).toBe(162)
  expect(romanToInt('CDLXV')).toBe(465)
  expect(romanToInt('CDLXV')).toBe(465)
  expect(romanToInt('DCCXX')).toBe(720)
  expect(romanToInt('CMII')).toBe(902)
  expect(romanToInt('MMXXII')).toBe(2022)
  expect(romanToInt('MMMCMXCIX')).toBe(3999)
})

test('refuses inputs other than strings', () => {
  expect(romanToInt(10)).toBe(undefined)
  expect(romanToInt(true)).toBe(undefined)
  expect(romanToInt([])).toBe(undefined)
  expect(romanToInt({})).toBe(undefined)
})
