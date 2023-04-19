let intArr = [2,5,6,3,5];

const duplicateHunter = (arr) => {
    var dups = {}
    for (let i = 0; i < arr.length; i++) {
        if(dups[arr[i]]) {
            console.log(arr[i])
            return arr[i]
        } else {
            dups[arr[i]] = true;
            console.log(dups);
        }
    }
}

// consoidered faster than using array as dups.  would have to loop through each pass.  object just does a look up and saves time.  google object lookup 

duplicateHunter(intArr);