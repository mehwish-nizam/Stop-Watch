var hour =0;
var msec = 0;
var min = 0;
var sec = 0;
var interval;
var msecHeading = document.getElementById("msec");
var secHeading = document.getElementById("sec");
var minHeading = document.getElementById("mins");
hourHeading = document.getElementById("hours");
function timer(){
    msec++;
    msecHeading.innerHTML = msec;
    if(msec==100){
        sec++;
        secHeading.innerHTML = sec;
        msec = 0;
        msecHeading.innerHTML = "00";
    }
    if(sec==59){
        min++;
        minHeading.innerHTML = min;
        sec = 0;
        secHeading.innerHTML = "00";
    }
    if(min == 59){
        hour++;
        hourHeading.innerHTML = hour;
        min = 0;
        minHeading.innerHTML="00";
    }
    if(msec<10){
        msecHeading.innerHTML = "0"+msec;
    }
    if(sec<10){
        secHeading.innerHTML = "0"+sec;
    }
    if(min<10){
        min.innerHTML = "0"+min;
    }
    if(hour<10){
        hourHeading.innerHTML = "0"+hour;
    }
}


function reset(){
    sec = 0;
    msec = 0;
    min = 0;
    hour = 0;
    msecHeading.innerHTML = "00";
    secHeading.innerHTML = "00";
    minHeading.innerHTML = "00";
    hourHeading.innerHTML = "00";
    clearInterval(interval);
    x.id = "Start";
    x.innerHTML = "Start";
}
var x = document.getElementById("Start");
function start(){
    if(x.id =="Start"||x.id == "continue"){
    interval = setInterval(timer,10);
    x.id = "pause";
    x.innerHTML = "Pause";
    }
    else if(x.id =="pause"){
        clearInterval(interval);
        x.id = "continue";
        x.innerHTML = "Continue";
    }
    
}
