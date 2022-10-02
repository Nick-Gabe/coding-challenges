const longestCommonPrefix = require('../src/longestCommonPrefix')

test('recognizes common word prefixes', () => {
  expect(longestCommonPrefix(['a','a','a'])).toBe('a')
  expect(longestCommonPrefix(['a','ab','a'])).toBe('a')
  expect(longestCommonPrefix(['a','b','a'])).toBe('')
  expect(longestCommonPrefix(['howdy','hohoho','hooray'])).toBe('ho')
  expect(longestCommonPrefix(['column','cowboy','car'])).toBe('c')
  expect(longestCommonPrefix(['column','cowboy','color'])).toBe('co')
  expect(longestCommonPrefix(['hi','hi','hi'])).toBe('hi')
})

test('should understand edge cases', () => {
  expect(longestCommonPrefix(['','a',''])).toBe('')
  expect(longestCommonPrefix([''])).toBe('')
  expect(longestCommonPrefix(['', '', ''])).toBe('')
  expect(longestCommonPrefix(['aaaaaaaaaa', '', ''])).toBe('')
})