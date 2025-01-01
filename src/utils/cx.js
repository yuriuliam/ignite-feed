/**
 * 
 * @param  {(string | boolean | null | undefined)[]} classNames
 * @returns {string}
 */
export function cx(...classNames) {
  return classNames.reduce((acc, cur, idx, arr) => {
    return typeof cur === 'string' && cur && arr.indexOf(cur) === idx
      ? `${acc} ${cur}`
      : acc
  }, '')
}
