let timer;
let seconds = 0;
let minutes = 0;
let hours = 0;

function startStop() {
  if (!timer) {
    timer = setInterval(updateTime, 1000);
    document.getElementById("startStop").innerText = "Stop";
  } else {
    clearInterval(timer);
    timer = null;
    document.getElementById("startStop").innerText = "Start";
  }
}

function reset() {
  clearInterval(timer);
  timer = null;
  seconds = 0;
  minutes = 0;
  hours = 0;
  document.getElementById("display").innerText = "00:00:00";
  document.getElementById("startStop").innerText = "Start";
}

function updateTime() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
  }
  if (minutes === 60) {
    minutes = 0;
    hours++;
  }
  const display = document.getElementById("display");
  display.innerText =
    (hours < 10 ? "0" : "") + hours + ":" +
    (minutes < 10 ? "0" : "") + minutes + ":" +
    (seconds < 10 ? "0" : "") + seconds;
}
