import { expect } from 'chai';
import urlExtractor from '../src/urlExtractor';

describe(".extract()", () => {
    it ("should throw an error when argument is an empty string", () => {
        expect(() => urlExtractor.extract('')).to.throw();
    });
});
