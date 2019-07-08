let button = document.getElementsByTagName("button")
let audio = document.getElementById("audio")
let volumeControl = document.getElementById("volcontrol")
let isPlaying = true;

function musicToggle(){

    if(isPlaying){
        isPlaying=false;
        audio.pause();
        //console.log("OFF");
    }
    else{
        isPlaying=true;
        audio.play();
        //console.log("ON");
    }
}

function SetVolume(){
    var val = volumeControl.value;
    audio.volume=val/100;
    //console.log(val);
}