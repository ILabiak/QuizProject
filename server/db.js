'use strict';

require('dotenv').config({path: __dirname+'/configdata.env'})
const bcrypt = require('bcrypt');
const { Client } = require('pg');

(async () => {
    const client = new Client({
        host: process.env.HOST,
        port: process.env.PORT,
        user: process.env.DBUSER,
        password: process.env.PASSWORD,
        database: process.env.DATABASE,
      })
    await client.connect()
    const res = await client.query('SELECT * FROM quizschema.users')
    console.dir(res.rows[0]) // Hello world!

    await client.end()
})()



// const hash = bcrypt.hashSync("testpass", 10);

// console.log(hash)

// console.log(bcrypt.compareSync("testpasss", "$2b$10$pN54rjnyI8S7Sxsa78cyGO76z/0ngWWQT4pNPVF.DXqfjXDQRMhT."))



// to do 
// make connection to database, functions to add new user, and compare user password with the password hash