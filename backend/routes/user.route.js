const {Router}=require("express");
const userModel = require("../model/user.model")
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');


const userRouter=Router();

userRouter.post("/signup",async(req,res)=>{
    const {password,
        email,
        age,
        weight}=req.body
 
    bcrypt.hash(password, 8,async function(err, hash) {
        console.log(hash);
    if(!hash)
    {
     res.send({message:"Something went wrong"})
    }
    else{
     const Data=userModel({
         email,password:hash,age,weight
        })
        await Data.save()
        res.send({message:"Successfully Signed up"})
    }
 })
 })
 
 
 userRouter.post("/login",async(req,res)=>{
     const {email,password}=req.body
     
     let User=await userModel.findOne({email})
    if(User)
    {
     bcrypt.compare(password, User.password,function(err, data) {
         if(!data)
         {
             res.send({message:"Invalid Credentials"})
         }
         else{
             var token = jwt.sign({ email: email },process.env.SECRET);
             res.send({message:"Succesfully Login",token:token})
         }
     })
    }
    else{
     res.send({message:"Invalid Credentials"})
    }
    
  })
 

module.exports=userRouter





