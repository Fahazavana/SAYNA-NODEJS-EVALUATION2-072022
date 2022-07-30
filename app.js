require("dotenv").config();
const express = require("express");
const cors = require("cors");
const corsOptions = require("./config/corsOption");
const path = require("path");
const app = express();

// Router
const pageRouter = require("./routes/pages");
const avisRouter = require("./routes/avis");
app.set("views", path.join(__dirname, "./views"));
app.set("view engine", "ejs");

// Middleware
app.use(express.static(path.join(__dirname + "/public")));
app.use(express.json());
app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));

// register routes
app.use("/", pageRouter);
app.use("/avis", avisRouter);

module.exports = app;
