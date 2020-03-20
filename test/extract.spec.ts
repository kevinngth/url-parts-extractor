import { expect } from 'chai';
import urlExtractor from '../src/urlExtractor';

describe(".extract()", () => {
    it ("should throw an error when argument is an empty string", () => {
        expect(() => urlExtractor.extract('')).to.throw();
    });

    it ("should throw an error with an error message", () => {
        expect(() => urlExtractor.extract('')).to.throw('URL cannot be empty');
    });

    it('should return an object when a url is passed in', () => {
        expect(urlExtractor.extract('tddbuddy.com')).to.be.an('object');
    });
});
