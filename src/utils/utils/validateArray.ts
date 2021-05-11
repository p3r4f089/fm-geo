export const validateArray = (array: Array<any>) => {
  return array !== undefined && array !== null && Array.isArray(array) && array.length > 0
}