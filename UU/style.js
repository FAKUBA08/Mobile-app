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
let searchResult=document.querySelector('.searchResult')
let notFound=document.querySelector('.notFound')
let boxMobile=document.getElementById('boxMobile')
let airtel=document.querySelector('.airtel')
let calling=document.querySelector('.calling')
let callDetails=document.querySelector('.callDetails')
let callDetail=document.getElementById('callDetail')
let type=document.querySelector('.type')
let callingStart=document.getElementById('callingStart')
let  callInt;
let abortCall=document.querySelector('.abortCall')
let callDuration=document.getElementById('callDuration')
let durationOk=document.querySelector('.durationOk')
let callingAudio = document.getElementById('callingAudio');
let recentCall = document.querySelector('.recentCall');
let ring = document.getElementById('ring');
let balance=document.querySelector('.balance')
let airtemBalance=document.querySelector('.airtemBalance')
let airtemOk=document.querySelector('.airtemOk')
let wrongInput=document.querySelector('.wrongInput')
let wrongInputD=document.querySelector('.wrongInputD')
let wrongInputOk=document.querySelector('.wrongInputOk')

let audioFiles = [
    "pic/audiocall1.mp3",
    "pic/audiocall2.wav",
    "pic/audiocall3.wav",
    "pic/audiocall4.wav",
    "pic/audiocall5.wav",
    "pic/audiocall6.m4a",
    "pic/audiocall7.mp3",
];

