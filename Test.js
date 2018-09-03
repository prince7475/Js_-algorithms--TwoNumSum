const chai = require('chai');
const program = require('./SecondGo')

describe('Two sums', function () {

    it('Test #1', function() {
    chai.expect(program.twoNumberSum([4, 6], 10)).to.deep.equal([4, 6]);
    });

    it('Test #2', function() {

        chai.expect(program.twoNumberSum([4, 6, 1], 5)).to.deep.equal([1, 4]);
    });

    it('Test #3', function() {
     chai.expect(program.twoNumberSum([4, 6, 1, -3], 3)).to.deep.equal([-3, 6]);
    });

    
    it('Test #4', function() {
        chai.expect(program.twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10)).to.deep.equal([-1, 11]);
    });

    it('Test #5', function() {
        chai.expect(program.twoNumberSum([1, 2, 3, 4, 5, 6, 7, 8, 9], 17)).to.deep.equal([8, 9]);
    });

    it('Test #6', function() {
        chai.expect(program.twoNumberSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 15], 18)).to.deep.equal([3, 15]);
    });


    it('Test #7', function() {
        chai.expect(program.twoNumberSum([-7, -5, -3, -1, 0, 1, 3, 5, 7], -5)).to.deep.equal([-5, 0]);
    });


    it('Test #8', function() {
        chai.expect(program.twoNumberSum([-21, 301, 12, 4, 65, 56, 210, 356, 9, -47], 163)).to.deep.equal([-47, 210]);

    });

});







