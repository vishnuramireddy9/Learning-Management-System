const express= require('express')
const router= require('express').Router()
var User= require('../models/user')
var userid;



router.get('/course1',(req,res)=>{
  res.render('course1_new')
})

router.get('/course1/update/',(req,res)=>{
  User.findOne({_id:userid},(err,data)=>{
    data.courses[0].completed=!data.courses[0].completed;
    data.save().then(()=>{
      res.render('course1_new');
    })
  })
})

router.get('/course2',(req,res)=>{
  res.render('course2_new')
})

router.get('/course2/update/',(req,res)=>{
  User.findOne({_id:userid},(err,data)=>{
    data.courses[1].completed=!data.courses[1].completed;
    data.save().then(()=>{
      res.render('course2_new');
    })
  })
})

router.get('/course3',(req,res)=>{
  User.findOne({_id:userid},(err,data)=>{
    res.render('course3_new',{data:data})
  })
  
})

router.get('/course3/update/',(req,res)=>{
  User.findOne({_id:userid},(err,data)=>{
    data.courses[2].completed=!data.courses[2].completed;
    data.save().then((response)=>{
      res.render('course3_new',{data:data});
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