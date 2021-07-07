var express= require('express')
var router= express.Router()
var mongoose = require('mongoose')
var moment = require('moment')
mongoose.connect("mongodb://localhost/ufff",{
  useNewUrlParser:true,
  useUnifiedTopology:true 
})

mongoose.connection.on('connected',()=>{
  console.log("connnected to mongoose");
})

var TaskSchema= new mongoose.Schema({
  title:String,
  desc:String,
  deadline:String,
  completed:Boolean
})

var task= mongoose.model('task',TaskSchema)

router.get('/',(req,res)=>{
  task.find({},function(err,data){
    // console.log(data)
    if(err) console.log(err)
    else res.render('tasks',{data:data})
  })
})

router.get('/read/:id',(req,res)=>{
  task.find({_id:req.params.id},(err,data)=>{
    if(err) console.log(err)
    else res.render('read',{data:data})
  })
})

router.get('/edit',(req,res)=>{

  var data ={}
  res.render('edittask',{data:data})
})

router.get('/edit/:id',(req,res)=>{
  task.find({_id:req.params.id},function(err,data){
    if(err) console.log(err)
    else res.render('edittask',{data:data[0]})
  })
  
})

router.post('/edit',(req,res)=>{
  var value={
    title:req.body.title,
    deadline:req.body.deadline,
    completed:req.body.completed=="Yes"?true:false,
    desc:req.body.desc
  }
  var newtask= task(value).save((err,data)=>{
    if(err) console.log(err)
    else   res.redirect('/tasks')
  })
})

router.get('/:id',(req,res)=>{
  task.deleteOne({_id:req.params.id})
  .then(()=>{
    
    res.redirect('/tasks')
  })
  .catch((e)=>{
    console.log("Error is at this point 5")
  })
  
})
module.exports= router
