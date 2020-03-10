const describe = require('mocha').describe
const it = require('mocha').it
const expect = require('chai').expect
const strictEqual = require('./functions')


describe('Functions', () => {
    describe('strictEqual', () => {
        it('checks for equality and returns a boolean', () => {

            const values = ('5', '5')

            const val = strictEqual(values)

            expect(val).to.equal(true)
        })
    })
})


