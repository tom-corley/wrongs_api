const express = require("express");
const cors = require("cors");
const api = express();
// Add standard middleware
api.use(express.json());
api.use(cors());
// Api routes
api.get("/", (req, res) => res.send("The Wrongs API: track injustice."));
module.exports = api;