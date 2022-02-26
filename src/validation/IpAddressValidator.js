export function isValidIpAddress(string) {
  if (typeof string !== 'string') {
    return false
  }

  const segments = string.split('.')

  if (segments.length !== 4) {
    return false
  }

  const parsedSegments = segments.map(segment => parseInt(segment, 10))

  for (let s of parsedSegments) {
    if (s < 0 || s > 255) {
      return false
    }
  }

  return true
}
