const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'contraleanpass',
    database: 'library'
})

module.exports = connection