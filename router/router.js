const router = require('express').Router();
const booksCtrl = require('../controllers/controllers');

router.get('/', booksCtrl.getBooks);

router.post('/', booksCtrl.createBook);

router.put('/:id', booksCtrl.updateBook);

router.delete('/:id', booksCtrl.deleteBook);

module.exports = router