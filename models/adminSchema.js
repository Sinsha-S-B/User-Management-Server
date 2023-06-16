const mongoose=require("mongoose")


const adminData=mongoose.Schema({
    username:{
        type:String,
        required : true
    },
    password:{
        type:String,
        required : true
    },
   
})

const admin = mongoose.model("Admin",adminData).collection

module.exports=admin;