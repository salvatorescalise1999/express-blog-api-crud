const express = require('express');
const app = express();
const port = 3000;

// Importo router delle ricette
const postsRouter = require('./routers/posts');

// Attivo cartella public per uso file statici
app.use(express.static('public'));

// Rotta home
app.get('/', (req, res) => {
    res.send("<h1>Home blog</h1>")
})

// Istanza delle rotte per risorsa ricette
app.use("/posts", postsRouter)


app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})

