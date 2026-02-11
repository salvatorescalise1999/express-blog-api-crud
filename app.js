const express = require('express');
const app = express();
const port = 3000;

// Importo router delle ricette
const postsRouter = require('./routers/posts');

// import del middelware di gestione di rotta inesistente
const notFound = require("./middlewares/notFound");

// Attivo cartella public per uso file statici
app.use(express.static('public'));

// registro il body-parser per "application/json"...
app.use(express.json());

// Rotta home
app.get('/', (req, res) => {
    res.send("<h1>Home blog</h1>")
})

// Istanza delle rotte per risorsa ricette
app.use("/posts", postsRouter)

// registriamo middelware di gestione rotta inesistente
app.use(notFound);

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})

