fs = require('fs');
chalk = require('chalk');

const getNotes = () => {
	return "The Challenge Note:..."
}

const addNotes = (title, body) => {
	debugger
	let loadNotesFetched = loadNotes();
	loadNotesFetched = checkForDuplicateValues(loadNotesFetched, ["title"], { title , body });
	saveNotes(loadNotesFetched);
	console.log(loadNotesFetched, 'fetched data');
}

checkForDuplicateValues = (dataArray, duplicateArray, currentData) => {
	let dataFetched = dataArray.filter((data) => { data.title === currentData.title });
	if(dataFetched.length === 0) {
		dataArray.push({
			title: currentData.title,
			body: currentData.body
		});
		console.log(chalk.green.inverse("Note Added"));
	} else {
		console.log(chalk.red.inverse("Duplicate Title"));
	}
	return dataArray
}

const removeNotes = (title) => {
	let loadNotesFetched = loadNotes();
	let loadNotesFiltered = loadNotesFetched.filter((data) => { return data.title !== title });
	if(loadNotesFetched.length === loadNotesFiltered.length) {
		console.log(chalk.red.inverse("No Note was removed"));
	} else {
		console.log(chalk.green.inverse("Note Removed"));
	}
	saveNotes(loadNotesFiltered);	
	console.log(loadNotesFiltered, 'fetched data');
}

const listAllNotes = () => {
	let loadNotesFetched = loadNotes();
	console.log(chalk.green.inverse("Notes"));
	loadNotesFetched.forEach((data)=> {
		console.log(chalk.red(data.title + ":" + data.body));
	});
}

const readNotes = (title) => {
	let loadNotesFetched = loadNotes();
	console.log(chalk.green.inverse("Notes"));
	let matchFound = loadNotesFetched.find((data) => data.title === title);
	if(matchFound) {
		console.log(chalk.green(matchFound.title + " : " + matchFound.body));
	} else {
		console.log(chalk.red("Note Not Found"));
	}
}

const loadNotes = () => {
	try {
		const dataBuffer = fs.readFileSync("notes.json");
		const dataString = dataBuffer.toString();
		const dataParsed = JSON.parse(dataString);
		return dataParsed;
	} catch(error) {
		console.error(error);
		return [];
	}
}

const saveNotes = (notesArray) => {
	let parsedJson = JSON.stringify(notesArray);
	fs.writeFileSync("notes.json", parsedJson);
}

module.exports = { 
	getNotes: getNotes, 
	addNotes: addNotes,
	removeNotes: removeNotes,
	listAllNotes: listAllNotes,
	readNotes: readNotes
};