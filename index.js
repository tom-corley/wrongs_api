require("dotenv").config();
const api = require("./api");
const port = process.env.PORT
api.listen(PORT, () => {
    console.log(`Wrongs API is running on port ${port}`);
})