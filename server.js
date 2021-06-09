const express = require('express');
const bodyParser = require('body-parser');
const connection = require('./db');
const cors = require('cors');

const app = express();

// Middelware
app.use(bodyParser.json());
app.use(cors())

// Mysql
connection.connect(error => {
    if(error) throw error;
    console.log('Database Connected');
})

// Router
app.use('/api', require('./router/router'));

// Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log('Server running on PORT: ', PORT);
})