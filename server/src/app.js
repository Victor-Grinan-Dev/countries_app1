const path = require("path");
const express = require("express");
const cors = require("cors");
const countriesRouter = require("./routes/countries/countries.router");
const favCountriesRouter = require("./routes/favCountries/favCountries.router");
const filterCountriesRouter = require("./routes/countriesFilter/countriesfilter.router");

const app = express();

/*** middlewear***/
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
// app.use(express.static(path.join(__dirname + "/public")));

//routes
app.use(countriesRouter);
app.use(favCountriesRouter);
app.use(filterCountriesRouter);

// app.get("/", (req, res) => {
//   // res.sendFile(path.join(__dirname, "..", "public", "index.html"));
//   res.sendFile(path.join(__dirname, "..", "public", "index.html"));
// });

module.exports = app;
