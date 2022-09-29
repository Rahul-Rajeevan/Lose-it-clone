const mongoose=require("mongoose")

const foodSchema=mongoose.Schema({
    name:String,
    url:String,
    cal:Number,
    unit:String
})

const foodModel=mongoose.model("foodCollections",foodSchema)

module.exports=foodModel