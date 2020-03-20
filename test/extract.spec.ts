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
        expect(urlExtractor.extract('tddbuddy.com')).to.be.instanceOf(URLData);
    });

    it('should return domain name of url', () => {
        expect(urlExtractor.extract('tddbuddy.com').domain).to.equal('tddbuddy.com');
    })
});
