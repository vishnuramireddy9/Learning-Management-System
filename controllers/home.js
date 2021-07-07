const router= require('express').Router()

router.get('/tasks',(req,res)=>{
  res.send('Tasks')
})

router.get('/dashboard',(req,res)=>{
  res.send('Dashboard')
})




module.exports=router