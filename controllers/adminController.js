
const adminCollection = require('../models/adminSchema');
const jwt=require('jsonwebtoken')
const mongoose=require('mongoose')
const {ObjectId}=mongoose.Types
const users=require('../models/userScheme')

const JWT_SECRET="sdfghjlkj345678()fgjhkjhyftr[];dfghjhdfhggddfghghfdf3456"
module.exports={
    adminLogin:async(req,res)=>{
       
        console.log(req.body);
        const {username,password}=req.body
        console.log("hiii",req.body);
        let admin=await adminCollection.findOne({username:username})
        console.log("asdfghjk");
        if(!admin){
            res.json({error:"not found"})
         }else{
            if(password!=admin.password){
                res.json({pswdError:"Incorrect password"})
             }
             if(password==admin.password){
                console.log("sdfghjk");
                const token=jwt.sign({},JWT_SECRET);
                res.json({status:'ok',login:true,data:token,admin})
             }
         }
         
        
},

   showUser:async(req,res)=>{
    let userData=await users.find().toArray()
    if(!userData){
        res.json({error:"empty"})
    }else{
        res.json({status:true,userData})
    }
   },

   addUser:async(req,res)=>{
    let userData=req.body;
       users.insertOne(userData).then((data)=>{
       console.log(data);
       res.json({add:true})
    })
},
deleteUser:async(req,res)=>{
    console.log('reqq--',req.body);
    let userid=req.body.id
    console.log("qqqqq",userid);
    users.deleteOne({_id:new ObjectId(userid)}).then(async(data)=>{
        let details=await users.find().toArray()
         res.json({delete:true,details})
    })
   
},

changeUser:async(req,res)=>{
    console.log(req.body);
    const {username,id} = req.body
    users.updateOne({_id:new ObjectId(id)},{$set:{
        username:username
     }}).then((data)=>{
        console.log("jjjjjjj",data);
        res.json({update:true,data})
     })

}
}