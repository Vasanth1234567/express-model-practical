const express=require('express')
const router=express.Router()
const {getAllEmployee}=require('../controllers/employee')
router.route('/').get(getAllEmployee)

module.exports=router;