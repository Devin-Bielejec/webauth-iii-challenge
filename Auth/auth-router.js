const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const users = require("../knexfile.js");
const jwt = require("jsonwebtoken");
const secrets = require("../secrets/secrets");
const protected = require("./auth-middleware");



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

//login
router.post('/login', (req, res) => {
  let { username, password } = req.body;

  users.findByUserName({ username })
    .first()
    .then(user => {
        
        console.log("user", user);
      if (user && bcrypt.compareSync(password, user.password)) {
        console.log('before req', req.session);

        req.session.user = "Chicken";
        console.log("After session", req.session);
        
        const token = generateToken(user); // new line
        console.log("TOKEN", token);
        
        // the server needs to return the token to the client
        // this doesn't happen automatically like it happens with cookies
        res.status(200).json({
          message: `Welcome ${user.username}!, have a token...`,
          token, // attach the token as part of the response
        });
      } else {
        res.status(401).json({ message: 'Invalid Credentials' });
      }
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

router.get("/users", protected, (req, res) => {
    users.findAll()
    .then(response => {
        console.log(response);
        res.status(200).json(response);
    })
    .catch(error => {
        res.status(500).json({message: "SERVER ERROR! RUN FOR THE HILLS!"})
    })
})

function generateToken(user) {
    console.log(user.id, user.username, secrets.jwtSecret);
  const payload = {
    subject: user.id, // sub in payload is what the token is about
    username: user.username,
    // ...otherData
  };

  const options = {
    expiresIn: '1d', // show other available options in the library's documentation
  };

  // extract the secret away so it can be required and used where needed
  console.log(payload, secrets.jwtSecret, options);
  return jwt.sign(payload, secrets.jwtSecret, options); // this method is synchronous
}

module.exports = router;