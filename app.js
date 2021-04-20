//get everything installed using the following terminal commands: npm init// npm install inquirer// npm install jest --save-dev//then test using npm test//

const fs = require('fs')
const path = require('path')
const inquirer = require('inquirer');
const render = require('./src/pageGenerator');

const Employee = require("./lib/Employees");
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

const output_dir = path.resolve(__dirname, 'output')
const output_file = path.join(output_dir, 'team.html')

const team = [];

function menu() {
    inquirer.prompt(
        [
            {
                type: 'confirm',
                name: 'confirmTeam',
                message: 'Would you like to a member to your team?',
                // alternatively we can make a list and use switch conditionals basedn on values.
            },
            {
                type: 'list',
                name: 'addTeam',
                message: 'Select any of the roles below',
                choices: ['Team Manager', 'Engineer', 'Intern', 'Done'],
                when: ({ confirmTeam }) => {
                    if (confirmTeam) {
                        return true
                    } else {
                        return false;
                    }
                }
            }
        ]
    )
        .then(menuAnswers => {
            switch (menuAnswers.addTeam) {
                case 'Engineer':
                    questionsEngineer();
                    break;
                case "Intern":
                    questionsIntern();
                    break;
                case "Team Manager":
                    questionsMgmt();
                    break;
                default:
                    createTeam()

            }
       
        })
}

function questionsMgmt() {
    inquirer.prompt([
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
            name: 'managerOffice',
            message: 'What is your TM office number?'
        }
    ])
        .then((responses) => {
            //create new instance of manager
            const manager = new Manager(responses.managerName, responses.managerId, responses.managerEmail, responses.managerOffice);
            console.log(manager);

            //push manager to team array
            team.push(manager)
            //call menu again
            menu()

        })
}

function questionsEngineer() {
    inquirer.prompt(
        [

            {
                type: 'input',
                name: 'engineerName',
                message: "What is the your Engineer's name?",
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log("You must enter your Engineer's name!");
                        return false;
                    }
                }
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
    ).then((responses) => {
        //create a new instance of engineer
        const engineer = new Engineer(responses.engineerName, engineerId, engineerEmal, engineerGithub)
        console.log(engineer)

        //push engineer to team array
        team.push(engineer)
        //call menu again
        menu()
    })
}

function questionsIntern() {
    inquirer.prompt(
        [
            {
                type: 'input',
                name: 'internName',
                message: "What is the name of your Intern?",
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log("You must enter your Intern's name!");
                        return false;
                    }
                }
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
                name: 'internSchool',
                message: "What is the name of their School?",
            },
        ]
    ).then((responses) => {
        //create a new instance of intern
        const intern = new Intern(responses.internName, internId, internEmal, internSchool)
        console.log(intern)

        //push intern to team array
        team.push(intern)
        //call menu again
        menu()
    })
}

function createTeam() {
    if (!fs.existsSync(output_dir)) {
        fs.mkdirSync(output_dir)
    }
    //write filesyhnch since we dont need a callback. all we ened is to specify the file name, data,
    fs.writeFileSync(output_file, render(team), 'utf-8')
}


menu()
