const express= require('express')
const router= require('express').Router()

router.get('/course1',(req,res)=>{
  res.render('course1')
})

router.get('/course2',(req,res)=>{
  res.render('course2')
})

router.get('/course3',(req,res)=>{
  res.render('course3')
})

router.get('/:_id',(req,res)=>{
  res.render('courses')
})



module.exports= router