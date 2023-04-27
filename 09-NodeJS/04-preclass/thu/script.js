const intArr = [4,5,4,4,7,5]

// const dupFilter = (arr) => {
//     let newArr = arr.sort();
//     console.log(newArr);
//     for (let i = 0; i < newArr.length; i++) {
//         if (newArr[i] === newArr[i+1]) {
//             // console.log(i + ': ' + newArr[i] + ' = ' + newArr[i+1])
//             newArr.splice(i,1)
//         }
//         // console.log(newArr)
//     }

//     return newArr
// }

// const result = dupFilter(intArr);

// console.log(result)

const removeDups = (intArr) => {
    return intArr.filter((value, index) => intArr.indexOf(value)===index)
}

removeDups(intArr);