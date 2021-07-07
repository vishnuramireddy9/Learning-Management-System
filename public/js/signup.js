var signup= document.querySelector('button')
var firstname= document.getElementById('first-name')

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

    })
  }).then(()=>{
    console.log('request sent')
  })
})