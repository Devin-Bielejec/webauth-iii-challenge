const express = require("express");
const dotenv = require("dotenv").config();

const PORT = process.env.PORT || 5000;

const authRoute = require("./Auth/auth-router");

const server = express();
server.use(express.json());
server.use("/api", authRoute);


server.listen(5000, () => console.log(`Listening on Port: ${5000}`))