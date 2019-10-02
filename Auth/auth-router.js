const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const users = require("../knexfile.js");
//router. etc

//register
router.post("/register", (req, res) => {
    console.log(req.body);
    const { username, password, department } = req.body;

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    console.log(username, department);
    users.insert({username: username, department: department, password: hash})
    .then(response => {
        res.status(200).json({message: "User inserted success!"})
    })
    .catch(error => {
        res.status(500).json({message: "Server Error!"})
    })
})


module.exports = router;