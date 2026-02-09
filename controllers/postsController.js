const posts = require("../data/posts");

function index(req, res) {
    res.send("Lista dei post");
}

module.exports = {
    index
};
