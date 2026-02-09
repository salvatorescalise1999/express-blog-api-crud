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
    // Prendo l'id dai parametri della richiesta e lo converto in numero
    const id = parseInt(req.params.id);

    // Trovo l'indice del post con quell'id
    const index = posts.findIndex(post => post.id === id);

    // Se il post non esiste, rispondo con 404
    if (index === -1) {
        res.status(404);

        return res.json({
            status: 404,
            error: "Not Found",
            message: "Post non trovato"
        });
    }

    // Rimuovo il post dall'array
    posts.splice(index, 1);

    // forziamo status secondo convenzioni REST che chiude anche function
    res.sendStatus(204)
}


// Esportiamo tutte le funzioni

module.exports = {
    index,
    show,
    store,
    update,
    destroy,
};
