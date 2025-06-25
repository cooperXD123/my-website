let pH = document.getElementById('pH');
let button = document.getElementById('button');
let result = document.getElementById('result');
let secchiDiskDepth = document.getElementById('secchiDiskDepth');
let temperature = document.getElementById('temperature');
let smell = document.getElementById('smell');
const color = document.getElementById('color');
button.addEventListener('click', function(event) {
    // Prevent the form from submitting
    event.preventDefault();

    // Parse the pH value as a float
    let ph = parseFloat(pH.value);

    // Check the pH value and determine the water quality
    if (isNaN(ph) || ph < 0 || ph > 14) {
        result.innerHTML = "<p>กรุณากรอกค่า pH ที่ถูกต้อง </p>";
    } else if (ph > 7 && ph <= 14) {
        result.innerHTML = "<p> เป็นเบส</p>";
    } else if (ph == 7) {
        result.innerHTML = "<p> เป็นกลาง</p>";
    } else if (ph < 7 && ph >= 0) {
        result.innerHTML = "<p> เป็นกรด</p>";
    }
});
button.addEventListener('click', function(event) {
    event.preventDefault();

    let secchiDepth = parseFloat(secchiDiskDepth.value);

    if (isNaN(secchiDepth) || secchiDepth < 0 || secchiDepth > 10) {
        result.innerHTML += "<p>กรุณากรอกค่าความลึกของ Secchi disk ที่ถูกต้อง </p>";
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
        result.innerHTML += "<p>กรุณากรอกอุณหภูมิที่ถูกต้อง </p>";
    } else if (temp > 30) {
        result.innerHTML += "<p>ออกซิเจนต่ำ</p>";
    } else if (temp >= 20 && temp <= 30) {
        result.innerHTML += "<p>ออกซิเจนปกติ</p>";
    }
    else if (temp < 20) {
        result.innerHTML += "<p>ออกซิเจนสูง</p>";
    }
});
button.addEventListener('click',function(event) {
    event.preventDefault();
    let smellValue = smell.checked;
    if (smellValue){
        result.innerHTML += "<p>น้ำมีกลิ่น</p>";
    } else {
        result.innerHTML += "<p>น้ำไม่มีกลิ่น</p>";
    }
});
button.addEventListener('click', function(event) {
            event.preventDefault();
            let colorValue = color.value;
            if (colorValue === "clear") {
                result.innerHTML += "<p>น้ำใส</p>";
            } else if (colorValue === "brown") {
                result.innerHTML += "<p>อาจมีตะกอนหรือสารอินทรีย์</p>";
            } else if (colorValue === "green") {
                result.innerHTML += "<p>อาจมีสาหร่ายหรือการเน่าเสีย</p>";
            } else if (colorValue === "black"){
                result.innerHTML += "<p>การปนเปื้อนหรือเน่าเสียรุนแรง</p>";
            }
        });