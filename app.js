require('dotenv').config()
const express=require('express')
const app=express()
const PORT = 3500 || process.env.PORT
const employeePage=require('./routes/employee')

const mongoose=require('mongoose')

mongoose.connect(process.env.DB_URL)
const db=mongoose.connection
db.on('error',(erroMessage)=>console.log(erroMessage))
db.once('open',()=>console.log(`Connection Established For DataBase`))

app.use(express.json())
app.get('/',(req,res)=>{
  res.send("This is App.js Page")
  res.end()
})
app.use('/api/v1/employee',employeePage)
app.listen(PORT,console.log(`Listening at http://localhost:${PORT}`))