const express = require("express");
const fs = require("fs");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.post("/login", (req, res) => {
  const { username, password } = req.body;
  const users = JSON.parse(fs.readFileSync("./data/users.json"));

  if (users[username] && users[username].password === password) {
    res.redirect("/hidden/terminal.html");
  } else {
    res.send("Accès refusé");
  }
});

app.listen(PORT, () => console.log("Serveur lancé sur le port " + PORT));