const express = require('express')
const app = express()
const dotenv = require("dotenv");
dotenv.config();

const port = process.env.PORT;

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// EJS Setup
app.set("view engine", "ejs");

let prommingLanguages = [];

app.get("/", (req, res) => {
  res.render("index", { pLNames: prommingLanguages });
});

app.get("/contact", (req, res) => {
  res.render("contact", {});
});

app.post("/", (req, res) => {
  const programmingLanguage = req.body.programmingLanguage;
  prommingLanguages.push(programmingLanguage);
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})