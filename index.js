const express=require('express')
const mongoose=require('mongoose')
const cors=require('cors')
const cookieParser = require('cookie-parser')
const userRouter=require('./Routes/user')
const adminRouter=require('./Routes/admin')
require('dotenv').config();
const app=express()
app.listen(3001,()=>{
    console.log("connected");
})

app.use(cookieParser())
app.use(express.json())
app.use(cors({
    origin:["http://localhost:3000"],
    methods:["GET","POST"],
    credentials:true
}))

mongoose.connect("mongodb://127.0.0.1:27017/user",{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("database connected");
}).catch(error=>{
    console.log(error.message);
})

app.use('/',userRouter)
app.use('/admin',adminRouter)
