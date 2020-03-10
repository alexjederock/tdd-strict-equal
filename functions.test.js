const describe = require('mocha').describe
const it = require('mocha').it
const expect = require('chai').expect
const strictEquals = require('.\\functions')


describe('Functions', () => {
    describe('strictEquals', () => {
        it('checks for equality and returns a boolean', () => {

            const values = ('5', '5')

            const val = strictEquals(values)

            expect(val).to.equal(true)
        })
    })
})


