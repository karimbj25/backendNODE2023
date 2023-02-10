"use strict";

var express = require('express');
var mongoose = require("mongoose");
var dotenv = require('dotenv');
dotenv.config();
var app = express();
var categorieRouter = require("./route/categorie.route");
var scategorieRouter = require("./route/scategorie.route");
var articleRouter = require("./route/article.route");

//BodyParser Middleware
app.use(express.json());
mongoose.set("strictQuery", false);
// Connexion à la base données
mongoose.connect(process.env.DATABASECLOUD1, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(function () {
  console.log("Connexion à la base de données réussie");
})["catch"](function (err) {
  console.log('Impossible de se connecter à la base de données', err);
  process.exit();
});
app.get("/", function (req, res) {
  res.send("bonjour");
});
app.get("/contact", function (req, res) {
  res.send("page de contact");
});
app.use('/api/categorie', categorieRouter);
app.use('/api/scategorie', scategorieRouter);
app.use('/api/article', articleRouter);
app.listen(process.env.PORT, function () {
  console.log("Server is listening on port ".concat(process.env.PORT));
});
