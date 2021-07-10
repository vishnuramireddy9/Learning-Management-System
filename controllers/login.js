
var express= require('express')
var router=  express.Router()
var User= require('../models/user')

var uid;
router.get('/',(req,res)=>{
  res.status(200).render('login')
})

router.get('/signup',(req,res)=>{
  res.render('signup')
})

router.post('/signup',(req,res)=>{
  if(!req.body.email||req.body.email=='') return res.status(404).json('Please enter email')
  if(!req.body.password||req.body.password=='') return res.status(404).json('Please enter password')
  User.findOne({email:req.body.email}).then((data)=>{
    if(!data) console.log('Fine user doesnt exist , create new account')
    else {
      return res.status(200).json('User already exist, Please login1');
      res.end();
    }
  }).catch(err=>{
    return res.status(404).json('User already exist, Please login2');
    res.end();
  })
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
    
    // User.findOne({email:req.body.email}.then((data)=>{
    //   var newTask=data.tasks.push({
    //     title:"Template",desc:"description",deadline:"21-May-2020",completed:false
    //   })
    //   data.save().then(response=>{
    //     // console.log(response)
    //     res.redirect('/login')
    //   })
    //   .catch(err=>{
    //     return res.status(404).json(err)
    //   })
    // }))
    res.redirect('/login')
  }).catch(err=>{
    res.status(404).json('Some error occured')
  })
  
})

router.post('/',(req,res)=>{
  console.log(req.body)
  User.findOne({email:req.body.email},( err,record)=>{
    if(err) return res.status(404).json("Email or password is invalid");
    if(!record||!record.password) return res.status(404).json("User doesnot exist,Please create new account");
    if(record&&record.password&&record.password==req.body.password){
      // console.log(record)
      uid=record._id;
      res.redirect('/login/home')
    }
    else return res.status(404).json("Email or password is invalid")
  })
})

router.get('/home',(req,res)=>{
  res.render('home',{uid:uid})
})

module.exports={loginroutes:router,uid} 