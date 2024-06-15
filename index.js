const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

require("dotenv").config();

const app = express();
const port = 3000;

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("public"));
app.set("view engine", "ejs");

// Import routes
const snippetRouter = require("./routes/snippet");

// Use routes
app.use("/snippet", snippetRouter);

// Root route
app.get("/", (req, res) => {
  res.render("index");
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
