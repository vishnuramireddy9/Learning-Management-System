var username= document.getElementById('username')
var password= document.getElementById('password')
var submit= document.querySelector('button')
var msg=document.querySelector('.msg')
submit.addEventListener('click',(e)=>{
  e.preventDefault()
  fetch('/login',{
    method:"POST",
    headers:{
      'Content-Type':"application/json",
      'Accept':"application/json"
    },
    body:JSON.stringify({
      email:username.value ,
      password:password.value
    })
  }).then((response)=>{
    if(response.redirected){
      window.location.href = response.url;
    }
    else{
      response.json().then((data)=>{
        msg.innerText=data
      })
    }

  })
})