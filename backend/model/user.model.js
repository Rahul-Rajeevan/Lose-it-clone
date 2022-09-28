const mongoose=require("mongoose")

const userSchema=mongoose.Schema({
    password:String,
    email:String,
    age:String,
    weight:String
})

const userModel=mongoose.model("userCollections",userSchema)

module.exports=userModel