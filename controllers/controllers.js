const connection = require('../db');

const booksCtrl = {
    getBooks: (req, res) => {
        
        const sql = 'SELECT * FROM books';

        connection.query(sql, (err, results) => {
            if(err) throw err;

            if(results.length > 0){
                res.json(results)
            } else {
                res.send('Not result')
            }
        })

    },
    createBook: (req, res) => {
        
        const sql = 'INSERT INTO books SET ?';

        const newBooks = {
            titulo: req.body.titulo,
            autor: req.body.autor,
            edicion: req.body.edicion,
        }

        connection.query(sql, newBooks, error => {
            if(error) throw error;

            res.send('Book Created')
        })

    },
    deleteBook: (req, res) => {
        
        const sql = 'DELETE FROM books WHERE id = ?';

        connection.query(sql, [req.params.id], error => {
            if (error) throw error;

            res.send('Book Deleted')
        })

    },
    updateBook: (req, res) => {
        
        const sql = 'UPDATE books SET ? WHERE id = ?';

        connection.query(sql, [req.body, req.params.id], error => {
            if(error) throw error;

            res.send('Book Updated')
        })

    },
}

module.exports = booksCtrl