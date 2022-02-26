export function isValidIpAddress(string) {
  if (typeof string !== 'string') {
    return false
  }

  const segments = string.split('.')

  if (segments.length !== 4) {
    return false
  }

  return segments.every(segment => {
    const segmentNumber = parseInt(segment, 10)
    return segmentNumber >= 0 && segmentNumber <= 255
  })
}
