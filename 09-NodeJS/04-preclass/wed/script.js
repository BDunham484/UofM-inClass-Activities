const dayOfWeek = (num) => {
    
    let days = {
        1: 'sun',
        2: 'mon',
        3: 'tue',
        4: 'wed',
        5: 'thu',
        6: 'fri',
        7: 'sat'
    }

    if (num >=1 && num <=7) {
        return days[num]
    } else {
        return "choose a number between 1 & 7"
    }
}

let result = dayOfWeek(4);

console.log(result);