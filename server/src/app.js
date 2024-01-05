const express = require("express");

const app = express();

/*** middlewear***/
app.use(express.json());

module.exports = app;
