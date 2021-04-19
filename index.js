//get everything installed using the following terminal commands: npm init// npm install inquirer// npm install jest --save-dev//then test using npm test//

const fs = require('fs')
const path = require('path')
const pageGenerator = require('./src/pageGenerator')
const inquirer = require('inquirer');
const Choices = require('inquirer/lib/objects/choices');

const questionsMGMT = [

    {
        type: 'input',
        name: 'managerName',
        message: 'Who is your Team Manager(TM)?',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("You must enter your TM's name!");
                return false;
            }
        }

    },
    {
        type: 'input',
        name: 'managerId',
        message: 'What is your TM ID?'
    },
    {
        type: 'input',
        name: 'managerEmail',
        message: 'What is your TM Email?'
    },
    {
        type: 'input',
        name: 'managerId',
        message: 'What is your TM office number?'
    },]
const menu = [
    {
        type: 'confirm',
        name: 'confirmTeam',
        message: 'would you like to add a teammate?',
    },
    {
        type: 'list',
        name: 'addTeam',
        message: 'Select any of the teamates below',
        choices: ['Engineer', 'Intern'],
        when: ({ confirmTeam }) => {
            if (confirmTeam) {
                return true;
            } else {
                return false;
            }
        }
    }]

const questionsEngineer = [

    {
        type: 'input',
        name: 'engineerName',
        message: "What is the your engineer's name?",
    },
    {
        type: 'input',
        name: 'engineerId',
        message: "What is their ID?",
    },
    {
        type: 'input',
        name: 'engineerEmal',
        message: "What is their Email?",
    },
    {
        type: 'input',
        name: 'engineerGithub',
        message: "What is their Github username?",
    },
]

const questionsIntern = [

    {
        type: 'input',
        name: 'internName',
        message: "What is the your engineer's name?",
    },
    {
        type: 'input',
        name: 'internId',
        message: "What is their ID?",
    },
    {
        type: 'input',
        name: 'internEmal',
        message: "What is their Email?",
    },
    {
        type: 'input',
        name: 'internGithub',
        message: "What is the name of their School?",
    },
]

    
    



// Creating a README using the name of the file and the data as placeholders parameters
function writeToFile(fileName, data) {
    //this function allows user to write a README in their own directory
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)

}


function startup() {
    inquirer.
        prompt(questions)
        .then(responses => {
            writeToFile('index.html', pageGenerator(responses))
        })
}
startup()