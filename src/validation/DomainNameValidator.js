const DOMAIN_NAME_REGEX = new RegExp(/^((?:(?:(?:\w[\.\-\+]?)*)\w)+)((?:(?:(?:\w[\.\-\+]?){0,62})\w)+)\.(\w{2,6})$/)

export function isValidDomainName(string) {
  return string && string.match(DOMAIN_NAME_REGEX)
}
