const express= require('express')
const app= express()

const port= process.env.PORT||3000

app.use(express.static('./public'))
app.set('view engine','ejs')
app.use(express.json())
app.use(express.urlencoded({extended:true}))

var homeroutes= require('./controllers/home')
var {taskroutes,userid}= require('./controllers/tasks')
var courseroutes= require('./controllers/courses')
var {loginroutes,uid}= require('./controllers/login')

app.get('/tasks/edit',(req,res)=>{
  res.render('edittask')
})

app.use('/login',loginroutes)
app.use('/courses',courseroutes)
app.use('/home',homeroutes)
app.use('/tasks',taskroutes)


app.get('/',(req,res)=>{
  res.render('login')
})

app.listen(port,()=>{
  console.log(`server is running on ${port}`);
})