function getRandomAudio() {
    let randomIndex = Math.floor(Math.random() * audioFiles.length);
    return audioFiles[randomIndex];
}



 buttons.forEach(function(el,i){
  el.addEventListener('click',function(o){
  display.innerHTML+=`${i+1}`
  document.querySelector('.backSpace').style.display='block'
  })
 })
 function check(numbers){
   display.innerHTML+=numbers
   document.querySelector('.backSpace').style.display='block'
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
  document.querySelector('.backSpace').style.display='none'

  
 })
 home.addEventListener('click',function(){
  window.location.href="/index.html"


 })
 contactBtn.addEventListener('click',function(){
  document.querySelector('.searchContact').style.display='block'
 document.querySelector(".contactList").style.display='block'
 document.querySelector('.press').style.display='none'
 document.getElementById('display').style.display='none'
 document.querySelector('.contactInner').style.backgroundColor=' rgba(0, 0, 0, 0.603)'
 document.querySelector('.number').style.display='none'
 document.querySelector('.notFound').style.display='none'
 document.querySelector('.backSpace').style.display='none'
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
 let searchContact=document.querySelector('.searchContact')
 let duration=document.querySelector('.duration')
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
    container.innerHTML+=`<h4 class="pointer">${el.name} ${' '}${el.lname}${' '}  <br> ${el.phone} <button   onclick="remove(${i})"   id="delete" ><img src="pic/folder_trash__1_-removebg-preview.png" alt=""></button></br>
</h4>`

   })
   console.log(container);
}
function remove(index){
 if (confirm('Are sure you want to delete this contact?')) {
  dataIn.splice(index,1)
  // container.innerHTML+=''
  localStorage.setItem('store', JSON.stringify(dataIn));
  dataIn = JSON.parse(localStorage.getItem('store'));
  seen(dataIn);
 }
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
  document.querySelector('.searchContact').style.display='none'
  document.querySelector('.searchResult').style.display='none'
  document.querySelector('.notFound').style.display='none'

})
// let backSpace=document.querySelector('. backSpace')
function bSpace(){
 display.innerHTML=display.innerHTML.slice(0,-1)
 if (display.innerHTML==='') {
  document.querySelector('.backSpace').style.display='none'
  
 }else{
  document.querySelector('.backSpace').style.display='block'
 }
}
let   selectedContact=" "
let savedDisplayContent = "";
container.addEventListener('dblclick',function(){
  document.querySelector(".contactList").style.display='none'
  document.querySelector('.press').style.display='none'
  document.getElementById('display').style.display='block'
  document.querySelector('.contactInner').style.backgroundColor= 'rgba(0, 0, 0, 0.898)'
  document.querySelector('.number').style.display='none'
  document.querySelector('.sims').style.display='block'
  document.getElementById('display').style.display='none'
  document.querySelector('.searchContact').style.display='none'
  document.querySelector('.callDetails').style.display='none'
  document.querySelector('.calling').style.display = 'none';
  if (event.target.tagName === 'H4') {
    const details = event.target.innerText;
    selectedContact = details;
    callDetail.innerHTML = '';
    savedDisplayContent =''
    // document.querySelector('.sims').style.display = 'none';
    document.querySelector('.calling').style.display = 'block';
    document.querySelector('.home').style.display = 'none';
    document.querySelector('.type').style.display = 'none';
  
  }


})
document.getElementById('display').style.display='none'
cancelCall.addEventListener('click',function(){
  document.querySelector('.sims').style.display='none'
  document.querySelector('.press').style.display='block'
  document.getElementById('display').style.display='block'
  document.querySelector('.home').style.display='block'
  document.querySelector('.calling').style.display='none'
  document.querySelector('.type').style.display='block'
  document.querySelector('.callDetails').style.display='none'
  document.querySelector('.callingStart').style.display='none'
})
let airtemDetails=document.querySelector('.airtemDetails')
call.addEventListener('click',function(){
  document.querySelector('.sims').style.display='block'
  document.querySelector('.press').style.display='none'
  document.getElementById('display').style.display='none'
  document.querySelector('.backSpace').style.display='none'
  function call() {
    if (display.innerHTML==='*310#') {
  document.querySelector('.calling').style.display = 'none';
  document.querySelector('.callDetails').style.display='none'
  document.getElementById('callingStart').style.display='block'
  document.querySelector('.sims').style.display='none'
  document.querySelector('.abortCall').style.display='none'
  document.querySelector('.home').style.display = 'block';
  document.querySelector('.type').style.display = 'block';
  clearInterval(callInt);
  ring.pause()
  // balance.innerHTML=`N${newAirtimeBalance}`
  document.querySelector('.airtemBalance').style.display='block'
 
  } if (display.innerHTML.startsWith('*') && display.innerHTML.endsWith('#') && display.innerHTML !=='*310#') {
  wrongInputD.innerHTML='Invalid service code'
 document.querySelector('.wrongInput').style.display='block'
  document.querySelector('.airtemBalance').style.display='block'
  document.querySelector('.calling').style.display = 'none';
  document.querySelector('.callDetails').style.display='none'
  clearInterval(callInt)
  ring.pause()
  }
   }
   airtel.addEventListener('click', function() {
    call()
   })
})
airtemOk.addEventListener('click',function(){
  document.querySelector('.airtemBalance').style.display='none'
  document.querySelector('.press').style.display='block'
  document.getElementById('display').style.display='block'
  talkTime.innerHTML='0.00'


})
wrongInputOk.addEventListener('click',function(){
  document.querySelector('.airtemBalance').style.display='none'
  document.querySelector('.press').style.display='block'
  document.getElementById('display').style.display='block'
  document.querySelector('.wrongInput').style.display=' none'


})
searchContact.addEventListener('input',function(){
  const  newSearch=searchContact.value.toLowerCase()
  const newContact=dataIn.filter(function(el){
    let updatedArr=`${el.name}${el.lname}${el.phone}`.toLowerCase()
     return updatedArr.includes(newSearch)
    
   })
   document.querySelector('.searchResult').style.display='none'
   document.querySelector('.notFound').style.display='none'
   if (newContact.length===0) {
   document.querySelector('.searchResult').style.display='block'
  document.querySelector('.notFound').style.display='block'
  searchResult.innerHTML='RESULT NOT FOUND'
   }
   seen(newContact)
 })
//  callDetails.innerHTML = '';
 airtel.addEventListener('click', function() {
  timer()
     document.querySelector('.calling').style.display = 'block';
     document.querySelector('.home').style.display = 'none';
     document.querySelector('.type').style.display = 'none';
     callDetails.innerHTML=''
     document.querySelector('.sims').style.display='block'

  //    savedDisplayContent = display.innerHTML;
  // callDetail.innerHTML = savedDisplayContent;
  callDetail.innerHTML = selectedContact;
  document.querySelector('.callDetails').style.display='block'
  document.getElementById('callingStart').style.display='block'
  document.querySelector('.sims').style.display='none'
  document.querySelector('.abortCall').style.display='block'
  ring.play()
  // call()
 })
