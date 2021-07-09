var text1= document.querySelector('.video1')
var text2= document.querySelector('.video2')
var text3= document.querySelector('.video3')

var vid1=document.getElementById('video-1')
var vid2=document.getElementById('video-2')
var vid3=document.getElementById('video-3')

vid2.style.display="none"
vid3.style.display="none"

text1.addEventListener('click',(e)=>{
  console.log('point1')
  vid1.style.display="initial"
  vid2.style.display="none"
  vid3.style.display="none"
})
text2.addEventListener('click',(e)=>{
  vid1.style.display="none"
  vid2.style.display="initial"
  vid3.style.display="none"
})
text3.addEventListener('click',(e)=>{
  vid1.style.display="none"
  vid2.style.display="none"
  vid3.style.display="initial"
})