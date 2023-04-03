let buttonEl = document.getElementById('form-submit');
let inputEl = document.getElementById('form-input');
let responseEl = document.getElementById('response');


const clickHandler = (event) => {
    event.preventDefault();

    let string = inputEl.value;

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
        console.log("'" + string + "'" + ' has ' + vowelsInStringArr.length + ' vowels in it.');
        return "'" + string + "'" + ' has ' + vowelsInStringArr.length + ' vowels in it.';
    }

    let result = vowelCounter(string);
    console.log(result)
    responseEl.textContent = result;
    inputEl.value = '';
}

buttonEl.addEventListener('click', clickHandler);