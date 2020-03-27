import URLData from './models/URLData';
import domainBuilder from './builders/domain';
import protocolBuilder from './builders/protocol';
const EMPTY_URL_ERROR_MESSAGE = 'URL cannot be empty';

export default {
    extract(url: string): URLData {
        if (!url) throw new Error(EMPTY_URL_ERROR_MESSAGE);
        const urlData = new URLData(url);
        domainBuilder.buildSubdomain(urlData);
        domainBuilder.buildDomain(urlData);
        urlData.protocol = protocolBuilder.parseProtocol(urlData);

        return urlData;
    }
}
