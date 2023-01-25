const { Router } = require("express");
const userModel = require("../model/user.model");
var bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");

const userRouter = Router();

userRouter.post("/signup", async (req, res) => {
  const { password, email, age, weight, name } = req.body;
  console.log(req.body);

  bcrypt.hash(password, 8, async function (err, hash) {
    console.log(hash);
    if (!hash) {
      res.send({ message: "Something went wrong" });
    } else {
      const Data = userModel({
        name,
        email,
        password: hash,
        age,
        weight,
      });
      await Data.save();
      res.send({ message: req.body });
    }
  });
});

userRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;

  let User = await userModel.findOne({ email });
  //   console.log(User.name);
  if (User) {
    bcrypt.compare(password, User.password, function (err, data) {
      if (!data) {
        res.send({ message: "Invalid Credentials" });
      } else {
        var token = jwt.sign({ email: email }, process.env.SECRET);
        res.send({
          message: "Succesfully Login",
          token: token,
          username: User?.name,
        });
      }
    });
  } else {
    res.send({ message: "Invalid Credentials" });
  }
});

module.exports = userRouter;
