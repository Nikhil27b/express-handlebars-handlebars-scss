const express = require("express");
const path = require("path");
const hbs = require("hbs");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;

const staticPath = path.join(__dirname, "public");
const viewsPath = path.join(__dirname, "pages");
const partialsPath = path.join(__dirname, "pages/partials");

app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

app.use(express.static(staticPath));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
