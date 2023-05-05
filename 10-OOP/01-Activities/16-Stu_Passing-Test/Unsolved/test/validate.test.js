const Validate = require('../validate.js');

describe('Validate', () => {
  // TODO: Write a test that checks if isPassword() returns false when the password is less than 8 characters.
    describe('isPassword', () => {
      it('should return false if password is less than 8 characters', () => {
        const validate = new Validate();
        expect(validate.isPassword('passwor')).toEqual(false)
      })
    })
  // TODO: Write a test that checks if isPassword() returns false when the password does not contain at least 1 uppercase.
  describe('isPassword', () => {
    it('should return false if password does not contain at least 1 uppercase', () => {
      const validate = new Validate();
      expect(validate.isPassword('password')).toEqual(false)
    })
  })
  // TODO: Write a test that checks if isPassword() returns false when the password does not contain at least 1 lowercase.
  describe('isPassword', () => {
    it('should return false if password does not contain at least 1 lowercase', () => {
      const validate = new Validate();
      expect(validate.isPassword('PASSWORD')).toEqual(false)
    })
  })
  // TODO: Write a test that checks if isPassword() returns false when the password does not contain at least 1 number.
  describe('isPassword', () => {
    it('should return false if password does not contain at least 1 number', () => {
      const validate = new Validate();
      expect(validate.isPassword('Password')).toEqual(false)
    })
  })
  // TODO: Write a test that checks if isPassword() returns true when the password is at least 8 characters long and contains an uppercase, lowercase, and number.
  describe('isPassword', () => {
    it('should return true if password is at least 8 char long and contains upper, lower, and a number', () => {
      const validate = new Validate();
      expect(validate.isPassword('Password123')).toEqual(true)
    })
  })
});
