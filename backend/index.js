const express = require("express");
const { connectDB } = require("./config/db");
const userRouter = require("./routes/user.route");
const foodRouter = require("./routes/food.routes");
const exerciseRouter = require("./routes/exercise.routes");
const userDayRouter = require("./routes/userDay.routes");
const app = express();
module.require("dotenv").config();
var cors = require("cors");

app.use(express.json());
// app.use(cors());
app.use(cors({ origin: "*" }));
// app.use(cors({ origin: true, credentials: true }));

const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send("Welcome to HomePage");
});
app.use("/user", userRouter);
app.use("/food", foodRouter);
app.use("/exercise", exerciseRouter);
app.use("/day", userDayRouter);

app.listen(PORT, async () => {
  try {
    await connectDB();
    // console.log("Connection db succesfull");
  } catch (err) {
    console.log("Connection to db Failed");
    console.log(err);
  }
  console.log(`App listen on Port Number ${PORT}`);
});
