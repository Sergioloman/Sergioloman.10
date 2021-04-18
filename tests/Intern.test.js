//see if role schools and works
const Intern = require('../lib/Intern');

test('test for getSchool() to return school',()=>{
    const school = 'Harvard'
    const intern = new Intern(school)
    expect(intern.getSchool()).toBe(intern.school)
})

test(' test getRole() to ensure it returns a string with its role',()=>{
    const role = 'Intern'
    const intern =  new Intern(role)
    expect(intern.getRole()).toBe(role)
})