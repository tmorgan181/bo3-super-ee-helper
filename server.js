const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;
const ROOT = __dirname;

app.use(express.static(ROOT));

app.get("/gorod", (req, res) => {
  res.sendFile(path.join(ROOT, "gorod.html"));
});

app.get("/zetsubou", (req, res) => {
  res.sendFile(path.join(ROOT, "zetsubou.html"));
});

app.get("/dere", (req, res) => {
  res.sendFile(path.join(ROOT, "dere.html"));
});

app.get("/soe", (req, res) => {
  res.sendFile(path.join(ROOT, "soe.html"));
});

app.get("/revelations", (req, res) => {
  res.sendFile(path.join(ROOT, "rev.html"));
});

app.get("/", (req, res) => {
  res.sendFile(path.join(ROOT, "index.html"));
});

app.listen(PORT, () => {
  console.log(`Running at http://localhost:${PORT}`);
  console.log(`  /gorod       → Gorod Krovi`);
  console.log(`  /zetsubou    → Zetsubou no Shima`);
  console.log(`  /dere        → Der Eisendrache`);
  console.log(`  /soe         → Shadows of Evil`);
  console.log(`  /revelations → Revelations`);
});
