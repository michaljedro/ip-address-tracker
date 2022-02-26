// https://geo.ipify.org/docs

import { isValidIpAddress } from './validation/IpAddressValidator'
import { isValidDomainName } from './validation/DomainNameValidator'

const accessToken = process.env.REACT_APP_IPIFY_ACCESS_TOKEN

const baseUrl = `https://geo.ipify.org/api/v2/country,city?apiKey=${accessToken}`

function buildUrl(ipAddress, domain) {
  if (isValidIpAddress(ipAddress)) {
    return `${baseUrl}&ipAddress=${ipAddress}`
  }
  if (isValidDomainName(domain)) {
    return `${baseUrl}&domain=${domain}`
  }
  throw new URIError(`Cannot build url for invalid ipAddress=${ipAddress} or domain=${domain}`)
}

function formatLocation({ city, region, postalCode }) {
  return `${city}, ${region} ${postalCode}`
}

export async function getGeoInfo({
  ipAddress,
  domain,
}) {
  const url = buildUrl(ipAddress, domain)
  const response = await fetch(url)
  const data = await response.json()

  const { ip, location, isp } = data

  return {
    ipAddress: ip,
    location: formatLocation(location),
    timezone: location.timezone,
    isp: isp,
  }
}