let initialAirtimeBalance = 500;

let newAirtimeBalance = parseFloat(localStorage.getItem('airtimeBalance')) || initialAirtimeBalance;
balance.innerHTML = `N${newAirtimeBalance}`;
let talkTime=document.querySelector('.talkTime')
talkTime.innerHTML='0.00'

abortCall.addEventListener('click', function () {
  
    const deduction = 1.5;
    if (newAirtimeBalance >= deduction) {
        newAirtimeBalance -= deduction;
        balance.innerHTML = `N${newAirtimeBalance}`;
        talkTime.innerHTML=deduction;


        localStorage.setItem('airtimeBalance', newAirtimeBalance.toString());
    } else {
  
        alert("Insufficient balance. Please recharge your account.");
    }

    callingAudio.pause();
    callingAudio.currentTime = 0;
    document.getElementById('callDuration').style.display = 'block';
    document.querySelector('.calling').style.display = 'none';
    document.querySelector('.sims').style.display = 'none';
    document.querySelector('.home').style.display = 'block';
    document.querySelector('.number').style.display = 'grid';
    document.getElementById('display').style.display = 'none';
    document.querySelector('.type').style.display = 'block';
    document.querySelector('.abortCall').style.display = 'none';
    callDetails.innerHTML = '00:00:00';
    clearInterval(callInt);
    ring.pause();
    duration.innerHTML = `Your last call duration was ${lastHours} hours, ${lastMinutes} minutes, ${lastSeconds} seconds`;

    let recentCallItem = document.createElement('div');
    recentCallItem.classList.add('recentCallItem');

    recentCallItem.innerHTML = `<h4 class="recentCallBotton">${selectedContact}</h4><button class="deleteButton" onclick="deleteRecentCall(this)"><img src="pic/folder_trash__1_-removebg-preview.png" alt=""></button>`;

    recentCall.appendChild(recentCallItem);    
});
function timer(){
let hours=0
let min=0
let sec=0

 callInt=setInterval(() => {
  sec++
if (sec>=60) {
  sec=0
  min++
}
if (min>=60) {
  sec=0
  min=0
  hours++
  
}
      lastHours = hours;
      lastMinutes = min;
      lastSeconds = sec;

document.getElementById('callingStart').style.display='none'
  callDetails.innerHTML=`${hours.toString().padStart(2,0)}:${min.toString().padStart(2,0)}:${sec.toString().padStart(2,0)}`
  ring.pause()
       let randomAudio = getRandomAudio();
       callingAudio.src = randomAudio;
       callingAudio.play();

},2000);
}
durationOk.addEventListener('click',function(){
  document.getElementById('callDuration').style.display='none'
})
 
 // Load recent calls from local storage when the page loads
window.addEventListener('load', function() {
  loadRecentCalls();
});

function loadRecentCalls() {
  let recentCalls = JSON.parse(localStorage.getItem('recentCalls')) || [];
  displayRecentCalls(recentCalls);
}

function displayRecentCalls(recentCalls) {
recentCalls.forEach(function(call) {
      let recentCallItem = document.createElement('div');
      recentCallItem.classList.add('recentCallItem');
      recentCallItem.innerHTML = `<h4 class="recentCallBotton">${call.contact}</h4><button class="deleteButton" onclick="deleteRecentCall(this)"><img src="pic/folder_trash__1_-removebg-preview.png" alt=""></button>`;
      recentCall.appendChild(recentCallItem);
  });
}
function saveRecentCall(contact) {
  let recentCalls = JSON.parse(localStorage.getItem('recentCalls')) || [];
  recentCalls.unshift({ contact: contact });
  localStorage.setItem('recentCalls', JSON.stringify(recentCalls));
}

function deleteRecentCall(button) {
    let recentCallItem = button.parentNode;
    let index = Array.from(recentCallItem.parentNode.children).indexOf(recentCallItem);
    recentCallItem.parentNode.removeChild(recentCallItem);

    let recentCalls = JSON.parse(localStorage.getItem('recentCalls')) || [];
    recentCalls.splice(index, 1); 
    localStorage.setItem('recentCalls', JSON.stringify(recentCalls));
  
}


abortCall.addEventListener('click', function () {
  saveRecentCall(selectedContact);
});
