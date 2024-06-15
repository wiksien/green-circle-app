const mongoose = require("mongoose");

const snippetSchema = new mongoose.Schema({
  content: String,
});

const Snippet = mongoose.model("Snippet", snippetSchema);

module.exports = Snippet;
