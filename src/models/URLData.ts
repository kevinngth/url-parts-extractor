export default class URLData {
    public subdomain: string;
    public domain: string;
    public protocol: string;
    
    constructor(subdomain: string, domain: string, protocol: string) {
        this.subdomain = subdomain;
        this.domain = domain;
        this.protocol = protocol
    }
}
