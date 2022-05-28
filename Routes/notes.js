const notes = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const { readFromFile, readAndAppend, writeToFile, } = require('../public/assets/js/fsUtils');

//GET Route
notes.get('/', (req, res) => {
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});
//POST ROUTE
notes.post('/', (req, res) => {
    console.log(req.body);
    const { title, text } = req.body;
    if (req.body) {
        const newNote = {
            title,
            text,
            id: uuidv4(),
        };
        readAndAppend(newNote, './db/db.json');
        res.json(`New Note added`);

    } else {
        res.error(`error in adding new note`);
    }
});

// DELETE Route for the unique id
notes.delete('/:id', (req, res) => {
    const noteId = req.params.id;
    readFromFile('./db/db.json')
        .then((data) => JSON.parse(data))
        .then((json) => {
            const results = json.filter((note) => note.id !== noteId);
            writeToFile('./db/db.json', results);
            // Respond to the DELETE request
            res.json(`Note ${noteId} has been deleted`);
        });
});

module.exports = notes;