const {Router}=require("express");
const foodModel = require("../model/food.model")
// var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
require("dotenv").config();

const foodRouter=Router();


foodRouter.post("/",async(req,res)=>{
    await foodModel.insertMany(req.body)
     res.send("Data saved")
    })
 

    foodRouter.get("/",(req,res)=>{
    const g=req.query;
    const d=req.headers?.authorization?.split(" ")[1];
    jwt.verify(d, process.env.SECRET, async(err, decoded)=> {
        if(err)
        res.send({"message":"please login"})
        else
        {let t;
            if(g.name)
            {
            //    t =await foodModel.find({$text:{$search:g.name}}) 
            t= await foodModel.find({name:{$regex: new RegExp(g.name),$options:"i"}}).sort({name:1})
               res.send(t)
            }
            else
            {
                t =await foodModel.find()
                res.send(t)
            }}
      });
    })

module.exports=foodRouter





