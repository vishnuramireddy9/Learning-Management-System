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

router.get('/add',(req,res)=>{
  res.render('editnull');
})

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
    })
    users.save().then(()=>{
      res.render('tasks',{data:users})}).catch(err=>{
        res.send(err)
      })
  })
})

router.put('/edit/:id',(req,res)=>{
  console.log(req.body)
  User.findOne({_id:userid},(err,data)=>{
    data.tasks[req.params.id].title=req.body.title;
    data.tasks[req.params.id].deadline=req.body.deadline
    data.tasks[req.params.id].completed=req.body.completed=="Yes"?true:false;
    data.tasks[req.params.id].desc=req.body.desc;
    data.save().then(()=>{
      res.render('tasks',{data:users}).catch(err=>{
        res.send(err)
      })
    })
  })
})

router.get('/delete/:id',(req,res)=>{

  User.findOne({_id:userid},function(err,data){
    if(err) console.log(err)
    if(data.tasks[req.params.id]){
      data.tasks.splice(req.params.id,1);
      data.save().then(()=>{
        res.render('tasks',{data:data})
      })
      
    }
    else res.send('Something went wrong')
  })
})
module.exports={taskroutes:router,userid} 
