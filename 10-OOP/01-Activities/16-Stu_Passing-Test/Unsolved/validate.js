class Validate { }

Validate.prototype.isPassword = (password) => {
  // TODO: Write code that checks if the password is less than 8 characters and returns false if so.
  // TODO: Write code the checks if the password contains at least 1 uppercase, lowercase, and number. It should return true if it does, and false if not.
  if (password.length < 8) {
    return false
  } else if (password === password.toLowerCase()) {
    return false
  } else if (password === password.toUpperCase()) {
    return false
  } else if (/\d/.test(password) === false) {
    return false
  } else {
    return true
  }
  
};

module.exports = Validate;
