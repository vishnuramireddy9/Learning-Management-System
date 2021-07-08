var express= require('express')
var router= express.Router()
var mongoose = require('mongoose')
var moment = require('moment')
var User= require('../models/user')
// mongoose.connect("mongodb://localhost/ufff",{
//   useNewUrlParser:true,
//   useUnifiedTopology:true 
// })

// mongoose.connection.on("connected",()=>{
//   console.log("connnected to mongoose");
// })

var TaskSchema= new mongoose.Schema({
  title:String,
  desc:String,
  deadline:String,
  completed:Boolean
})

var task= mongoose.model('task',TaskSchema)

var userid;

router.get('/:uid/',(req,res)=>{
  userid=req.params.uid;
  console.log(userid)
  User.findOne({_id:req.params.uid},function(err,data){
    // console.log(data)
    
    if(err) console.log(err)
    else res.render('tasks',{data:data})
  })  
})

router.get('/read/:taskid',(req,res)=>{
  User.findOne({_id:userid},(err,data)=>{
    if(err) console.log(err)
    if(data.tasks[req.params.taskid])
      res.render('read',{data:data.tasks[req.params.taskid]})
    else res.send('Something went wrong')
  })
})

//New task
router.get('/add',(req,res)=>{
  res.render('editnull');
})

router.get('/edit/:taskid',(req,res)=>{
  User.findOne({_id:userid},function(err,data){
    if(err) console.log(err)
    if(data.tasks[req.params.taskid])
    res.render('edittask',{data:data.tasks[req.params.taskid]})
    else res.send('Something went wrong')
  })
  
})

router.post('/edit',(req,res)=>{
  User.findOne({_id:userid},function(err,users){
    users.tasks.push({
      title:req.body.title,
    deadline:req.body.deadline,
    completed:req.body.completed=="Yes"?true:false,
    desc:req.body.desc
    }).save().then(()=>{
      res.redirect('/tasks')})
  })
  // var value={
  //   title:req.body.title,
  //   deadline:req.body.deadline,
  //   completed:req.body.completed=="Yes"?true:false,
  //   desc:req.body.desc
  // }
  // var newtask= task(value).save((err,data)=>{
  //   if(err) console.log(err)
  //   else   res.redirect('/tasks')
  // })
})

router.get('/:uid/:id',(req,res)=>{
  task.deleteOne({_id:req.params.id})
  .then(()=>{
    res.redirect('/tasks')
  })
  .catch((e)=>{
    console.log("Error is at this point 5")
  })
  
})
module.exports={taskroutes:router,userid} 
