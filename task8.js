// Function to turn on the red light
function turnOnRed() {
    clearLights();
    let stop = document.getElementById('stopLight');
    stop.style.backgroundColor = 'red';
}

// Function to turn on the yellow light
function turnOnYellow() {
    clearLights();
    let ready = document.getElementById('readyLight');
    ready.style.backgroundColor = 'yellow';
}

// Function to turn on the green light
function turnOnGreen() {
    clearLights();
    let go = document.getElementById('goLight');
    go.style.backgroundColor = 'green';
}

// Function to clear all lights
function clearLights() {
    document.getElementById('stopLight').style.backgroundColor = '#4b5069';
    document.getElementById('readyLight').style.backgroundColor = '#4b5069';
    document.getElementById('goLight').style.backgroundColor = '#4b5069';
}
