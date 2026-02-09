const posts = require("../data/posts");

function index(req, res) {
    res.send("Lista dei post");
}

function show(req, res) {
  res.send(`Visualizzazione del post ${req.params.id}`);
}


module.exports = {
    index, 
    show,
    
};
