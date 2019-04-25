const fs = require('fs');
const getNotes = function getNotes() {
    return 'Your notes...'
}

const addNote = function (title, body) {
    const notes = loadNotes();
    console.log(`Existing notes:${notes}`)
    notes.push({
        title: title,
        body: body
    })
    saveNotes(notes)
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
    addNote
}