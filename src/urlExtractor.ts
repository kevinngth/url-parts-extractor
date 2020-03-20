import URLData from "./models/URLData";
const EMPTY_URL_ERROR_MESSAGE = 'URL cannot be empty';

export default {
    extract(url: string): object {
        if (!url) {
            throw new Error(EMPTY_URL_ERROR_MESSAGE);
        }
        return new URLData();
    }
}
