//get everything installed using the following terminal commands: npm init// npm install inquirer// npm install jest --save-dev//then test using npm test//

const fs = require('fs')
const path = require('path')
const inquirer = require('inquirer');

const Engineer = require("./lib/Engineer");
const Employee = require("./lib/Employees");
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

class Project{
    constructor(){
        this.employee = new Employee()
        this.manager = new Manager();
        this.engineer = new Engineer();
        this.intern = new Intern();
    }

    menu(){
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
                    choices: ['Team Manager','Engineer', 'Intern',],
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
                if (menuAnswers.addTeam === 'Engineer') {
                    return this.questionsEngineer()
                } if (menuAnswers.addTeam === 'Intern') {
                    return this.questionsIntern()
                } if (menuAnswers.addTeam === 'Team Manager'){
                    return this.questionsMgmt()
                } 
                else {
                    return false
                }
            })
    }

    questionsMgmt(){
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
                name: 'managerId',
                message: 'What is your TM office number?'
            },
        ])
        .then(mgmtResponses =>{
            //push this value to manager answers in object
            console.log(mgmtResponses)
            
            return this.menu(this.addTeam)
            
        })
    }

    questionsEngineer(){
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
        ).then(engineerAnswers => {
            //push this value to our new construct
            console.log(engineerAnswers)
            return this.menu()
        })
    }

    questionsIntern(){
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
                    name: 'internGithub',
                    message: "What is the name of their School?",
                },
            ]
        ).then(internAnswers => {
            //push this value to our new construct
            console.log(internAnswers)
            return this.menu()
        })
    }
}

module.exports = Project