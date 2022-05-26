const PORT = process.env.PORT || 3001;
const fs = require('fs');
const path = require('path');

const express = require('express');
const app = express();

//Middleware for JSON and urlencoded form data
app.use(express.urlencoded({ extended: ture }));
app.use(express.json());

app.use(express.static('public'));

//Creating routes to api/html files
require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);

//app listening/ starts localhost server
app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT}`);
});