import { expect } from 'chai';
import urlExtractor from '../src/urlExtractor';
import URLData from "../src/models/URLData";

describe(".extract()", () => {
    it ("should throw an error when argument is an empty string", () => {
        expect(() => urlExtractor.extract('')).to.throw();
    });

    it ("should throw an error with an error message", () => {
        expect(() => urlExtractor.extract('')).to.throw('URL cannot be empty');
    });

    it('should return an object when a url is passed in', () => {
        const result = urlExtractor.extract('tddbuddy.com');
        expect(result).to.be.instanceOf(URLData);
        expect(result.subdomain).to.equal('');
    });

    it('should return domain name of url', () => {
        expect(urlExtractor.extract('tddbuddy.com').domain).to.equal('tddbuddy.com');
    });

    it('should return a URLData object with subdomain', () => {
        expect(urlExtractor.extract('www.tddbuddy.com').subdomain).to.equal('www');
    });

    it('should return a URLData object with protocol, domain and subdomain', () => {
        const result = urlExtractor.extract('http://www.tddbuddy.com');
        expect(result.subdomain).to.equal('www');
        expect(result.protocol).to.equal('http');
        expect(result.domain).to.equal('tddbuddy.com');
    })

    it('should return a URLData object with protocol and domain', () => {
        const result = urlExtractor.extract('http://tddbuddy.com');
        expect(result.subdomain).to.equal('');
        expect(result.protocol).to.equal('http');
        expect(result.domain).to.equal('tddbuddy.com');
    })

    it("should return a URLData object with hostname", () => {
        expect(urlExtractor.extract('tddbuddy.com').hostname).to.equal('tddbuddy.com');
        expect(urlExtractor.extract('www.tddbuddy.com').hostname).to.equal('www.tddbuddy.com');
        expect(urlExtractor.extract('http://www.tddbuddy.com').hostname).to.equal('www.tddbuddy.com');
    })
});
