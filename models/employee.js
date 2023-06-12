const mongoose=require('mongoose')

const employeeSchema=new mongoose.Schema({
  
  name:{
    type:String,
    required:true
    
  },
  field:{
    type:String,
    required:true
  },
  salary:{
    type:String,
    required:true
  }
});

module.exports=mongoose.model('employee',employeeSchema)