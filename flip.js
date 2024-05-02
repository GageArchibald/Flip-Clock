var showsec = document.getElementById("sec");
var showsecbutton = document.getElementById("show-sec");

showsec.style.display = "none";

showsecbutton.onclick = function(){
    if (showsec.style.display === "none"){
        showsec.style.display = "inline";
        showsecbutton.innerHTML = "Hide Seconds";
    }
    else{
        showsec.style.display = "none";
        showsecbutton.innerHTML = "Show Seconds";
    }
}

function get_time(){
// get date and time
var day = new Date()
var hour = day.getHours();
var min = day.getMinutes();
var sec = day.getSeconds();

hour = (hour % 12) || 12;

hour = (hour < 10 ? "0" : "") + hour;
min = (min < 10 ? "0" : "") + min;
sec = (sec < 10 ? "0" : "") + sec;

// insert them into the file
document.getElementById("hour").innerHTML = hour;
document.getElementById("min").innerHTML = min;
document.getElementById("sec").innerHTML = sec;
}


var check = setInterval(get_time,1000);