var express= require('express')
var router=  express.Router()
router.get('/',(req,res)=>{
 
  res.render('login')
})

router.get('/signup',(req,res)=>{
  res.render('signup')
})

router.post('/signup',(req,res)=>{
  console.log(req.body)
  res.redirect('/')
})


module.exports= router