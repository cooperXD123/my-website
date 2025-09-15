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
    event.preventDefault();
    let ph = parseFloat(pH.value);
    let secchiDepth = parseFloat(secchiDiskDepth.value);
    let temp = parseFloat(temperature.value);
    let smellValue = smell.checked;
    let colorValue1 = color1.checked;
    let colorValue2 = color2.checked;
    let bodValue = parseFloat(BOD.value);
    let codValue = parseFloat(COD.value);
    let suitability = isSuitable.checked;
if (ph >= 5.5 && ph <= 7.5 && secchiDepth >= 1.50 && temp <= 44 && bodValue <= 35 && codValue <= 40 && colorValue1 )
        isSuitable.innerHTML = "<span style='color: green;'>เหมาะสำหรับการใช้รดน้ำต้นไม้</span>";
    else if (ph >= 5.5 && ph <= 7.5 && secchiDepth >= 1.50 && temp <= 44 && bodValue <= 35 && codValue <= 40 && colorValue2 )
        isSuitable.innerHTML = "<span style='color: orange;'>เหมาะสำหรับการใช้รดน้ำต้นไม้</span>";
    else {
        isSuitable.innerHTML = "<span style='color: red;'>ไม่เหมาะสำหรับการใช้รดน้ำต้นไม้</span>";
    }
}); 