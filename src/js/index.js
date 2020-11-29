import '../scss/main.scss';
import moment from 'moment';

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

console.log('HELLO 🚀')

const clock = document.querySelector(".main__moment--js");
clock.innerHTML=moment().format('LTS');

window.setInterval(function(){
    clock.innerHTML=moment().format('LTS');
  }, 1000);