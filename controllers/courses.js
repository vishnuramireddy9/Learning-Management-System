const express= require('express')
const router= require('express').Router()
var User= require('../models/user')
var userid;


var flag1=0;
var flag2=0;
var flag2=0;
router.get('/course1',(req,res)=>{
  res.render('course1_new',{flag:flag1})
})

router.get('/course1/update/',(req,res)=>{
  User.findOne({_id:userid},(err,data)=>{
    data.courses[0].completed=!data.courses[0].completed;
    if(flag1==1) flag1=0;
    else flag1=1;
    data.save().then((record)=>{
      res.render('course1_new',{flag:flag1})
    })
  })
})

router.get('/course2',(req,res)=>{
  res.render('course2_new',{flag:flag2})
})

router.get('/course2/update/',(req,res)=>{
  User.findOne({_id:userid},(err,data)=>{
    data.courses[1].completed=!data.courses[1].completed;
    if(flag2==1) flag2=0;
    else flag2=1;
    data.save().then(()=>{
      res.render('course2_new',{flag:flag2});
    })
  })
})

router.get('/course3',(req,res)=>{
  User.findOne({_id:userid},(err,data)=>{
    res.render('course3_new',{flag:flag3})
  })
  
})

router.get('/course3/update/',(req,res)=>{
  User.findOne({_id:userid},(err,data)=>{
    data.courses[2].completed=!data.courses[2].completed;
    if(flag3==1) flag3=0;
    else flag3=1;
    data.save().then((response)=>{
      res.render('course3_new',{flag:flag3});
    })
  })
})

router.get('/:id/',(req,res)=>{
  console.log(req.params)
  userid=req.params.id;
  User.findOne({_id:req.params.id},(err,data)=>{
    res.render('courses',{data:data}) 
  })
  
})



module.exports= router