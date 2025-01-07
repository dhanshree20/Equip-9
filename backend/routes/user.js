const express = require('express');
const bcrypt = require('bcrypt');
const db = require('../db');

const router = express.Router();

router.post('/', async (req, res) => {
    const { firstName, lastName, mobile, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const query = 'INSERT INTO users (firstName, lastName, mobile, password, createdDate) VALUES (?, ?, ?, ?, ?)';
    db.query(query, [firstName, lastName, mobile, hashedPassword, new Date()], (err, result) => {
        if (err) return res.status(500).send(err);
        res.status(201).send('User registered');
    });
});

module.exports = router;