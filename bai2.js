var countdown;
var timeInput;
var alarm = document.getElementById('mp3');

function startCountdown() {
    var hours = document.getElementById("hours").value
    var minutes = document.getElementById('minutes').value;
    var seconds = document.getElementById('seconds').value;
    timeInput =  hours*3600+minutes * 60 + seconds;
    countdown = setInterval(updateTime, 1000);
}
function updateTime() {
    var hours =Math.floor(timeInput/3600);
    var minutes = Math.floor((timeInput%3600) / 60);
    var seconds = (timeInput%3600) % 60;
    document.getElementById('time').textContent =  hours+':'+ minutes + ':' + seconds;
    timeInput--;

    if (timeInput < 0) {
        clearInterval(countdown);
        alarm.play();
        alert("het gio")
    }
}

function resetCountdown(){
    document.getElementById('time').textContent =  "00"+':'+ "00" + ':' +"00";
    clearInterval(countdown);
    alarm.pause();
    alarm.currentTime = 0;
    
    
}
