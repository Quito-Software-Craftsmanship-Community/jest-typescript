import { Test } from '../src/sum';

describe('examples', () => {
    beforeEach(() => {
        console.log('before each')
    });
    test('3 + 5 should be 8', () => {
        const test1 = new Test();
        expect(test1.sum(3, 5)).toBe(8);

    });
    afterEach(() => {
        console.log('after each')
    });
});