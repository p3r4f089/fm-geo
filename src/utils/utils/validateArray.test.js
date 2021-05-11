import { validateArray } from './validateArray'

test('validate typeof array ', () => {
  expect(validateArray(['1', '3'])).toBe(true)
  expect(validateArray([])).toBe(false)
  expect(validateArray(1)).toBe(false)
})