const { Router } = require("express");
const userDayModel = require("../model/userDay.model");
// var bcrypt = require('bcryptjs');
var jwt = require("jsonwebtoken");
require("dotenv").config();

const userDayRouter = Router();

userDayRouter.post("/", async (req, res) => {
  // console.log(req.body);
  const d = req.headers?.authorization?.split(" ")[1];
  jwt.verify(d, process.env.SECRET, async (err, decoded) => {
    if (err) res.send({ message: "please login" });
    else {
      console.log(req.body);
      let p = await userDayModel.findOne({
        $and: [{ email: decoded.email }, { date: req.body.date }],
      });
      if (p)
        await userDayModel.updateOne(
          { $and: [{ email: decoded.email }, { date: req.body.date }] },
          { $set: { ...req.body } }
        );
      else {
        let y = userDayModel({ ...req.body, email: decoded.email });
        await y.save();
      }
      p = await userDayModel.find({
        $and: [{ email: decoded.email }, { date: req.body.date }],
      });
      return res.send(p);
    }
  });
});

userDayRouter.post("/details", (req, res) => {
  const g = req.query;
  const d = req.headers?.authorization?.split(" ")[1];
  jwt.verify(d, process.env.SECRET, async (err, decoded) => {
    if (err) res.send({ message: "please login" });
    else {
      let t;
      // console.log(req.body.date)
      t = await userDayModel.findOne({
        $and: [{ email: decoded.email }, { date: req.body.date }],
      });
      if (!t) {
        // console.log("No matching day")
        t = {
          email: decoded.email,
          date: req.body.date,
          morning: [],
          afternoon: [],
          dinner: [],
          snack: [],
          exercise: [],
          cal: 0,
        };
      } else t = JSON.stringify(t);
      return res.send(t);
    }
  });
});

module.exports = userDayRouter;
