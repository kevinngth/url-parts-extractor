const DOMAIN_SEPARATOR = '.';
const DEFAULT_SUBDOMAIN = '';
const hasSubdomain = (domainArray: string[]) => domainArray.length === 3;

export function buildDomain(domainArray: string[]): string {
    return hasSubdomain(domainArray)
        ? domainArray[1] + DOMAIN_SEPARATOR + domainArray[2]
        : domainArray.join(DOMAIN_SEPARATOR);
}

export function buildSubdomain(domainArray: string[]): string {
    return hasSubdomain(domainArray) ? domainArray[0] : DEFAULT_SUBDOMAIN;
}
