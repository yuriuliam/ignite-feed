type ClassNameValue = string | boolean | null | undefined

/** Concat element classnames in a simple way. */ 
export function cx(...classNames: ClassNameValue[]) {
  return classNames.reduce<string>((acc, cur, idx, arr) => {
    return typeof cur === 'string' && cur && arr.indexOf(cur) === idx
      ? `${acc} ${cur}`
      : acc
  }, '')
}
