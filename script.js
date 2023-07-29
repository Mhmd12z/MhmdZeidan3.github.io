let timer = document.querySelector(".timer");
let days = document.querySelector(".days");
let hours = document.querySelector(".hours");
let minutes = document.querySelector(".minutes");
let seconds = document.querySelector(".seconds");
window.onload = function () {
    setInterval(function () {
        let time = new Date();
        seconds.innerHTML = time.getSeconds();
        minutes.innerHTML = time.getMinutes();
        hours.innerHTML = time.getHours();
        days.innerHTML = time.getDay();
    }, 1000);
};
