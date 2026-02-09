const posts = require("../data/posts");

function index(req, res) {
    res.send("Lista dei post");
}

function show(req, res) {
    res.send(`Visualizzazione del post ${req.params.id}`);
}

function store(req, res) {
    res.send("Creazione di un nuovo post");
}

function update(req, res) {
    res.send(`Modifica del post ${req.params.id}`);
}



module.exports = {
    index,
    show,
    store,
    update,

};
