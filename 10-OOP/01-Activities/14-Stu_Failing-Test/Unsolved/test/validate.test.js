// TODO: Import the Validate class.
const Validate = require('../validate')
// TODO: Describe a testing suite for checking the functionality of the Validate class.
describe('Validate', () => {
// TODO: Write a test that asserts that isPassword() returns false when passed an empty string.
    describe('isPassword', () => {
        it('should return false if passed an empty string.', () => {
            const validate = new Validate();
            expect(validate.isPassword('')).toEqual(false)
        })
    })

})
