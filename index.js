const express = require("express");
const server = express();
const dotenv = require("dotenv").config();

const PORT = process.env.PORT || 5000;

const authRoute = require("./Auth/auth-router");

server.use("/auth", authRoute);
server.use(express.json());