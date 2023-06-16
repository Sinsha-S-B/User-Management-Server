const express =require('express')
const router=express.Router();
const adminController= require('../controllers/adminController')


router.post('/login',adminController.adminLogin)
router.get('/details',adminController.showUser)
router.post('/adduser',adminController.addUser)
router.post('/deleteUser',adminController.deleteUser)
router.post('/edituser',adminController.changeUser)
module.exports=router