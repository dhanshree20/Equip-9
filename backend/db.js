const mysql = require('mysql2');

const connection  = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '@Dhanshree20',
    database: 'user_management'
})




connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL database:', err.message);
        return;
    }
    console.log('Connected to MySQL database');
});

module.exports = connection; // Export the connection