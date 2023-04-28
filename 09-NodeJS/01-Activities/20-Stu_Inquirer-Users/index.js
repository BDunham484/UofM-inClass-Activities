const fs = require('fs');
const inquirer = require('inquirer');


inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is your name',
            name: 'username'
        },
        {
            type: 'input',
            message: 'What languages do you know?',
            name: 'languages'
        },
        {
            type: 'input',
            message: 'What is your preferred method of communication?',
            name: 'preference'
        }
    ])
    .then((response) => {
        const data = `
${response.username}
${response.languages}
${response.preference}
        `
        fs.writeFile('log.txt', data, (err) =>
            err ? console.error(err) : console.log('Success!')
        )
    })