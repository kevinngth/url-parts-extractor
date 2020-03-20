import URLData from './models/URLData';
import { buildSubdomain, buildDomain } from './builders/DomainBuilder';
const EMPTY_URL_ERROR_MESSAGE = 'URL cannot be empty';
const DOMAIN_SEPARATOR = '.';

export default {
    extract(url: string): URLData {
        if (!url) throw new Error(EMPTY_URL_ERROR_MESSAGE);
        const domainArray = url.split(DOMAIN_SEPARATOR);
        const subdomain = buildSubdomain(domainArray);
        const domain = buildDomain(domainArray);
        return new URLData(subdomain, domain);
    }
}
