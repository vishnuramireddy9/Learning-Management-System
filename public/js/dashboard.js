var update= document.querySelector('#update')
var firstname= document.getElementById('first-name')
var surname=document.getElementById('sur-name')
var password= document.getElementById('password')
var email= document.getElementById('email')

console.log(1);

update.addEventListener('click',(e)=>{
  console.log('reached update event listener')
  e.preventDefault()
  fetch('/home/dashboard/',{
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
      console.log("response",response)
      window.location.href = response.url;
    }
    console.log("response",response)
  }).catch((err)=> console.log("REsponse",err))
})