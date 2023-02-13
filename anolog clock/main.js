setInterval(() => {
    let d = new Date();
    let hh = d.getHours()
    let mm = d.getMinutes();
    let ss = d.getSeconds();
    let seconds = document.getElementById("seconds")
    let mintue = document.getElementById("mintue")
    let hours = document.getElementById("hours")
    hhrotation = 30 * hh + mm/2;
    mmrotation = 6*mm;
    ssrotation = 6*ss;

    seconds.style.transform = `rotate(${ssrotation}deg)`
    hours.style.transform = `rotate(${hhrotation}deg)`
    mintue.style.transform = `rotate(${mmrotation}deg)`
    

}, 1000);