// const mysql = require('mysql');

const mysql = require('mysql2/promise');


// const connection = mysql.createConnection({
//     host:'localhost',
//     database:'egiyebangladb',
//     user:'root',
//     password:'123456'
// })

const mySqlPool = mysql.createPool({
    host:'localhost',
    database:'egiyebangladb',
    user:'root',
    password:'123456'
});

module.exports = mySqlPool;