const mongoose=require("mongoose")

const exerciseSchema=mongoose.Schema({
    name:String,
    url:String,
    cal:Number
})

const exerciseModel=mongoose.model("exerciseCollections",exerciseSchema)

module.exports=exerciseModel