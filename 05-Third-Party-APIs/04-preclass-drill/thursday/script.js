const isPalindrome = (string) => {
    console.log(string);
    let arr = string.split('');
    console.log(arr);
    let reversedArr = arr.reverse();
    console.log(reversedArr);

    let matched = 0

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === reversedArr[i]) {
            console.log(arr[i] + ' - ' + reversedArr[i])
            matched++
        }
    }

    if (matched === arr.length) {
        console.log('IS PALINDROME');
    } else {
        console.log('NOT PALINDROM');
    }
}

isPalindrome('bill');