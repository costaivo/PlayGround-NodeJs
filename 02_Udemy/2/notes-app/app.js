const chalk= require('chalk')
const getNotes = require('./notes')

const note = getNotes()


console.log(note)
console.log(chalk.red.inverse.bold('Success!!'))
