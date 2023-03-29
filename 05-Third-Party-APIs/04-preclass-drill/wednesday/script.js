const vowelCounter = (string) => {
    let vowelArr = ['a', 'e', 'i', 'o', 'u'];
    let vowelsInStringArr = [];

    for (let i = 0; i < string.length; i++) {
        for (let n = 0; n < vowelArr.length; n++) {
            if (string[i] === vowelArr[n]) {
                vowelsInStringArr.push(string[i])
                console.log(string[i] + ' is a vowel')
            }
        }
    }
    console.log(string + ' has ' + vowelsInStringArr.length + ' vowels in it.');
}

vowelCounter('thisisaword')