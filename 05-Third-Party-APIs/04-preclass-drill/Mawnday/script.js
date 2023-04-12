var string = 'the quick brown fox jumps over the calm kitten quietly'

const noRepeats = (string) => {
    for (let i = 0; i < string.length; i++) {
        let letter = string[i];
        for (let n = 0; n < string.length; n++)  {
            if (letter === string[n]) {
                console.log(letter);
            }
        }
    }
}



noRepeats(string);