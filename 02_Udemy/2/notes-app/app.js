const chalk= require('chalk')
const yargs = require('yargs')
const notes = require('./notes')

// Customize yargs version
yargs.version('1.0.0')

// Create add command
yargs.command({
    command:'add',
    describe:'Add a new note' ,
    builder:{
        title:{
            describe:'Note title',
            demandOption:true,
            type:'string'
        },
        body:{
            describe:'Note body',
            demandOption:true,
            type:'string'
        }
    },
    handler:function(argv){
       notes.addNote(argv.title,argv.body)
    }
})

// create remove command
yargs.command({
    command:'remove',
    describe:'Remove a  note' ,
    handler:function(){
        console.log('Removing a note!')
    }
})

// create list command
yargs.command({
    command:'list',
    describe:'List all notes' ,
    handler:function(){
        console.log('Listing all  notes!')
    }
})

// create list command
yargs.command({
    command:'read',
    describe:'Read a note' ,
    handler:function(){
        console.log('Reading a note')
    }
})

yargs.parse()