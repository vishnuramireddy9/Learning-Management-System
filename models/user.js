const express= require('express')
const mongoose= require('mongoose')

mongoose.connect("mongodb://localhost/lms",{
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
  tasks:[TaskSchema],
  courses:[CourseSchema]
})

var User=mongoose.model('user',userSchema)


module.exports= User;