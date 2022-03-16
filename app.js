const salise =document.getElementById("salise");
const seconds =document.getElementById("seconds");
const minute = document.getElementById("minute");
const watchBtn = document.getElementById("watch");
const stopBtn = document.getElementById("stop");
const element = document.getElementById("watching");
let id;

watchBtn.addEventListener("click", watchTime);
stopBtn.addEventListener("click", stopTime);

function watchTime () {
    element.classList.toggle("fa-pause-circle-o");
    watchStop();  
}

function stopTime() {
    element.className = "fa fa-play-circle-o"; 
    watchStop();
    console.log(id);
    minute.innerText = "00";
    seconds.innerText = "00";
    salise.innerText = "00";
}

function watchStop (){
        if (!(element.classList[2] =="fa-pause-circle-o")) {
            clearInterval(id);
            return
        }
        id = setInterval( () => {
            salise.innerText++;
            if (salise.innerText <= 9) {
                salise.innerText = "0" + salise.innerText
            }
    
            if (salise.innerText == 100) {
                seconds.innerText ++;
                if (seconds.innerText <= 9) {
                    seconds.innerText = "0" + seconds.innerText
                }
                salise.innerText =0;
            }
    
            if (seconds.innerText==60) {
                minute.innerText++;
                seconds.innerText =0;
            }   
        }, 10);  
}