const employeeModel=require('../models/employee')



const getAllEmployee=async(req,res)=>{
  try{
   const employee = await employeeModel.find();
  res.status(200).json(employee);
 }
 catch(error){
   // console.log(error);
   res.status(500).json({message:error.message})
 }
 }
 
 module.exports={getAllEmployee};