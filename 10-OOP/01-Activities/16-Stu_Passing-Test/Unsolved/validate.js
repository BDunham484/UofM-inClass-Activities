class Validate {}

Validate.prototype.isPassword = (password) => {
  // TODO: Write code that checks if the password is less than 8 characters and returns false if so.
  // TODO: Write code the checks if the password contains at least 1 uppercase, lowercase, and number. It should return true if it does, and false if not.
  if (password.length < 8) {
    return false
  }

  if (password !== password.toLowerCase() && password !== password.toUpperCase() && /\d/.test(str)) {
    return true
  } else {
    return false
  }

  if () {
    return true
  }
};

module.exports = Validate;
