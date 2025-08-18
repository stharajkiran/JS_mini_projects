let interval = null;
let elapsedTime = 0;
let clockRunning = false;
const time = document.getElementById("time");

function padStart(value) {
  // Ensure the value is a two-digit string
  return String(value).padStart(2, "0");
}

function setTime() {
  // Change the html content of time

  const seconds = elapsedTime % 60;
  const minutes = Math.floor(elapsedTime / 60);
  const hours = Math.floor(elapsedTime / 3600);
  time.innerHTML = `${padStart(hours)}:${padStart(minutes)}:${padStart(seconds)}`;
}

function timer() {
  // Increment the elapsed time by 1 second
  elapsedTime++;
  // Call setTime to update the display
  setTime();
}

function startClock() {
  if (clockRunning) {
    return;
  }
  if (interval) {
    // If the clock is already running, do nothing
    stopClock();
  }
  interval = setInterval(timer, 1000);
  clockRunning = true;
}

function stopClock() {
  clearInterval(interval);
  clockRunning = false;
}

function resetClock() {
  stopClock();
  elapsedTime = 0;
  setTime();
  clockRunning = false;
}
