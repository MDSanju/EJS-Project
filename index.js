const express = require('express')
const app = express()
const port = 5000

app.use(express.urlencoded({ extended: true }));

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