const db = require("./database/db.js");
const express = require("express");
const cors = require("cors");
const api = express();
// Add standard middleware
api.use(express.json());
api.use(cors());
// Api routes
api.get("/", (req, res) => res.send("The Wrongs API: track injustice."));
//async because we are bringing back a promise
api.get("/wrongs", async (req, res) => {
    const data = await db.query("SELECT * FROM wrong");
    res.send(data.rows);
});
//very important 
api.get("/people/:id", async (req, res) => {
    const id = parseInt(req.params.id);
    // Insert parameters securely
    const data = await db.query("SELECT * FROM person WHERE person_id = $1", [id]); //$1 is a placeholder for the first parameter
    res.send(data.rows[0]);
})
module.exports = api;