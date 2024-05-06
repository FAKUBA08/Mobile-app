let home=document.querySelector('.home')
  let abort=document.querySelector('.abort')
  let contactInner=document.querySelector('.contactInner')
  let number=document.querySelector('.number')
  let press=document.querySelector('.press')
 let buttons=document.querySelectorAll('.seen')
 let display=document.getElementById('display')
 let contact=document.querySelector('.contact')
 let mobile=document.querySelector('.mobile')
 let contactBtn=document.getElementById('contactBtn')
 let contactList=document.querySelector('.contactList')
 let announcement=document.querySelector('.announcement')
 let toggles = document.querySelector(".toggles");
 let home2=document.getElementById('home2')
 let call =document.querySelector('.call')

 buttons.forEach(function(el,i){
  el.addEventListener('click',function(o){
  display.innerHTML+=`${i+1}`
  })
 })
 function check(numbers){
   display.innerHTML+=numbers
 }
number.addEventListener('click',function(){
  document.querySelector('.press').style.display='block'
  document.querySelector('.number').style.display='none'
  document.getElementById('display').style.display='block'
  
 })
 abort.addEventListener('click',function(){
  document.querySelector('.press').style.display='none'
  document.querySelector('.number').style.display='grid'
  document.getElementById('display').style.display='none'
  // alert('kjhgfd')
  
 })
//  home.addEventListener('click',function(){
//   window.location.href="/index.html"

//  })
 contactBtn.addEventListener('click',function(){
 document.querySelector(".contactList").style.display='block'
 document.querySelector('.press').style.display='none'
 document.getElementById('display').style.display='none'
 document.querySelector('.contactInner').style.backgroundColor=' rgba(0, 0, 0, 0.603)'
 document.querySelector('.number').style.display='none'
//  alert('lkj')
 
 })
//  let arr=[]
 let del=document.getElementById('delete')
 let box1=document.getElementById('box1')
 let box2=document.getElementById('box2')
 let box3=document.getElementById('box3')
 let save=document.querySelector('.save')
 let container=document.querySelector(".container")
 let lContainer=document.querySelector(".lContainer")
 let contactSave=document.querySelector('.contactSave')
 let accordion=document.getElementsByClassName('accordion')
 let acc=document.getElementsByClassName("accordion")
 let sims=document.querySelector('.sims')
 let cancelCall=document.querySelector('.cancelCall')
 let store=''
let dataIn= localStorage.getItem('store') ? JSON.parse(localStorage.getItem('store')) : [];
seen(dataIn);
 save.addEventListener('click',function(){

  let details={name:box1.value,lname:box2.value,phone:box3.value}
 if (box1.value==='' && box2.value==='' && box3.value==='') {
    box1.value=''
    box2.value=''
    box3.value=''
    alert('field cannot be empty')
  }else{
    dataIn.push(details)
    box1.value=''
    box2.value=''
    box3.value=''
    console.log(dataIn);
    alert('contact Saved')
    localStorage.setItem('store', JSON.stringify(dataIn));
    dataIn = JSON.parse(localStorage.getItem('store'));
    seen(dataIn);

  }
  document.querySelector(".contactSave").style.display='none'
  // console.log(arr);
 })
 function seen(arr){
  container.innerHTML=''
  arr.forEach(function(el,i){
    container.innerHTML+=`<h4>${el.name} ${' '}${el.lname}${' '}  <br> ${el.phone} <button   onclick="remove(${i})"   id="delete" ><img src="pic/folder_trash__1_-removebg-preview.png" alt=""></button></br>
</h4>`

   })
   console.log(container);
}
function remove(index){
  dataIn.splice(index,1)
  // container.innerHTML+=''
  localStorage.setItem('store', JSON.stringify(dataIn));
  dataIn = JSON.parse(localStorage.getItem('store'));
  seen(dataIn);
}



for (let index = 0; index < accordion.length; index++) {
  accordion[index].addEventListener('click',function(){
   let seen=this.nextElementSibling;
   if (seen.style.display==='block') {
    seen.style.display='none'
    document.querySelector(".contactSave").style.display='none'
   }else{
    seen.style.display='block'
    document.querySelector(".contactSave").style.display='block'
   }
  })
  
}
toggles.addEventListener('click',function(){
  window.location.href='/index.html'

})
home2.addEventListener('click',function(){
  document.querySelector(".contactList").style.display='none'
  document.querySelector('.press').style.display='block'
  document.getElementById('display').style.display='block'
  document.querySelector('.contactInner').style.backgroundColor= 'rgba(0, 0, 0, 0.898)'
  document.querySelector('.number').style.display='none'

})
function bSpace(){
 display.innerHTML=display.innerHTML.slice(0,-1)
}
container.addEventListener('dblclick',function(){
  document.querySelector(".contactList").style.display='none'
  document.querySelector('.press').style.display='none'
  document.getElementById('display').style.display='block'
  document.querySelector('.contactInner').style.backgroundColor= 'rgba(0, 0, 0, 0.898)'
  document.querySelector('.number').style.display='none'
  document.querySelector('.sims').style.display='block'
  document.getElementById('display').style.display='none'

})
cancelCall.addEventListener('click',function(){
  document.querySelector('.sims').style.display='none'
  document.querySelector('.press').style.display='block'
  document.getElementById('display').style.display='block'
})
call.addEventListener('click',function(){
  document.querySelector('.sims').style.display='block'
  document.querySelector('.press').style.display='none'
  document.getElementById('display').style.display='none'
})



