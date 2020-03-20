export default class DomainBuilder {
    private hasSubdomain: boolean;
    private domainArray: string[];
    private readonly domainSeparator = '.';
    private readonly defaultSubdomain = '';
    constructor(hostName: string) {
        this.domainArray = hostName.split(this.domainSeparator);
        this.hasSubdomain = this.domainArray.length === 3;
    }

    getSubdomain(): string {
        return this.hasSubdomain ? this.domainArray[0] : this.defaultSubdomain;
    }

    getDomain(): string {
        return this.hasSubdomain 
        ? this.domainArray[1] + this.domainSeparator + this.domainArray[2]
        : this.domainArray.join(this.domainSeparator);
    }
}