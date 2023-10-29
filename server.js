const express = require("express");
// const bodyParser = require("body-parser"); /* deprecated */
const cors = require("cors");

const app = express();
const app2 = express();


var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));
app2.use(cors(corsOptions));


// parse requests of content-type - application/json
app.use(express.json()); /* bodyParser.json() is deprecated */
app2.use(express.json()); /* bodyParser.json() is deprecated */

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true })); /* bodyParser.urlencoded() is deprecated */
app2.use(express.urlencoded({ extended: true })); /* bodyParser.urlencoded() is deprecated */

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});
app2.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application 2." });
});

require("./app/routes/tutorial.routes.js")(app);
require("./app/routes/producto.routes.js")(app2);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

const PORT2 = process.env.PORT2 || 8081;
app2.listen(PORT2, () => {
  console.log(`Server is running on port ${PORT2}.`);
});