const chalk = require('chalk')
const fs = require('fs');

const addNote = (title, body) => {
	const notes = loadNotes()
	const duplicateNote = notes.find( (note) => note.title === title)

	if (!duplicateNote) {
		notes.push({
			title: title,
			body: body
		})

		saveNotes(notes)
		console.log(chalk.bgGreen('New note added!'))
	} else {
		console.log(chalk.bgRed('Note title takken!'))
	}
}

const removeNote = (title) => {
	const notes = loadNotes()

	const notesToKeep = notes.filter((note) => note.title !== title)
	if (notes.length > notesToKeep.length) {
		console.log(chalk.bgGreen('Note Removed!'))
		saveNotes(notesToKeep)

	} else {
		console.log(chalk.bgRed('No note found!'))
	}
}

const listNote = () => {
	const notes = loadNotes();
	console.log(chalk.inverse('== Your notes! =='))

	notes.forEach(element => {
		console.log(element.title)
	});

}

const readNote = (title) => {

	const notes = loadNotes();

	const searchNote = notes.find( (note) => note.title === title)
	if (searchNote) {
		console.log(chalk.inverse(searchNote.title));
		console.log(searchNote.body);
	} else {
		console.log(chalk.bgRed('No Note found!'))
	}

}

const saveNotes = (notes) => {
	const dataJSON = JSON.stringify(notes);
	fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
	try {
		const dataBuffer = fs.readFileSync('notes.json')
		const dataJSON = dataBuffer.toString()
		return JSON.parse(dataJSON);
	} catch (e) {
		return []
	}
}

module.exports = {
	addNote: addNote,
	removeNote: removeNote,
	listNote: listNote,
	readNote: readNote
}