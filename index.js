let toggles = document.getElementsByClassName("toggles");
let mobileBox = document.querySelector('.mobile');
let page = document.getElementById('page');
let time = document.querySelector(".time");
let monthTime = document.querySelector(".monthTime");
let On = document.getElementById('On');
let menuAdd = document.querySelector('.menuAdd');
let phone = document.querySelector('.phone');
let canSave = false;
let menuBtn = document.querySelector('.menuBtn');
let otherMenu=document.querySelector('.otherMenu')
let gallary=document.querySelector('.gallary')
let camera=document.querySelector('.camera')
let cameraShot=document.querySelector('.cameraShot')
let capture=document.getElementById('capture')
let home=document.querySelector('.home')

function saveToggleState(index, state) {
    localStorage.setItem(`toggleState${index}`, state);
}

function loadToggleState(index) {
    return localStorage.getItem(`toggleState${index}`);
}

function updatePageState() {
    let allOn = true;
    for (let index = 0; index < toggles.length; index++) {
        let panel = toggles[index].nextElementSibling;
        let savedState = loadToggleState(index);
        if (savedState === 'block') {
            panel.style.display = 'block';
            allOn = false; 
        } else {
            panel.style.display = 'none';
        }
    }
    if (allOn) {
        mobileBox.classList.remove('homeScreen');
        mobileBox.classList.add('phoneInner');
        document.getElementById('page').style.display = 'none';
        document.querySelector('.time').style.display = 'none';
        document.querySelector('.monthTime').style.display = 'none';
        mobileBox.classList.remove('loadScreen');
        document.querySelector('.menuBtn').style.display = 'none';
        document.querySelector('.menuAdd').style.display = 'none';
    } else {
        // mobileBox.classList.add('homeScreen');
        mobileBox.classList.remove('phoneInner');
        // document.getElementById('page').style.display = 'block';
        On.disabled = true;
        page = setInterval(() => {
            // document.getElementById('page').style.display = 'none';
            document.querySelector('.time').style.display = 'block';
            document.querySelector('.monthTime').style.display = 'block';
            mobileBox.classList.add('loadScreen');
            document.querySelector('.menuBtn').style.display = 'block';
            On.disabled = false;
            clearTimeout(page);
        },);
    }
}

for (let index = 0; index < toggles.length; index++) {
    toggles[index].addEventListener('click', function () {
        console.log("Toggle clicked");
        let panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = 'none';
            saveToggleState(index, 'none');
        } else {
            panel.style.display = 'block';
            saveToggleState(index, 'block');
        }
        updatePageState();
    });
}

function currentTime() {
    const now = new Date();
    const fullDate = String(now).split(' ');
    const [today, month, date] = fullDate;
    const hrs = String(now.getHours()).padStart(2, 0);
    const min = String(now.getMinutes()).padStart(2, 0);
    time.innerHTML = `<h1>${hrs}:${min}</h1>`;
    monthTime.innerHTML = `<h5>${today}, ${month} ${String(date).padStart(2, 0)}</h5>`;
}

window.onload = function () {
    updatePageState();
    currentTime();
};

setInterval(currentTime, 1000);

menuBtn.addEventListener('click', function () {
    document.querySelector('.menuAdd').style.display = 'block';
    document.querySelector('.menuBtn').style.display = 'none';
    document.querySelector(".otherMenu").style.display='block'

});

phone.addEventListener('click', function () {
    window.location.href = './UU';
});
gallary.addEventListener('click',function(){
    mobileBox.classList.add('cameraImage');
    document.querySelector('.time').style.display='none'
    document.querySelector('.monthTime').style.display='none'
    document.querySelector('.menuAdd').style.display = 'none';
    document.querySelector(".otherMenu").style.display='none'
    document.getElementById('snap').style.display='block'
 
})
gallary.addEventListener('click',function(){
    document.querySelector('.home').style.display='block'

 
})
const video = document.getElementById('video');
const canvas = document.getElementById('canvas');
const snapButton = document.getElementById('snap');
const startCameraButton = document.getElementById('startCamera');
const snapshots = []; 
function offCamera(){
    navigator.mediaDevices.getUserMedia({ torch: false })
    .then(function (stream) {
        video.srcObject = stream;
        video.play();
    })
    .catch(function (err) {
        console.error('Error accessing the camera: ', err);
    });

}
// offCamera()

function startCamera() {
    navigator.mediaDevices.getUserMedia({ video: true })
        .then(function (stream) {
            video.srcObject = stream;
            video.play();
        })
        .catch(function (err) {
            console.error('Error accessing the camera: ', err);
        });
}
camera.addEventListener('click',function(){
    mobileBox.classList.add('cameraImage');
    document.querySelector('.time').style.display='none'
    document.querySelector('.monthTime').style.display='none'
    document.querySelector('.menuAdd').style.display = 'none';
    document.querySelector(".otherMenu").style.display='none'
})
camera.addEventListener('click',function(){
    startCamera();
      video.style.display = 'block'; 
    document.getElementById('snap').style.display='block'
    document.querySelector('.home').style.display='block'
})


snapButton.addEventListener('click', function () {
    const context = canvas.getContext('2d');
    context.drawImage(video, 0, 0, canvas.width, canvas.height);

    // const dataUrl= canvas.toDataURL('image/png');

    snapshots.push(dataUrl);
});
snapshots.forEach(function(el){

})
home.addEventListener('click',function(){
    mobileBox.classList.remove('cameraImage');
    document.querySelector('.time').style.display='block'
    document.querySelector('.monthTime').style.display='block'
    document.querySelector('.menuAdd').style.display = 'block';
    document.querySelector(".otherMenu").style.display='block'
})
home.addEventListener('click',function(){
    video.style.display = 'none'; 
    document.querySelector('.home').style.display='none'
    document.getElementById('snap').style.display='none'


 
})
home.addEventListener('click',function(){
 window.location.href="index.html"

})
