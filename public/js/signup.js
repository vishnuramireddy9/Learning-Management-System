var signup= document.querySelector('button')
var firstname= document.getElementById('first-name')
var surname=document.getElementById('sur-name')
var password= document.getElementById('password')
var email= document.getElementById('email')
// var day=document.getElementById('day')
// console.log(day.options[day.selectedIndex].value);
// console.log(day.options[day.selectedIndex].text);
// var gender= document.querySelector('')
// console.log("Gender.value",gender)
var msg= document.querySelector('.msg')

var contact= document.getElementById('contact')

signup.addEventListener('click',(e)=>{
  e.preventDefault()
  var ele=document.getElementsByName('gender')

  var gender="Male";
  for(let i=0;i<ele.length;i++){
    if(ele[i].checked)
      gender=ele[i].value
  }
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
      password:password.value,
      gender:gender,
      contact:contact.value
      // day:day.value
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