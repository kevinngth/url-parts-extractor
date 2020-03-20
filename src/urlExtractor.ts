import URLData from './models/URLData';
import DomainBuilder from './utils/DomainParser';
const EMPTY_URL_ERROR_MESSAGE = 'URL cannot be empty';
const DOMAIN_SEPARATOR = '.';

export default {
    extract(url: string): URLData {
        if (!url) throw new Error(EMPTY_URL_ERROR_MESSAGE);
        const [protocol, hostName] = url.includes('://') ? url.split('://') : ['', url];
        const domainBuilder = new DomainBuilder(hostName);
        return new URLData(
            domainBuilder.getSubdomain(), 
            domainBuilder.getDomain(), 
            protocol
        );
    }
}
