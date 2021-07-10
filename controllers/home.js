const router= require('express').Router()
var User= require('../models/user')
var userid;



router.post('/dashboard/',(req,res)=>{
  console.log('reached till now 1')
  User.findOne({_id:userid},(err,data)=>{
    console.log('reached till now2')
    data.email=req.body.email;
    if(req.body.password)
      data.password= req.body.password;
    data.firstname=req.body.firstname
    data.surname= req.body.surname
    data.save().then(()=>{
      // console.log('reached till now')
      res.redirect('/login/home');
    })
    .catch((err)=>{
      res.send(err)
    })
  })
})


router.get('/dashboard/:uid/',(req,res)=>{
  userid=req.params.uid;
  User.findOne({_id:req.params.uid},(err,data)=>{
    res.render('dashboard',{data:data});
  }) 
})





module.exports=router