const describe = require('mocha').describe
const it = require('mocha').it
const expect = require('chai').expect
const strictEqual = require('./functions')


describe('Functions', () => {
    describe('strictEqual', () => {
        it('checks for equality and returns a boolean', () => {
            //create test data
            const values = (5, '5')
            //call the function
            const val = strictEqual(values)
            //make assertions
            expect(val).to.equal(false)
        })
    })
})


