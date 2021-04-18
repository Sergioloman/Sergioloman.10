//get everything installed using the following terminal commands: npm init// npm install inquirer// npm install jest --save-dev//then test using npm test//

const fs = require('fs')
const path = require('path')
const pageGenerator = require('./src/pageGenerator')
const inquirer = require('inquirer')

const questions = [
    {
        type:'list',
        name:'roles',
        message: 'what is your current role at the agency?',
        choices: [
            'Engineer',
            'Manager',
            'Intern',
            'Employee'
        ]
    }
    //ask for team manager

    //ask for manager's employee ID

    //ask for manager's mail address

    //ask for manager's office number

    //then present menu to add engineer. intern to finish building the team

            //if selecting engineer 

            //add engineer name

            //add 
];


// Creating a README using the name of the file and the data as placeholders parameters
function writeToFile(fileName, data) {
    //this function allows user to write a README in their own directory
    return fs.writeFileSync(path.join(process.cwd(),fileName),data)
  
}
  

function startup(){
    inquirer.
    prompt(questions)
    .then(responses =>{
        writeToFile('index.html',pageGenerator(responses))    
    })
}
startup()