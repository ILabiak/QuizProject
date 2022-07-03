"use strict";

require("dotenv").config({ path: __dirname + "/configdata.env" });
const bcrypt = require("bcrypt");
const { Pool } = require("pg");

(async () => {
  const pool = new Pool({
    host: process.env.HOST,
    port: process.env.PORT,
    user: process.env.DBUSER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
  });
  await pool.connect();
  console.dir(await addUserToDB(pool, "testuser123", "testhash", "email@email.com"));

  await pool.end();
})();

const getUserPasswordHash = async (pool, username) => {
  const res = await pool.query(
    "SELECT passhash FROM quizschema.users WHERE username = $1",
    [username]
  );
  if (res.rows[0]) return res.rows[0].passhash;
  return;
};

const addUserToDB = async (pool, username, passhash, email) => {
  //need to generate password hash before calling this function
  try {
    const res = await pool.query(
      "INSERT INTO quizschema.users (username, passhash, email) VALUES ($1, $2, $3)",
      [username, passhash, email]
    );
    return 1;
  } catch (err) {
    //reset sequense next value if error
    const res = await pool.query(
      "SELECT setval(pg_get_serial_sequence('quizschema.users', 'id'), (SELECT MAX(id) FROM quizschema.users))"
    );
    return parseInt(err.code);
  }
};

// hash generating and comparing password with hash
// const hash = bcrypt.hashSync("testpass", 10);
// console.log(bcrypt.compareSync("testpasss", "$2b$10$pN54rjnyI8S7Sxsa78cyGO76z/0ngWWQT4pNPVF.DXqfjXDQRMhT."))
