const express = require("express");
const path = require("path");
const app = express();

// Router
const pageRouter = require("./routes/pages");
app.set("views", path.join(__dirname, "./views"));
app.set("view engine", "ejs");

// Middleware
app.use(express.static(path.join(__dirname + "/public")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// register routes
app.use("/", pageRouter);

module.exports = app;
