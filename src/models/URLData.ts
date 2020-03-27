export default class URLData {
    public hostname: string;
    public subdomain: string;
    public domain: string;
    public protocol: string;
    public url: string;
    private readonly domainSeparator: string = '.';

    constructor(url: string) {
        this.url = url;
    }

    hasSubdomain(): boolean {
        return this.url
            .split(this.domainSeparator)
            .length === 3;
    }
}
