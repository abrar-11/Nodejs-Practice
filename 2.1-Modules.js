console.log('-------- Modules in Nodejs --------')

const {add,sub,div,mul} = require('./2.2-Module Functions.js')

const custom_modules = require('./2.2-Module Functions.js')


console.log('Addition: ',add(5,6))
console.log('Subtraction: ',sub(5,6))
console.log('Division: ',div(5,6))
console.log('Multiplication: ',mul(5,6))

custom_modules.greeting('John Doe')


//-----------Alternative Export------------

const data = require('./2.3-Modules-Alternative-Export')

console.log(data.fruits)
console.log(data.student.name)
console.log(data.student.email)








