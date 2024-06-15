const express = require("express");
const router = express.Router();
const Snippet = require("../models/snippets.js");

// Get all snippets
router.get("/", async (req, res) => {
  try {
    const snippets = await Snippet.find();
    res.render("snippet", { snippets: snippets });
  } catch (err) {
    res.status(500).send(err);
  }
});

// Create a new snippet
router.post("/add", async (req, res) => {
  const newSnippet = new Snippet({
    content: req.body.content,
  });
  try {
    await newSnippet.save();
    res.send(`<p>${newSnippet.content}</p>`);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
