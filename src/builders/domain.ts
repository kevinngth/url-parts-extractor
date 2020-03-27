import URLData from "../models/URLData";

const DEFAULT_SUBDOMAIN = '';
const DOMAIN_SEPARATOR = '.';
const getDomainArray = (hostname: string) => hostname.split(DOMAIN_SEPARATOR);

export default {
    hasSubdomain(url: string): boolean {
        return getDomainArray(url).length === 3;
    },

    buildSubdomain(urlData: URLData): void {
        urlData.subdomain = urlData.hasSubdomain() ? getDomainArray(urlData.hostname)[0] : DEFAULT_SUBDOMAIN;
    },

    buildDomain(urlData: URLData): void {
        const { hostname } = urlData
        urlData.domain = urlData.hasSubdomain() 
            ? getDomainArray(hostname).slice(1).join(DOMAIN_SEPARATOR) 
            : hostname;
    }
}