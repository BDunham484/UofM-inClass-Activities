// returns an array of command line arguments
// console.log(process.argv);

// arguments passed from the command line are accessed by index
// console.log(process.argv[2]);

const input = process.argv.slice(2, process.argv.length);

const printInput = (input) => {
    input.map((text) => {
        console.log(text);
    })
}

printInput(input);

