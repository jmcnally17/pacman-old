const User = require("../models/user");
const bcrypt = require("bcrypt");

const UsersController = {
  Create: (req, res) => {
    bcrypt.hash(req.body.password, 10, (err, hash) => {
      const user = new User({
        username: req.body.username,
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
  },
};

module.exports = UsersController;
