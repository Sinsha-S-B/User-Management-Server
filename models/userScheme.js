const mongoose=require("mongoose")


const userData=mongoose.Schema({
    username:{
        type:String,
        required : true
    },
    password:{
        type:String,
        required : true
    },
    image:{
        type:String
    },
})

const user = mongoose.model("User",userData).collection

module.exports=user;