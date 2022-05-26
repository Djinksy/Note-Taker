const path = require('path');
//creating routes for /notes
//returning notes to notes.html
module.exports = (app) => {
        app.get('/notes', (req, res) => {
            res.sendFile(path.join(__dirname, '../public/notes.html'));
        });
    }
    //creating route for GET *
    //returning info to index.html

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});