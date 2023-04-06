let numArr = [0,4,6,56,12,93,11,54,3];
// let numArr = [1.5, 3, 2.5, 1]

const averager = (arr) => {
    let total = 0;
    
    for(let i = 0; i < arr.length; i++) {
        total += arr[i]
    }

    let average = total/arr.length 
    
    return average
}

let result = averager(numArr);

console.log(result);