function UpdateTime() {
    let agora = new Date();
    let hours = agora.getHours();
    let minutes = agora.getMinutes();
    let seconods = agora.getSeconds();

    let founded = document.querySelector(".founded");
    let credits = document.querySelector(".credits");

    let schedule = document.querySelector(".hours");
    schedule.textContent =
        CorrectTime(hours) +
        ":" +
        CorrectTime(minutes) +
        ":" +
        CorrectTime(seconods);

    if (hours >= 0 && hours <= 12) {
        //Bom dia
        founded.cssText = "background-image: url(./img/dia.png)"
    } else if (hours >= 12 && hours < 18) {
        //Boa tarde
        founded.style.cssText = "background-image: url(./img/tarde.png)"
    } else {
        //Boa noite
        founded.style.cssText = "background-image: url(./img/noite.png)"
        credits.style.cssText = "color: white"
    }
}

function CorrectTime(number) {
    if (number < 10) {
        number = "0" + number;
    }
    return number;
}

UpdateTime();
setInterval(UpdateTime, 1000);