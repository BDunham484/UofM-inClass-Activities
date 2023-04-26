// Write code to create a function that accepts a string and returns an object containing the number of times each character appears in the string

var characterCount = function(str) {
    let charObj = {};

    for (let i = 0; i < str.lengrth; i++) {
        charObj.str[i] = i+1
        console.log(charObj)
    }
    
    return charObj;
};

let result = characterCount('hello world');

console.log(result);
