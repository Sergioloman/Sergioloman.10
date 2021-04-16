const Employee = require('./Employees')
//getting properties from employees into engineer
class Engineer extends Employee {
    constructor(name, id, email, github){
        super(name, id, email);
        this.github = github;
    }
    getGithub(){
        return this.github
    }
    getRole(){
        return 'Engineer'
    }

}

module.exports = Engineer