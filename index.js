const api = require("./api");
api.listen(5050, () => {
    console.log(`Wrongs API is running on port ${5050}`);
})