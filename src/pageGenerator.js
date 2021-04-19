const Engineer = require("../lib/Engineer");
const Employee = require("../lib/Employees");
const Intern = require('../lib/Intern');
const Manager = require('../lib/Manager');

const Index = require('../index')
// generate html()  input from iunquirer

//pass the data from inquirer into variables
// let inputx = inquirer data
// requiring  ./manager.js
//create new iunstances
const Roberto = new Employee('roberto',99,'roberto.gmail.c')

Roberto.getId()
// let manager1 = new Manager (inputx,title)
//c
/* `<h1>${manager1.title}<h1>
<
 


`*/

//render profiles for employee.engineer.intern.manager
function pageGenerator(data){
    return console.log(data.Roberto)
}

module.exports = pageGenerator;