console.log('Starting notes.js');
const fs = require('fs');

var fetchNotes = () =>{
    try {
        var noteString = fs.readFileSync('notes-data.json');
        return  JSON.parse(noteString);
    } catch (error) {
        return [];
    }
}

var saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json',JSON.stringify(notes));
}

const addNote = (title,body) =>{
    var notes = fetchNotes();
    var note = {title,body};


    var duplicate = notes.filter((note) => note.title === title);

    if (duplicate.length === 0){
        notes.push(note);
        saveNotes(notes);
        return note;
    } else{
        return 'Note Already exists with same title, please select another title';
    }

    
};

const getAll = () => {
    return fetchNotes();
}

const getNote = (title) =>{
    var notes = fetchNotes();
    var requiredNote = notes.filter((note) => note.title === title);
    return requiredNote[0];
}

const removeNote = (title) => {
    var notes = fetchNotes();
    var newNotes = notes.filter((note) => note.title !== title);
    saveNotes(newNotes);

    return notes.length !== newNotes.length;
}

module.exports ={
    addNote,
    getAll,
    getNote,
    removeNote
}