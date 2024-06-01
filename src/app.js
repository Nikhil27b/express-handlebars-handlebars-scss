const express = require("express");
const path = require("path");
const hbs = require("hbs");

const app = express();
const port = 3000;

const staticPath = path.join(__dirname, "./public");
const viewsPath = path.join(__dirname, "./pages");
const partialsPath = path.join(__dirname, "./pages/partials");

app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

app.use(express.static(staticPath));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const homepage = {
  name: 'Nikhil',
};

app.get('/', (req, res) => {
  res.render('index', { home: homepage });
});

app.listen(port, () => {
  console.log("Server started on port " + port);
});
