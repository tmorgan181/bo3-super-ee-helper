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

app.get("/", (req, res) => {
  res.redirect("/gorod");
});

app.listen(PORT, () => {
  console.log(`Running at http://localhost:${PORT}`);
  console.log(`  /gorod     → Gorod Krovi`);
  console.log(`  /zetsubou  → Zetsubou no Shima`);
});
