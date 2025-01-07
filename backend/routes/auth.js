const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const db = require('../db');

const router = express.Router();

router.post('/login', (req, res) => {
    const { mobile, password } = req.body;
    const query = 'SELECT * FROM users WHERE mobile = ?';
    db.query(query, [mobile], (err, results) => {
        if (err) return res.status(500).send(err);
        if (results.length === 0) return res.status(404).send('User not found');
        bcrypt.compare(password, results[0].password, (err, isMatch) => {
            if (err) return res.status(500).send(err);
            if (!isMatch) return res.status(401).send('Invalid credentials');
            const token = jwt.sign({ id: results[0].id }, 'secretKey', { expiresIn: '1h' });
            res.send({ token });
        });
    });
});

router.post('/logout', (req, res) => {
    res.send('Logout successful');
});

module.exports = router;