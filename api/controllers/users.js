const User = require("../models/user");

const UsersController = {
  Create: (req, res, next) => {
    const user = new User(req.body);
    user.save((err) => {
      if (err) {
        res.status(401).json({ message: "Bad request" });
      } else {
        // console.log(user);
        res.status(201).json({ message: "OK" });
      }
    });
  },
  List: (req, res, next) => {
    User.find({}, (err, users) => {
      if (err) {
        res.status(500).json({ message: "Internal server error" });
      } else {
        res.status(200).json({ users: users });
      }
    });
  }
}

module.exports = UsersController;