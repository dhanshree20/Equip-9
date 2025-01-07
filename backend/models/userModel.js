const db = require('../db');

const User = {
    create: (user, callback) => {
        const query = 'INSERT INTO users SET ?';
        db.query(query, user, callback);
    },
    findByMobile: (mobile, callback) => {
        const query = 'SELECT * FROM users WHERE mobile = ?';
        db.query(query, [mobile], callback);
    },
};

module.exports = User;