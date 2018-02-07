console.log('starting app...');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;
let command = process.argv[2];
// console.log('Command :' , command);
// console.log('Process',process.argv);
// console.log('Yargs',yargs.argv);

if (command === 'add'){
    var result = notes.addNote(argv.title,argv.body);
    console.log(result);
}else if(command === 'list'){
    var notesAll = notes.getAll();
    console.log("Printing :" ,notesAll.length);
    notesAll.forEach(element => {
        console.log(element);
    });
}else if(command === 'read'){
    var note =  notes.getNote(argv.title);
    if(note){
        console.log(note);
    }else{
        console.log('No note found');
    }
}else if(command === 'remove'){
    var noteRemoved = notes.removeNote(argv.title);
    var message = noteRemoved ? 'Note was removed' : 'No note was removed';
    console.log(message);
}else{
    console.log('Command not logged');
}
