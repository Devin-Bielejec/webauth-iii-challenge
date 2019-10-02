const express = require("express");

const server = express();
const dotenv = require("dotenv").config();

console.log(`Your port is ${process.env.PORT}`);