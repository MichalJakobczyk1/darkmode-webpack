import "../scss/main.scss";
import moment from "moment";

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

console.log("HELLO 🚀");

const clock = document.querySelector(".main__moment--js");
clock.innerHTML = moment().format("LTS");

window.setInterval(function () {
  clock.innerHTML = moment().format("LTS");
}, 1000);

let isDark = false;
console.log(isDark);
const darkmode = document.querySelector(".main__darkmode--js");

darkmode.addEventListener("click", () => {
  if (isDark) {
    darkmode.innerHTML = "Darkmode Off";
    document.documentElement.style.setProperty("--background-color", "#F5CB5C");
    document.documentElement.style.setProperty("--text-color", "#242423");
    document.documentElement.style.setProperty("--border", "3px solid #242423");
    isDark = false;
  } else {
    darkmode.innerHTML = "Darkmode On";
    document.documentElement.style.setProperty("--background-color", "#242423");
    document.documentElement.style.setProperty("--text-color", "#F5CB5C");
    document.documentElement.style.setProperty("--border", "3px solid #F5CB5C");
    isDark = true;
  }
});
