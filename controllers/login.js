
var express= require('express')
var router=  express.Router()
var User= require('../models/user')

var uid;
router.get('/',(req,res)=>{
  res.render('login')
})

router.get('/signup',(req,res)=>{
  res.render('signup')
})

router.post('/signup',(req,res)=>{
  // console.log(req.body)
  var newuser= new User({
    email:req.body.email,
    password:req.body.password,
    firstname:req.body.firstname,
    surname:req.body.surname,
    tasks:[],
    courses:[{completed:false},{completed:false},{completed:false}]
  })
  newuser.save().then(record=>{
    console.log(record)
    // console.log(record)
    User.findOne({email:req.body.email},(err,data)=>{
      var newTask=data.tasks.push({
        title:"Template",desc:"description",deadline:"21-May-2020",completed:false
      })
      data.save().then(response=>{
        // console.log(response)
        res.redirect('/login')
      })
    })
    
  })
  
})

router.post('/',(req,res)=>{
  console.log(req.body)
  User.findOne({email:req.body.email},( err,record)=>{
    if(err) res.json("User name or id is invalid")
    if(!record) res.json("User doesnot exist or Email id is username")
    if(record.password==req.body.password){
      // console.log(record)
      uid=record._id;
      res.redirect('/login/home')
    }
    
    else res.json("User name or id is invalid")
  })
})

router.get('/home',(req,res)=>{
  res.render('home',{uid:uid})
})

module.exports={loginroutes:router,uid} 