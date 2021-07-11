var update= document.querySelector('#update')
var firstname= document.getElementById('first-name')
var surname=document.getElementById('sur-name')
var password= document.getElementById('password')
var email= document.getElementById('email')

console.log(1);

update.addEventListener('click',(e)=>{
  console.log('reached update event listener')
  e.preventDefault()
  var ele=document.getElementsByName('gender')

  var gender="Male";
  for(let i=0;i<ele.length;i++){
    if(ele[i].checked)
      gender=ele[i].value
  }
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
      password:password.value,
      gender:gender
    })
  }).then((response)=>{
    if(response.redirected){
      console.log("response",response)
      window.location.href = response.url;
    }
    console.log("response",response)
  }).catch((err)=> console.log("REsponse",err))
})