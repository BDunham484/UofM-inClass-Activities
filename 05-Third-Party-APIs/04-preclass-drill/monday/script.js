const numArr = [1, 2, 3, 45, 29, 83, 32, 09, 32, 6];

const maxNum = (arr) => {
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
        }
    }

    console.log(max);
    return max;
}

maxNum(numArr);