const express = require("express");
const router = express.Router();


// importiamo i post 
const posts = require("../data/posts");

const postsController = require("../controllers/postsController");

// INDEX → GET /posts
router.get("/", postsController.index);


// SHOW → GET /posts/:id
router.get("/:id", (req, res) => {
  res.send(`Visualizzazione del post ${req.params.id}`);
});

// CREATE → POST /posts
router.post("/", (req, res) => {
  res.send("Creazione di un nuovo post");
});

// UPDATE → PUT /posts/:id
router.put("/:id", (req, res) => {
  res.send(`Modifica del post ${req.params.id}`);
});

// DELETE → DELETE /posts/:id
router.delete("/:id", (req, res) => {
  res.send(`Cancellazione del post ${req.params.id}`);
});

module.exports = router;