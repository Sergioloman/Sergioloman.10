//dependencies
const fs = require('fs')
const path = require('path')
const inquirer = require('inquirer');
const render = require('./src/pageGenerator');
//accesing our constructs
const Employee = require("./lib/Employees");
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

// utilities for file creation
const output_dir = path.resolve(__dirname, 'output')
// this path is responsible for creating the html file on the correct destination.
const output_file = path.join(output_dir, 'team.html')
// answers array. We will store our data here so it can be redered later.
const team = [];

// Prompts
function menu() {
    inquirer.prompt(
        [
            {
                type: 'confirm',
                name: 'confirmTeam',
                message: 'Would you like to a member to your team?',
            },
            {
                type: 'list',
                name: 'addTeam',
                message: 'Select any of the roles below',
                choices: ['Team Manager', 'Engineer', 'Intern'],
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
    // Switch conditionals helps us go through each answer more efficiently
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
                name: 'engineerEmail',
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
        const engineer = new Engineer(responses.engineerName, responses.engineerId, responses.engineerEmail, responses.engineerGithub)

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
        const intern = new Intern(responses.internName, responses.internId, responses.internEmal, responses.internSchool)

        //push intern to team array
        team.push(intern)
        //call menu again
        menu()
    })
}

// here we are going to create the team file, we are passing output_dir to our path function above.
function createTeam() {
    if (!fs.existsSync(output_dir)) {
        fs.mkdirSync(output_dir)
    }
    //write filesyhnch since we dont need a callback. all we ened is to specify the file name, data,
    fs.writeFileSync(output_file, render(team), 'utf-8')
}

//getting the promtps running
menu()
