import URLData from "../models/URLData";

const HTTP_PROTOCOL = 'http://';
const DEFAULT_SUBDOMAIN = '';
const domainSeparator = '.';

const getDomainArray = (url: string) => url.split(domainSeparator);

export default {
    hasSubdomain(url: string): boolean {
        return getDomainArray(url).length === 3;
    },

    buildSubdomain(urlData: URLData): void {
        const protocolAndSubdomain = getDomainArray(urlData.url)[0];
        if (urlData.hasSubdomain()) {
            urlData.subdomain = protocolAndSubdomain.replace(HTTP_PROTOCOL, DEFAULT_SUBDOMAIN);
        }
    },

    buildDomain(urlData: URLData): void {
        const domainArray = getDomainArray(urlData.url);
        if (urlData.hasSubdomain()) {
            urlData.domain = domainArray.slice(1).join('.');
        }
        urlData.domain = urlData.hasSubdomain()
            ? domainArray.slice(1).join('.')
            : domainArray.join('.').replace(HTTP_PROTOCOL, DEFAULT_SUBDOMAIN);
    }
}
