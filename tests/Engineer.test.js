//see if we can return getGithub and getRole works for each one

const Engineer = require("../lib/Engineer");

test('check if it getGithub() function gets github',()=>{
    const github = 'sergioloman'
    const email = 'sergio@gmail.com'
    const engineer = new Engineer('sergio', 99, email, github)
    expect(engineer.getGithub()).toBe(github)
})

test('chec to see if get role() returs string with role', ()=>{
    const role = 'Engineer'
    const engineer = new Engineer(role)
    expect(engineer.getRole()).toBe(role)
})