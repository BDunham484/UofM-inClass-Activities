// TODO: Define a Validate class with an isPassword() function that takes in a password parameter.
function Validate() {}

Validate.prototype.isPassword = (password) => {
    if (!password) {
        console.log(false);
        return false;
    }
}
// TODO: Export the Validate class from this file.
module.exports = Validate