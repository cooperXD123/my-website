let pH = document.getElementById('pH');
let button = document.getElementById('button');
let result = document.getElementById('result');
let secchiDiskDepth = document.getElementById('secchiDiskDepth');
let temperature = document.getElementById('temperature');
let smell = document.getElementById('smell');
let color = document.getElementById('color');
let color1 = document.getElementById('color1');
let color2 = document.getElementById('color2');
let color3 = document.getElementById('color3');
let color4 = document.getElementById('color4');
let color5 = document.getElementById('color5');
let BOD = document.getElementById('BOD');
let COD = document.getElementById('COD');
let isSuitable = document.getElementById('isSuitable');
button.addEventListener('click', function (event) {
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
button.addEventListener('click', function (event) {
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
button.addEventListener('click', function (event) {
    event.preventDefault();
    let temp = parseFloat(temperature.value);
    if (isNaN(temp) || temp < 0 || temp > 35) {
        result.innerHTML += "<p>กรุณากรอกอุณหภูมิที่ถูกต้อง </p>";
    } else if (temp > 30) {
        result.innerHTML += "<p>ออกซิเจนต่ำ</p>";
    } else if (temp >= 20 && temp <= 30) {
        result.innerHTML += "<p>ออกซิเจนปกติ</p>";
    }else if (temp = 20) {
        result.innerHTML += "<p>ออกซิเจนสูง</p>";
    }
});
button.addEventListener('click', function (event) {
    event.preventDefault();
    let bodValue = parseFloat(BOD.value);
    if (isNaN(bodValue) || bodValue < 0 || bodValue > 101) {
        result.innerHTML += "<p>กรุณากรอกค่า BOD ที่ถูกต้อง </p>";
    } else if (bodValue > 35) {
        result.innerHTML += "<p>น้ำเสีย</p>";
    } else if (bodValue < 35){
        result.innerHTML += "<p>น้ำสะอาด</p>";
    }
});
button.addEventListener('click', function (event) {
    event.preventDefault();
    let codValue = parseFloat(COD.value);
    if (isNaN(codValue) || codValue < 0 || codValue > 101) {
        result.innerHTML += "<p>กรุณากรอกค่า COD ที่ถูกต้อง </p>";
    } else if (codValue > 50) {
        result.innerHTML += "<p>น้ำเสีย</p>";
    } else if (codValue < 50){
        result.innerHTML += "<p>น้ำสะอาด</p>";
    }
});
button.addEventListener('click', function (event) {
    event.preventDefault();
    let smellValue = smell.checked;
    if (smellValue) {
        result.innerHTML += "<p>น้ำมีกลิ่น</p>";
    } else {
        result.innerHTML += "<p>น้ำไม่มีกลิ่น</p>";
    }
});
button.addEventListener('click', function (event) {
    event.preventDefault();
    let colorValue1 = color1.checked;
    let colorValue2 = color2.checked;
    let colorValue3 = color3.checked;
    let colorValue4 = color4.checked;
    let colorValue5 = color5.checked;

    if (colorValue1) {
        result.innerHTML += "<p>น้ำสะอาด</p>";
    } else if (colorValue2) {
        result.innerHTML += "<p>มีสาหร่ายหรือเเพลงก์ตอน</p>";
    } else if (colorValue3) {
        result.innerHTML += "<p>มีสารอินทรีย์ผุพัง</p>";
    } else if (colorValue4) {
        result.innerHTML += "<p>มีตะกอนดินหรือโคลนอยู่มาก</p>";
    } else if (colorValue5) {
        result.innerHTML += "<p>น้ำเสีย</p>";
    }
});
button.addEventListener('click', function (event) {
    event.preventDefault();
    let ph = parseFloat(pH.value);
    let secchiDepth = parseFloat(secchiDiskDepth.value);
    let temp = parseFloat(temperature.value);
    let bodValue = parseFloat(BOD.value);
    let codValue = parseFloat(COD.value);
    let smellValue = smell.checked;
    let colorValue1 = color1.checked;
    let colorValue2 = color2.checked;
    let colorValue3 = color3.checked;
    let colorValue4 = color4.checked;
    let colorValue5 = color5.checked;

    if (ph >= 6.5 && ph <= 8.5 && secchiDepth > 4 && temp <= 30 && bodValue < 35 && codValue < 50 && !smellValue && colorValue1) {
        isSuitable.innerHTML = "<span style='color: green;'>เหมาะสำหรับการใช้รดน้ำต้นไม้</span>";
    } else {
        isSuitable.innerHTML = "<span style='color: red;'>ไม่เหมาะสำหรับการใช้รดน้ำต้นไม้</span>";
    }
});

