const express = require('express');
const router = express.Router();
const db = require('../models');

router.get('/', async (req, res) => {
  try {
    const books = await db.books.findAll();
    res.json(books);
  } catch (err) {
    res.status(500).send({ error: 'An error occurred while retrieving books.' });
  }
});

router.post('/', async (req, res) => {
  try {
    const book = await db.books.create(req.body);
    res.json(book);
  } catch (err) {
    res.status(500).send({ error: 'An error occurred while creating a book.' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const book = await db.books.findByPk(req.params.id);
    if (book) {
      res.json(book);
    } else {
      res.status(404).send({ error: 'Book not found.' });
    }
  } catch (err) {
    res.status(500).send({ error: 'An error occurred while retrieving the book.' });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const updatedRows = await db.books.update(req.body, { where: { id: req.params.id } });
    if (updatedRows[0] !== 0) {
      res.json({ success: 'Book updated.' });
    } else {
      res.status(404).send({ error: 'Book not found.' });
    }
  } catch (err) {
    res.status(500).send({ error: 'An error occurred while updating the book.' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const deletedRows = await db.books.destroy({ where: { id: req.params.id } });
    if (deletedRows !== 0) {
      res.json({ success: 'Book deleted.' });
    } else {
      res.status(404).send({ error: 'Book not found.' });
    }
  } catch (err) {
    res.status(500).send({ error: 'An error occurred while deleting the book.' });
  }

  
});

module.exports = router;
