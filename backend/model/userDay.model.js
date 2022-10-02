const mongoose=require("mongoose")

const userDaySchema=mongoose.Schema({
    email:String,
    date:Number,
    morning:[Object],
    afternoon:[Object],
    dinner:[Object],
    snack:[Object],
    exercise:[Object],
    cal:Number
})

const userDayModel=mongoose.model("userDayCollections",userDaySchema)

module.exports=userDayModel