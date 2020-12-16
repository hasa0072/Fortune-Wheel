
const APP = {
    oldAngle: 0,
    angle: 0,
    init() {
       let wheel = document.getElementById('Wheel');
       wheel.addEventListener('click', APP.spin);
       wheel.addEventListener('animationend', function() {
           console.log('Animation Ended');
           this.classList.remove('spinningWheel');
       });
       console.log(wheel);
    },

    spin(ev) {
        let diff = Math.random() * 720 + 360;
        APP.oldAngle = APP.angle;
        APP.angle += diff;


        let root = document.documentElement;
        root.style.setProperty('--oldAngle', APP.oldAngle);
        root.style.setProperty('--angle', APP.angle);
        console.log(root);
        this.classList.add('spinningWheel');
    }
}


document.addEventListener("DOMContentLoaded", APP.init);
