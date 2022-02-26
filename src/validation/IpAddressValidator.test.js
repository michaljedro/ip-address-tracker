import { isValidIpAddress } from './IpAddressValidator'

describe('isValidIpAddress', () => {
  it('should 0.0.0.0 be valid IP Address', () => {
    const expected = true
    const actual = isValidIpAddress('0.0.0.0')
    expect(actual).toBe(expected)
  })

  it('should 666.666 fail', () => {
    const expected = false
    const actual = isValidIpAddress('666.666')
    expect(actual).toBe(expected)
  })

  it('should pass for 4 segment IP address', () => {
    let expected = true
    let actual = isValidIpAddress('1.2.3.4')
    expect(actual).toBe(expected)

    expected = false
    actual = isValidIpAddress('1.2.3.4.5')
    expect(actual).toBe(expected)

    expected = false
    actual = isValidIpAddress('1.2.3')
    expect(actual).toBe(expected)
  })

  it('should every segment be from 0 to 255', () => {
    const expected = false
    const actual = isValidIpAddress('666.666')
    expect(actual).toBe(expected)
  })

  it('should handle null param', () => {
    const expected = false
    const actual = isValidIpAddress(null)
    expect(actual).toBe(expected)
  })

  it('should handle no params', () => {
    const expected = false
    const actual = isValidIpAddress()
    expect(actual).toBe(expected)
  })
})
