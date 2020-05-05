const rem = (px) => `${px / 16}rem`
const remPair = (px) => ({ [px]: rem(px) })
const em = (px) => `${px / 16}em`
const pxPair = (px) => ({ [px]: `${px}px` })

module.exports = { rem, remPair, em, pxPair }
