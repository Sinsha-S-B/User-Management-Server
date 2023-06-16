const express =require('express')
const router=express.Router();
const userController= require('../controllers/userController')
const upload=require('../Middlewares/multer')


router.post('/signup',userController.signup)
router.post('/login',userController.userLogin)
router.post('/profile', upload.single("image"), userController.imageUpload)
module.exports= router