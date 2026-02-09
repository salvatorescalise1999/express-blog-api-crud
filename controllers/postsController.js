const posts = require("../data/posts");

// INDEX → GET /posts
function index(req, res) {
    res.json(posts);
}

// SHOW → GET /posts/:id
function show(req, res) {
    // Prendo l'id dai parametri della richiesta e lo converto in numero
    const id = parseInt(req.params.id);

    // Cerco il post con l'id corrispondente nell'array posts
    const post = posts.find(p => p.id === id);

    // Se il post non esiste, rispondo con status 404 e un messaggio JSON
    if (!post) {

        // forziamo lo stato di risposta a 404
        res.status(404);

        // rispondiamo con oggetto di errore
        return res.json({
            error: "Not Found",
            message: "Post non trovato"
        })
    }

    // Se il post esiste, restituisco il post in formato JSON
    res.json(post);
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
