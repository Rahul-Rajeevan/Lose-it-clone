const {Router}=require("express");
const exerciseModel = require("../model/exercise.model")
// var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
require("dotenv").config();

const exerciseRouter=Router();


exerciseRouter.post("/",async(req,res)=>{
    await exerciseModel.insertMany(req.body)
     res.send("Data saved")
    })
 

    exerciseRouter.get("/",(req,res)=>{
    const g=req.query;
    const d=req.headers?.authorization?.split(" ")[1];
    jwt.verify(d, process.env.SECRET, async(err, decoded)=> {
        if(err)
        res.send({"message":"please login"})
        else
        {let t;
            if(g.name)
            {
            //    t =await exerciseModel.find({$text:{$search:g.name}}) 
            t= await exerciseModel.find({name:{$regex: new RegExp(g.name),$options:"i"}}).sort({name:1})
               res.send(t)
            }
            else
            {
                t =await exerciseModel.find()
                res.send(t)
            }}
      });
    })

module.exports=exerciseRouter





