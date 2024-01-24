
let hr = document.getElementById("hour");
let min = document.getElementById("min");
let sec = document.getElementById("sec");

displayTime();

function displayTime() {
    let date = new Date();

    // Getting hour, mins, secs from date
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();


    let hRotation = 30 * hh; // + (mm / 2);
    let mRotation = 6 * mm;
    let sRotation = 6 * ss;

    hr.style.transform = `rotate(${hRotation}deg)`;
    min.style.transform = `rotate(${mRotation}deg)`;
    sec.style.transform = `rotate(${sRotation}deg)`;


    let hourExtra = document.querySelectorAll(".hour-extra");
    let minExtra = document.querySelectorAll(".min-extra");
    let secExtra = document.querySelectorAll(".sec-extra");

    // innerHTML = hh for all hourExtra divs
    for (let i = 0; i < hourExtra.length; i++) {
        hourExtra[i].setAttribute("data-time", hh)
    }
    for (let i = 0; i < minExtra.length; i++) {
        minExtra[i].setAttribute("data-time", mm)
    }
    for (let i = 0; i < secExtra.length; i++) {
        secExtra[i].setAttribute("data-time", ss);
    }

    //modify the --t property of the divs
    for (let i = 0; i < hourExtra.length; i++) {
        hourExtra[i].style.setProperty("--t", hRotation);
    }
    for (let i = 0; i < minExtra.length; i++) {
        minExtra[i].style.setProperty("--t", mRotation);
    }
    for (let i = 0; i < secExtra.length; i++) {
        secExtra[i].style.setProperty("--t", sRotation);
    }


}

setInterval(displayTime, 1000);
