const express = require('express');
const path = require('path');
const app = express();
const apiIndex = require('./Routes/htmlRoutes.js');
const PORT = process.env.PORT || 3001;

//Middleware for JSON and urlencoded form data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/api', apiIndex);

app.use(express.static('public'));

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/notes.html'));
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
});


//app listening starts localhost server
app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT}`);
});