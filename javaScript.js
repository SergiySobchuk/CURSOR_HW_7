
const ring1 = document.getElementById("ring_1");
const ring2 = document.getElementById("ring_2");
const ring3 = document.getElementById("ring_3");
const ring4 = document.getElementById("ring_4");
const ring5 = document.getElementById("ring_5");
const ring6 = document.getElementById("ring_6");
const ring7 = document.getElementById("ring_7");
const ring8 = document.getElementById("ring_8");

const keyA = document.getElementById("keyA");
const keyS = document.getElementById("keyS");
const keyD = document.getElementById("keyD");
const keyF = document.getElementById("keyF");
const keyG = document.getElementById("keyG");
const keyH = document.getElementById("keyH");
const keyJ = document.getElementById("keyJ");
const keyK = document.getElementById("keyK");

window.addEventListener("keydown", function (event) {
    switch (event.keyCode) {
        case 65:
            if (event.repeat) {break};
            ring1.currentTime = 0;
            ring1.play();
            keyA.style.backgroundColor="#C4FFE1";
            break;
        case 83:
            if (event.repeat) {break};
            ring2.currentTime = 0;
            ring2.play();
            keyS.style.backgroundColor="#C4FFE1";
            break;
        case 68:
            if (event.repeat) {break};
            ring3.currentTime = 0;
            ring3.play();
            keyD.style.backgroundColor="#C4FFE1";
            break;
        case 70:
            if (event.repeat) {break};
            ring4.currentTime = 0;
            ring4.play();
            keyF.style.backgroundColor="#C4FFE1";
            break;
        case 71:
            if (event.repeat) {break};
            ring5.currentTime = 0;
            ring5.play();
            keyG.style.backgroundColor="#C4FFE1";
            break;
        case 72:
            if (event.repeat) {break};
            ring6.currentTime = 0;
            ring6.play();
            keyH.style.backgroundColor="#C4FFE1";
            break;
        case 74:
            if (event.repeat) {break};
            ring7.currentTime = 0;
            ring7.play();
            keyJ.style.backgroundColor="#C4FFE1";
            break;
        case 75:
            if (event.repeat) {break};
            ring8.currentTime = 0;
            ring8.play();
            keyK.style.backgroundColor="#C4FFE1";
            break;
    }
});
window.addEventListener("keyup", function (event) {
    switch (event.keyCode) {
        case 65:
            keyA.style.backgroundColor="white";
            break;
        case 83:
            keyS.style.backgroundColor="white";
            break;
        case 68:
            keyD.style.backgroundColor="white";
            break;
        case 70:
            keyF.style.backgroundColor="white";
            break;
        case 71:
            keyG.style.backgroundColor="white";
            break;
        case 72:
            keyH.style.backgroundColor="white";
            break;
        case 74:
            keyJ.style.backgroundColor="white";
            break;
        case 75:
            keyK.style.backgroundColor="white";
            break;
    }
});