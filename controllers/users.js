const User = require("../models/user");
const bcrypt = require("bcrypt");
const { Profanity, ProfanityOptions } = require("@2toad/profanity");

const options = new ProfanityOptions();
options.wholeWord = false;
const profanity = new Profanity(options);

const UsersController = {
  Create: (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    if (username === "") {
      res.statusMessage = "You must enter a username";
    } else if (username.includes(" ")) {
      res.statusMessage = "Username cannot contain any spaces";
      res.status(409).send();
    } else if (username.length < 3 || username.length > 15) {
      res.statusMessage = "Username must be 3-15 characters long";
      res.status(409).send();
    } else if (profanity.exists(username)) {
      res.statusMessage = "No profanity!";
      res.status(409).send();
    } else if (password === "") {
      res.statusMessage = "You must enter a password";
      res.status(409).send();
    } else if (password.length < 8) {
      res.statusMessage = "Password must be at least 8 characters long";
      res.status(409).send();
    } else {
      bcrypt.hash(password, 10, (err, hash) => {
        const user = new User({
          username: username,
          password: hash,
        });
        user.save((err) => {
          if (err) {
            if (err.code === 11000) {
              res.statusMessage = "Username already taken";
              res.status(409).send();
            } else {
              res.statusMessage = "Oops, something went wrong!";
              res.status(400).send();
            }
          } else {
            res.status(200).send();
          }
        });
      });
    }
  },
};

module.exports = UsersController;
