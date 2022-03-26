const ipte=document.getElementById('ipt');
const ipte2=document.getElementById('ipt2');
const btne=document.getElementById('set');
const btne2=document.getElementById('stop');
const btne3=document.getElementById('cancel');
const audio=document.getElementById('alert');
var err=document.getElementById('err');
var now=new Date();
var ipt=null;
var ipt2=null;
var min=null;
var hour=null;

btne2.disabled=true;
btne3.disabled=true;

function set(){
    ipt=ipte.value;
    ipt=parseInt(ipt);
    ipt2=ipte2.value;
    ipt2=parseInt(ipt2);
    if(ipt>=25){
        err.innerHTML='<p id="err" <font color="red">>Error</p>';
    }
    if(ipt2>=61){
        err.innerHTML='<p id="err" <font color="red">>Error</p>';
    }
    if(ipt<=24&&ipt2<=60){
        err.innerHTML='<p id=err></p>';
        btne3.disabled=false;
        btne.disabled=true;
        count();
    }
}

function count(){
    const time=setInterval(()=>{
        now=new Date();
        min=now.getMinutes();
        hour=now.getHours();
        btne3.addEventListener('click',function(){
            btne.disabled=false;
            btne2.disabled=true;
            btne3.disabled=true;
            clearInterval(time);
        },false);
        if(min===ipt2 && hour===ipt){
            btne2.disabled=false;
            al();
            clearInterval(time);
        }
      },1000);
}

function al(){
    btne3.disabled=true;
    audio.src="./textures/sounds/al.mp3"
    audio.play();
}
function st(){
    btne.disabled=false;
    btne2.disabled=true;
    btne3.disabled=true;
    audio.pause();
    audio.currentTime=0;
}

btne.addEventListener('click',set);
btne2.addEventListener('click',st);

