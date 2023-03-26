const User = require("../models/user");
const bcrypt = require("bcrypt");

const SessionsController = {
  Index: (req, res) => {
    res.send({ user: req.session.user });
  },
  Create: (req, res) => {
    User.findOne({ username: req.body.username }).then((user) => {
      if (!user) {
        res.statusMessage = "Invalid credentials";
        res.status(409).send();
      } else {
        bcrypt.compare(req.body.password, user.password, (err, result) => {
          if (result) {
            req.session.user = user;
            res.status(200).send();
          } else {
            res.statusMessage = "Invalid credentials";
            res.status(409).send();
          }
        });
      }
    });
  },
  Destroy: (req, res) => {
    req.session.destroy();
  },
};

module.exports = SessionsController;
