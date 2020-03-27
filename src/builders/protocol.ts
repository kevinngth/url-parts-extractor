import URLData from "../models/URLData";

export default {
    parseProtocol (urlData: URLData) {
        return urlData.url.includes('://')
            ? urlData.url.split('://')[0]
            : '';
    }
}
