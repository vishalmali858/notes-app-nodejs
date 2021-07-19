//File System Intro
// const fs = require('fs');
// fs.writeFileSync('notes.txt', 'My name is Vishal');
// File System Chall
// fs.appendFileSync('notes.txt', '\nMy age is 100');

// Import your own Lib Intro
// const utilsReturnName = require("./utils.js");

// // const name = "Vishal";
// let functionR = utilsReturnName(5, -2);
// console.log(utilsReturnName, functionR, utilsReturnName(3, -2));

// Import your own Lib Chall
const notesJs = require("./notes.js");
// console.log(notesJs(), 'notesJs');

// // Import npm library
// const npmLibrary = require("validator");
// console.log("npmLibrary isEmail", npmLibrary.isEmail("vishalmali@gmail.com"), npmLibrary.isEmail("vishalmali@858"));
// console.log("npmLibrary isURL", npmLibrary.isURL("qa1.perfectionnext.com"), npmLibrary.isURL("perfectionnext"));

const colorChalk = require("chalk");
// console.log(colorChalk.green("Success !"), colorChalk.inverse.bold.green(("Success greenereeoesdsd")));

const yargsInput = require("yargs");

yargsInput.command({
	command: "add",
	describe: "Adding a Note",
	builder: {
		title: {
			describe: "Note Title",
			demandOption: true,
			type: "string"
		},
		body: {
			describe: "Note Body",
			demandOption: true,
			type: "string"
		},
		content: {
			describe: "Note Content",
			type: "number"
		}
	},
	handler(argv) {
		notesJs.addNotes(argv.title, argv.body);
		console.log("Adding a Note console!", argv.title, argv.body);
	}
})

yargsInput.command({
	command: "remove",
	describe: "Removing a Note",
	builder: {
		title: {
			describe: "Note Title",
			demandOption: true,
			type: "string"
		}
	},
	handler(argv) {
		notesJs.removeNotes(argv.title);
		console.log("Removing a Note console!");
	}
})

yargsInput.command({
	command: "list",
	describe: "Lsting All Notes",
	handler() {
		notesJs.listAllNotes();
		console.log("Listing Notes console!");
	}
})

yargsInput.command({
	command: "read",
	describe: "Reading a Note",
	builder: {
		title: {
			describe: "Note Title",
			demandOption: true,
			type: "string"
		}
	},
	handler(argv) {
		notesJs.readNotes(argv.title);
		console.log("Reading a Note console!");
	}
})

console.log(process.argv, yargsInput.argv, 'process');

// let userInput = process.argv[2];
// switch(userInput) {
// 	case "add":
// 		console.log(colorChalk.green("Add"));
// 	break;
// 	case "remove":
// 		console.log(colorChalk.green("Remove"));
// 	break;
// }