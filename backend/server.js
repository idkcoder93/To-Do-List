const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"Tasker"
})

app.get('/', (req, res) => {

    console.log('Received a POST request at /');
    const sql = "SELECT * FROM users WHERE username = ? AND user_password = ?";
    const values = [
        req.query.username,
        req.query.password
    ];

    db.query(sql, values, (err, data) => {
        if (err) {
            return res.json("Error");
        }

        if (data.length === 0) {
            return res.json("Invalid credentials or user not found");
        }

        // User found, return user data
        return res.json(data[0]); // Assuming only one user should match these credentials
    });
});

app.listen(3000, () => {
    console.log("listening");
})