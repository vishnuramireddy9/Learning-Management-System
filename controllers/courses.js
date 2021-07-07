const express= require('express')
const router= require('express').Router()

router.get('/',(req,res)=>{
  res.render('courses')
})

router.get('/ds',(req,res)=>{
  res.render('ds')
})

module.exports= router