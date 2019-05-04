const fs = require('fs');
const getNotes = function getNotes() {
    return loadNotes()
}

const addNote = function (title, body) {
    const notes = loadNotes();
    const duplicateNotes = notes.filter(function (note) {
        return note.title === title
    })
    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(`Added new note : '${title}'`)
    } else {
        console.log(`Duplicate Note Found: '${title}' already exists`)
    }
}

const removeNote = function (title) {
    const notes = loadNotes();
    console.log(`Removing Note:${title}`)
    const filteredNotes = notes.filter(function (note) {
        return note.title !== title
    })
    saveNotes(filteredNotes)
}
const saveNotes = function (notes) {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = function () {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJson = dataBuffer.toString()
        return JSON.parse(dataJson)
    } catch (e) {
        return [];
    }
}

module.exports = {
    getNotes,
    addNote,
    removeNote
}