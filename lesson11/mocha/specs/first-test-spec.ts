import { expect } from 'chai';

describe('This is the set of tests', () => {
    describe('This is a first test', () => {
        it('Sum is 4', () => {
            const sum = 2 + 2;
            expect(sum).to.equal(4).and.to.be.a('number');
        });
    });
});
