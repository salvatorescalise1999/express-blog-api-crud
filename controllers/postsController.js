const posts = require("../data/posts");

// INDEX → GET /posts
function index(req, res) {
    res.send("Lista dei post");
}

// SHOW → GET /posts/:id
function show(req, res) {
    res.send(`Visualizzazione del post ${req.params.id}`);
}

// CREATE → POST /posts
function store(req, res) {
    res.send("Creazione di un nuovo post");
}

// UPDATE → PUT /posts/:id
function update(req, res) {
    res.send(`Modifica del post ${req.params.id}`);
}

// DELETE → DELETE /posts/:id
function destroy(req, res) {
    res.send(`Cancellazione del post ${req.params.id}`);
}

// Esportiamo tutte le funzioni

module.exports = {
    index,
    show,
    store,
    update,
    destroy,
};
