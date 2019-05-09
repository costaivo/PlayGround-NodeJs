const fs = require('fs');
const chalk = require('chalk')

const getNotes = () => {
    return loadNotes()
}

const addNote = (title, body) => {
    const notes = loadNotes();
    const duplicateNotes = notes.filter((note) => note.title === title)

    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse(`Added new note : '${title}'`))
    } else {
        console.log(chalk.red.inverse(`Duplicate Note Found: '${title}' already exists`))
    }
}

const removeNote = (title) => {
    const notes = loadNotes();
    console.log(`Removing Note:${title}`)
    const filteredNotes = notes.filter((note) => note.title.toLowerCase() !== title.toLowerCase())

    if (notes.length > filteredNotes.length) {
        console.log(chalk.green.inverse('Note removed!'))
        saveNotes(filteredNotes)
    } else {
        console.log(chalk.red.inverse('No Note found!'))
    }

}
const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
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