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
            type: 'checkbox',
            message: 'What is your preferred method of communication?',
            name: 'preference',
            choices: ['text', 'phonecall', 'email']
        }
    ])
    .then((response) => {
        const {username, languages, preference} = response

        const data = `
${username}
${languages}
${preference}
        `
        fs.writeFile('log.txt', data, (err) =>
            err ? console.error(err) : console.log('Success!')
        )
    })