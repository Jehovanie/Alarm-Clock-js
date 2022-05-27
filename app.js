const timer = document.querySelector("#timer");
const hours = document.querySelector("#hours");
const seconds = document.querySelector("#seconds");
const minutes = document.querySelector("#minutes");
const ampm = document.querySelector("#ampm");
const btn = document.querySelector("#startstop");


var currentTime;
var alarmElement;
var activeAlarm = false;
var sound = new Audio("alarm.wav");
sound.loop = true;


const showTime = () => {
    var now = new Date();
    currentTime = now.toLocaleTimeString();
    timer.textContent = currentTime;

    if (currentTime === alarmElement && activeAlarm == true) {
        sound.play();
    } else if (activeAlarm === false) {
        sound.pause();
    } else {

    }

    setTimeout(showTime, 1000);
}

showTime();


const addMinSecHours = (id) => {

    var select = id;
    var min = id.getAttribute("id") === "hours" ? 23 : 59;


    for (let i = 0; i <= min; i++) {
        select.options[select.options.length] = new Option(i < 10 ? "0" + i : i);
    }
}


addMinSecHours(seconds)
addMinSecHours(minutes)
addMinSecHours(hours)

/*

startstop.addEventListener("click", () => {

    if (activeAlarm === false) {

        hours.disabled = true;
        seconds.disabled = true;
        minutes.disabled = true;
        ampm.disabled = true;


        alarmElement = hours.value + " : " + minutes.value + " : " + seconds.value;
        this.textContent = "Clear Alarm";

        activeAlarm = true;
    }
});

*/


startstop.onclick = function () {

    if (activeAlarm === false) {

        hours.disabled = true;
        seconds.disabled = true;
        minutes.disabled = true;
        ampm.disabled = true;


        alarmElement = hours.value + ":" + minutes.value + ":" + seconds.value;
        this.textContent = "Clear Alarm";

        console.log(alarmElement);

        activeAlarm = true;
    } else {
        hours.disabled = false;
        seconds.disabled = false;
        minutes.disabled = false;
        ampm.disabled = false;

        alarmElement = " ";
        this.textContent = "Set Alarm";

        activeAlarm = false;
    }
}