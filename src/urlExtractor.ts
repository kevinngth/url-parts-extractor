const EMPTY_URL_ERROR_MESSAGE = 'URL cannot be empty';
export default {
    extract(url: string) {
        throw new Error(EMPTY_URL_ERROR_MESSAGE);
    }
}
