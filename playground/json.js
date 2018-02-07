// let obj = {
//     name : 'Alankar'
// };

// var stringObj = JSON.stringify(obj);
// console.log(typeof stringObj );
// console.log(stringObj);

// let personString = '{"name":"Alankar","age":25}';
// let person = JSON.parse(personString);

// console.log(typeof person);
// console.log(person);

const fs = require('fs');

let originalNote =  {
    title : "Some title",
    body : "Some body"
}

originalNoteString = JSON.stringify(originalNote);

fs.writeFileSync('notes.json',originalNoteString);

var noteString = fs.readFileSync('notes.json');

var note = JSON.parse(noteString);

console.log(typeof note);
console.log(note.title);