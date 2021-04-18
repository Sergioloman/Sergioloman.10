const Employee = require("../lib/Employees");

test('new instance of employee should return object', ()=>{
    const employee = new Employee()
    expect(typeof(employee)).toBe("object")
});

test('can set name via constructor arguments', ()=>{
    const name = 'Sergio'
    const employee = new Employee(name)
    expect(employee.name).toBe(name)
})

test('see if get name() function gets the name', ()=>{
    const name = 'Sergio'
    const employee = new Employee(name)
    expect(employee.getName()).toBe(name)
})

test('can set id via constructor arguments', ()=>{
    const id = 99
    const employee = new Employee('Sergio',id)
    expect(employee.id).toBe(id)
})

test('see if get get id() function gets the id', ()=>{
    const id = 99
    const employee = new Employee('Sergio', id)
    expect(employee.getId()).toBe(id)
})

test('can set email via constructor arguments', ()=>{
    const email = 'sergio@gmail.com'
    const employee = new Employee('Sergio',99,email)
    expect(employee.email).toBe(email)
})

test('see if get getEmail()) function gets the email', ()=>{
    const email = 'sergio@gmail.com'
    const employee = new Employee('Sergio', 99 ,email)
    expect(employee.getEmail()).toBe(email)
})

test('check if get role returns string containing role',()=>{
    const email = 'sergio@gmail.com'
    const role = 'Employee'
    const employee = new Employee('Sergio', 99, email, role)
    expect(employee.getRole()).toBe(role)
})