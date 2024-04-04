// const timer = document.getElementById("timer");
// let timerContent = parseInt(timer.textContent);

// function conutDown() {
//     timer.textContent = --timerContent;
//     if (timerContent === 0) {
//         clearInterval(interval);
//         alert("1");
//     }
// }

// const interval = setInterval(conutDown, 1000);


const timer = document.getElementById("timer");
let timeArray = [0, 1, 33]; // начальные значения часов, минут и секунд


function getCurrentFormattedTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
}

function countdownTimer() {
    let hours = timeArray[0];
    let minutes = timeArray[1];
    let seconds = timeArray[2];

    if (seconds > 0) {
        seconds--;
    } else if (minutes > 0) {
        seconds = 59;
        minutes--;
    } else if (hours > 0) {
        seconds = 59;
        minutes = 59;
        hours--;
    } else {
        clearInterval(interval);
        alert("Вы победили в конкурсе!");
        location.assign("https://semen2298.github.io/Portfolio/");
        return;
    }
    timeArray = [hours, minutes, seconds];
    timer.textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

const interval = setInterval(countdownTimer, 1000);
