import URLData from "../models/URLData";

const PROTOCOL_SEPARATOR = '://';

export default {
    build (urlData: URLData) : void {
        const { url } = urlData;
        urlData.hostname = url.includes(PROTOCOL_SEPARATOR) ? url.split(PROTOCOL_SEPARATOR)[1] : url;
    }
}
