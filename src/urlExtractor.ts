import URLData from './models/URLData';
import domainBuilder from './builders/domain';
import protocolBuilder from './builders/protocol';
import hostnameBuilder from './builders/hostname';
const EMPTY_URL_ERROR_MESSAGE = 'URL cannot be empty';

export default {
    extract(url: string): URLData {
        if (!url) throw new Error(EMPTY_URL_ERROR_MESSAGE);
        const urlData = new URLData(url);
        hostnameBuilder.build(urlData);
        domainBuilder.buildSubdomain(urlData);
        domainBuilder.buildDomain(urlData);
        protocolBuilder.build(urlData);

        return urlData;
    }
}
