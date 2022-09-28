const express=require("express");
const { r } = require("./config/db");
const userRouter = require("./routes/user.route");
const app=express();
module.require("dotenv").config();
var cors = require('cors')

app.use(express.json())
app.use(cors())




const PORT=process.env.PORT||8080

app.get("/",(req,res)=>{
    res.send("Welcome to HomePage")
})
app.use("/user",userRouter)

app.listen(PORT,async()=>{
    await r;
    console.log("Listening");
})