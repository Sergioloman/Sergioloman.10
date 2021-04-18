//see if get office number works
const Manager = require('../lib/Manager');

test('test for officenumber() to return a number',()=>{
    const officeNumber = 22
    const manager = new Manager(officeNumber)
    expect(manager.getOfficeNumber()).toBe(manager.officeNumber)
})

test('test for getting role() to return a string with role',()=>{
    const role = 'Manager'
    const manager = new Manager(role)
    expect(manager.getRole()).toBe(role)
})