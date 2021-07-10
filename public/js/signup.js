var signup= document.querySelector('button')
var firstname= document.getElementById('first-name')
var surname=document.getElementById('sur-name')
var password= document.getElementById('password')
var email= document.getElementById('email')
var msg= document.querySelector('.msg')

signup.addEventListener('click',(e)=>{
  e.preventDefault()
  fetch('/login/signup',{
    method:"POST",
    headers:{
      'Content-Type':"application/json",
      'Accept':"application/json"
    },
    body:JSON.stringify({
      firstname:firstname.value,
      surname:surname.value,
      email:email.value,
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