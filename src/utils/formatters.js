export const capitalizeFirstLetter = (string) => {
  if (string === null || string === undefined) return ''
  return string.charAt(0).toUpperCase() + string.slice(1)

}