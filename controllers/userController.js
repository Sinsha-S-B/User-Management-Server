const user = require('../models/userScheme');
const users=require('../models/userScheme')
const jwt=require('jsonwebtoken')
const mongoose=require('mongoose')
const {ObjectId}=mongoose.Types

const JWT_SECRET="sdfghjlkj345678()fgjhkjhyftr[];dfghjhdfhggddfghghfdf3456"


module.exports={
    signup:async(req,res)=>{
       let userData=req.body;
       const {username,password}=req.body
      
       users.insertOne(userData).then((data)=>{
       console.log(data);
       res.json({signup:true})
    })
    },

    userLogin:async(req,res)=>{
       
        console.log(req.body);
        const {username,password}=req.body
        let user=await users.findOne({username:username})
        console.log(user);
        if(!user){
            res.json({error:"not found"})
         }
         else{
            if(password!=user.password){
               res.json({pswdError:"Incorrect password"})
            }
            if(password==user.password){
            console.log("sdfghjk");
            const token=jwt.sign({},JWT_SECRET);
            res.json({status:'ok',login:true,data:token,user})
         }
         }
         
},

imageUpload:(req,res)=>{
   console.log(req.body);
   const {userId}=req.body
  
   const imgUrl=req.file.filename
   user.updateOne({_id:new ObjectId(userId)},{$set:{image:imgUrl}}).then((da)=>{
      console.log(da);
      res.json({status:true,imageUrl:imgUrl})
   })
}



}