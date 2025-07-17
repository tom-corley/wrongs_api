const {Pool} = require("pg");

//connect to the database - requires a DB_URL in the .env file
const db = new Pool ({
    connectionString: process.env.DB_URL
})

//export the connection pool so other files can access it
module.exports = db;