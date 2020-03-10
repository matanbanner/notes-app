fs = require('fs')
chalk = require('chalk')

const addNote = function(title, body) {
    const notes = loadNotes()
    const duplicateNote = notes.find( (note) => note.title === title)

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        
        saveNotes(notes)    
        console.log(chalk.green.inverse('New note added!'))
    } else {
        console.log(chalk.red.inverse("Note title taken!"))
    }
}

const removeNote = function (title) {
    const notes = loadNotes()
    const toSaveNotes = notes.filter( (note) => note.title !== title )

    if (notes.length === toSaveNotes.length) {
        console.log(chalk.red.inverse(`Note with title ${title} was not found`))
    } else {
        saveNotes(toSaveNotes)
        console.log(chalk.green.inverse('Note was removed!'))
    }
    
}

    const saveNotes = function (notes) {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const listNotes = () => {
    console.log(chalk.red('Your notes:'))
    loadNotes().forEach(note => {
        console.log(note.title)
    });
}

const readNote = (title) => {

    const foundNote = loadNotes().find( (note) => note.title === title)
    if (foundNote) {
        console.log(chalk.inverse(title))
        console.log(foundNote.body)
    } else {
        console.log(chalk.red('Note was not found!'))
    }
}

const loadNotes = function() {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    list: listNotes,
    readNote: readNote
}