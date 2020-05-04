export const rem = (px) => `${px / 16}rem`
export const remPair = (px) => ({ [px]: rem(px) })
export const em = (px) => `${px / 16}em`
export const pxPair = (px) => ({ [px]: `${px}px` })
