const express = require("express");
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 5000;
const session = require("express-session");
const authRoute = require("./Auth/auth-router");
const cors = require("cors");

const server = express();
server.use(express.json());
server.use(cors());
const sessionConfig = {
    name: "pumpkin",
    secret: "some secret",
    cookie: {
        maxAge: 1000 * 1000,
        secure: false, //using false because it's a local host
        // httpOnly: true,
    },
    resave: false,
    saveUninitialized: true
}

server.use(session(sessionConfig))
server.use("/api", authRoute);



server.listen(5000, () => console.log(`Listening on Port: ${5000}`))