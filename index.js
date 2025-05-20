let pH = document.getElementById('pH');
let button = document.getElementById('button');
let result = document.getElementById('result');
let secchiDiskDepth = document.getElementById('secchiDiskDepth');
let temperature = document.getElementById('temperature');
button.addEventListener('click', function(event) {
    // Prevent the form from submitting
    event.preventDefault();

    // Parse the pH value as a float
    let ph = parseFloat(pH.value);

    // Check the pH value and determine the water quality
    if (isNaN(ph) || ph < 0 || ph > 14) {
        result.innerHTML = "Invalid pH value";
    } else if (ph > 7 && ph <= 14) {
        result.innerHTML = "ค่า pH เป็นเบส";
    } else if (ph == 7) {
        result.innerHTML = "ค่า pH เป็นกลาง";
    } else if (ph < 7 && ph >= 0) {
        result.innerHTML = "ค่า pH เป็นกรด";
    }
});
button.addEventListener('click', function(event) {
    // Prevent the form from submitting
    event.preventDefault();

    // Parse the secchi disk depth value as a float
    let secchiDepth = parseFloat(secchiDiskDepth.value);

    // Check the secchi disk depth value and determine the water quality
    if (isNaN(secchiDepth) || secchiDepth < 0 || secchiDepth > 10) {
        result.innerHTML += "<p>Invalid secchiDiskDepth value</p>";
    } else if (secchiDepth > 4) {
        result.innerHTML += "<p>น้ำใส</p>";
    } else if (secchiDepth >= 1 && secchiDepth < 5) {
        result.innerHTML += "<p>น้ำขุ่น</p>";
    } else if (secchiDepth < 1) {
        result.innerHTML += "<p>น้ำขุ่นมาก</p>";
    }
});
button.addEventListener('click', function(event) {
    event.preventDefault();

    let temp = parseFloat(temperature.value);

    if (isNaN(temp) || temp < 0 || temp > 35) {
        result.innerHTML += "<p>Invalid temperature value</p>";
    } else if (temp > 30) {
        result.innerHTML += "<p>อุณหภูมิ (°C) = </p>";
    } else if (temp >= 20 && temp <= 30) {
        result.innerHTML += "<p>อุณหภูมิ (°C) = </p>";
    } else if (temp < 20) {
        result.innerHTML += "<p>อุณหภูมิ (°C) = </p>";
    }
});