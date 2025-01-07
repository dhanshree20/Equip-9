const express = require('express');
const cors = require('cors');
const db = require('./db');

const app = express()
app.use(cors())



app.get('/', (re, res) =>{
    return res.json("from backend side");
})


app.get('/users', (req, res)=> {
    const sql = "SELECT * FROM USERS";
    db.query(sql, (err, data)=>{
        if(err) return res.json(err);
        return res.json(data);
    })
})

app.listen(3000, ()=>{
    console.log("listening");
})
