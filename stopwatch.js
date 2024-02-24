let milliseconds=0;
let sec=0;
let min=0;
let hr=0;

let timer=false;

function start(){
    timer=true;
    myFun();
}

function stop(){
    timer=false;
    myFun();
}

function reset(){
    location.reload();
}

function myFun(){
    if(timer==true){
        milliseconds=milliseconds+1;
        if(milliseconds==100){
            sec=sec+1
            milliseconds=0;
        }
        if(sec==60){
            min=min+1;
            sec=0
        }
        if(min==60){
            hr=hr+1
            min=0;
        }


        let getsecond=sec;
        let getminute=min;
        let gethour=hr;
        let getmilliseconds=milliseconds;

        if(milliseconds<10){
            getmilliseconds="0"+milliseconds;
        }

        if(sec<10){
            getsecond="0"+sec;
        }

        if(min<10){
            getminute="0"+min;
        }

        if(hr<10){
            gethour="0"+hr;
        }
        setTimeout("myFun()",10)
        document.getElementById("milliseconds").innerHTML=getmilliseconds;
        document.getElementById("sec").innerHTML=getsecond;
        document.getElementById("min").innerHTML=getminute;
        document.getElementById("hr").innerHTML=gethour;
    }
}