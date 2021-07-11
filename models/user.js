const express= require('express')
const mongoose= require('mongoose')

// mongoose.connect("mongodb://localhost/lms",{
//   useNewUrlParser:true,
//   useUnifiedTopology:true 
// })
mongoose.Promise=global.Promise

mongoose.connect("mongodb+srv://saikumar0204:Sai12345@cluster0.4m8by.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",{
  useNewUrlParser:true,
  useUnifiedTopology:true 
})

mongoose.connection.on('connected',()=>{
  console.log("connnected to mongoose");
})

var TaskSchema  =new mongoose.Schema({
  title:String,
  desc:String,
  deadline:String,
  completed:Boolean
})

var CourseSchema= new mongoose.Schema({
  completed:Boolean
})

var userSchema= new mongoose.Schema({
  email:String,
  firstname:String,
  surname:String,
  password:String,
  image:String,
  gender:String,
  tasks:[TaskSchema],
  courses:[CourseSchema]
})

var User=mongoose.model('user',userSchema)


module.exports= User;