const PORT = process.env.PORT || 3001;
const fs = require('fs');
const path = require('path');

const express = require('express');
const app = express();

//Middleware for JSON and urlencoded form data
app.use(express.urlencoded({ extended: ture }));
app.use(express.json());

app.use(express.static('public'));

//GET Route for public index
app.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/index.html'))
);
//GET Route for public notes
app.get('/notes', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/notes.html'))
);
// GET Route for * to return public index
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

app.delete('/api/notes/:id', (req, res) => {
    deleteNote(req.params.id, allNotes);
    res.json(true);
});

app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT}`);
});