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
let home=document.querySelector(".main");
let returnToTop = document.createElement("button");
let icon = document.createElement("i");
icon.className = "fa-solid fa-arrow-up fa-bounce";
returnToTop.appendChild(icon);
returnToTop.style.cssText = `
width: 50px;
height: 70px;
position: fixed;
right: 20px;
bottom: 20px;
background-color: var(--main-color);
color: var(--primary-color);
border: none;
border-radius: 5px;
font-size: 30px;
cursor: pointer;
opacity: 0;
z-index: -1;
transition: var(--main-transition);
`;
returnToTop.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});
document.body.appendChild(returnToTop);
window.onscroll=function(){
if (scrollY > home.offsetTop + 300) {
    returnToTop.style.zIndex = 100;
    returnToTop.style.opacity = 1;
  } else {
    returnToTop.style.zIndex = -1;
    returnToTop.style.opacity = 0;
  }
}
