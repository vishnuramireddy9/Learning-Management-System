const express= require('express')
const app= express()

const port= process.env.PORT||3000
var homeroutes= require('./controllers/home')
var taskroutes= require('./controllers/tasks')
var courseroutes= require('./controllers/courses')
var loginroutes= require('./controllers/login')

app.use(express.static('./public'))
app.set('view engine','ejs')
app.use(express.json())
app.use(express.urlencoded({extended:false}))


app.use('/courses',courseroutes)
app.use('/home',homeroutes)
app.use('/tasks',taskroutes)
app.use('/login',loginroutes)

app.get('/',(req,res)=>{
  res.render('home')
})

app.listen(port,()=>{
  console.log(`server is running on ${port}`);
})