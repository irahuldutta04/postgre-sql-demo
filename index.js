require("dotenv").config();
const express = require('express');
var cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const fs = require('fs');

const port = process.env.PORT || 10000;

app.get("/",(req, res) => {
    res.status(200).send("APP Running");
});

const {Client} = require("pg");

const client = new Client({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "1020",
    database: "testDb"
});

client.connect();

client.query(`SELECT * FROM employee`, (err, result) => {
    if (!err) {
        console.log(result.rows);
    } else {
        console.log(err.message);
    }
    client.end();
});

app.listen(port, () => {
    console.log(`Your app listening at port ${port}`);
});
