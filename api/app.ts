declare module "express-session" {
  interface Session {
    email: string;
  }
}
import { Response } from "express";
require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");
const { v4: uuidv4 } = require("uuid");

const sessions = require("express-session");

const router = require("./router.route");

const xss = require("xss-clean");
const path = require("path");
const cors = require("cors");

const app = express();

const oneDay = 1000 * 60 * 60 * 24;

app.use(
  sessions({
    genid: function (req) {
      return "" + uuidv4() + "-" + new Date().getTime();
    },
    secret: process.env.SESSION_SECRET,
    saveUninitialized: true,
    cookie: { maxAge: oneDay },
    resave: false,
  })
);

app.use(cors);
app.use(express.json({ limit: "10kb" }));
app.use(cookieParser());
app.use(xss());

app.use("/api/users", router);

var options = {
  setHeaders: function (res, path, state) {
    res.set("X-Frame-Options", "SAMEORIGIN");
  },
};

app.use(express.static(path.join(__dirname, "Client"), options));

app.get("*", (req, res: Response) => {
  res.setHeader("X-Frame-Options", "SAMEORIGIN");
  res.sendFile(path.join(__dirname + "/Client/index.html"));
});

app.listen(process.env.APP_PORT, () => {
  console.log("Running at port " + process.env.APP_PORT);
});
