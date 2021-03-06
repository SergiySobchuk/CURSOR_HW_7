
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
            keyA.style.boxShadow="0 0 5px 6px rgba(183, 253, 248, 0.5)";
            keyA.style.backgroundColor="#C4FFE1";
            break;
        case 83:
            if (event.repeat) {break};
            ring2.currentTime = 0;
            ring2.play();
            keyS.style.boxShadow="0 0 5px 6px rgba(183, 253, 248, 0.5)";
            keyS.style.backgroundColor="#C4FFE1";
            break;
        case 68:
            if (event.repeat) {break};
            ring3.currentTime = 0;
            ring3.play();
            keyD.style.boxShadow="0 0 5px 6px rgba(183, 253, 248, 0.5)";
            keyD.style.backgroundColor="#C4FFE1";
            break;
        case 70:
            if (event.repeat) {break};
            ring4.currentTime = 0;
            ring4.play();
            keyF.style.boxShadow="0 0 5px 6px rgba(183, 253, 248, 0.5)";
            keyF.style.backgroundColor="#C4FFE1";
            break;
        case 71:
            if (event.repeat) {break};
            ring5.currentTime = 0;
            ring5.play();
            keyG.style.boxShadow="0 0 5px 6px rgba(183, 253, 248, 0.5)";
            keyG.style.backgroundColor="#C4FFE1";
            break;
        case 72:
            if (event.repeat) {break};
            ring6.currentTime = 0;
            ring6.play();
            keyH.style.boxShadow="0 0 5px 6px rgba(183, 253, 248, 0.5)";
            keyH.style.backgroundColor="#C4FFE1";
            break;
        case 74:
            if (event.repeat) {break};
            ring7.currentTime = 0;
            ring7.play();
            keyJ.style.boxShadow="0 0 5px 6px rgba(183, 253, 248, 0.5)";
            keyJ.style.backgroundColor="#C4FFE1";
            break;
        case 75:
            if (event.repeat) {break};
            ring8.currentTime = 0;
            ring8.play();
            keyK.style.boxShadow="0 0 5px 6px rgba(183, 253, 248, 0.5)";
            keyK.style.backgroundColor="#C4FFE1";
            break;
    }
});
window.addEventListener("keyup", function (event) {
    switch (event.keyCode) {
        case 65:
            keyA.style.boxShadow="0 0 5px 3px rgba(250, 250, 250, 0.5)";
            keyA.style.backgroundColor="white";
            break;
        case 83:
            keyS.style.boxShadow="0 0 5px 3px rgba(250, 250, 250, 0.5)";
            keyS.style.backgroundColor="white";
            break;
        case 68:
            keyD.style.boxShadow="0 0 5px 3px rgba(250, 250, 250, 0.5)";
            keyD.style.backgroundColor="white";
            break;
        case 70:
            keyF.style.boxShadow="0 0 5px 3px rgba(250, 250, 250, 0.5)";
            keyF.style.backgroundColor="white";
            break;
        case 71:
            keyG.style.boxShadow="0 0 5px 3px rgba(250, 250, 250, 0.5)";
            keyG.style.backgroundColor="white";
            break;
        case 72:
            keyH.style.boxShadow="0 0 5px 3px rgba(250, 250, 250, 0.5)";
            keyH.style.backgroundColor="white";
            break;
        case 74:
            keyJ.style.boxShadow="0 0 5px 3px rgba(250, 250, 250, 0.5)";
            keyJ.style.backgroundColor="white";
            break;
        case 75:
            keyK.style.boxShadow="0 0 5px 3px rgba(250, 250, 250, 0.5)";
            keyK.style.backgroundColor="white";
            break;
    }
});

keyA.addEventListener("mousedown", function (event) {
    ring1.currentTime = 0;
    ring1.play();
    keyA.style.backgroundColor="#C4FFE1";
    keyA.style.boxShadow="0 0 5px 6px rgba(183, 253, 248, 0.5)";
});
keyA.addEventListener("mouseup", function (event) {
    keyA.style.boxShadow="0 0 5px 3px rgba(250, 250, 250, 0.5)";
    keyA.style.backgroundColor="white";
});
//*********************
keyS.addEventListener("mousedown", function (event) {
    ring2.currentTime = 0;
    ring2.play();
    keyS.style.boxShadow="0 0 5px 6px rgba(183, 253, 248, 0.5)";
    keyS.style.backgroundColor="#C4FFE1";
});
keyS.addEventListener("mouseup", function (event) {
    keyS.style.boxShadow="0 0 5px 3px rgba(250, 250, 250, 0.5)";
    keyS.style.backgroundColor="white";
});
//*********************
keyD.addEventListener("mousedown", function (event) {
    ring3.currentTime = 0;
    ring3.play();
    keyD.style.boxShadow="0 0 5px 6px rgba(183, 253, 248, 0.5)";
    keyD.style.backgroundColor="#C4FFE1";
});
keyD.addEventListener("mouseup", function (event) {
    keyD.style.boxShadow="0 0 5px 3px rgba(250, 250, 250, 0.5)";
    keyD.style.backgroundColor="white";
});
//*********************
keyF.addEventListener("mousedown", function (event) {
    ring4.currentTime = 0;
    ring4.play();
    keyF.style.boxShadow="0 0 5px 6px rgba(183, 253, 248, 0.5)";
    keyF.style.backgroundColor="#C4FFE1";
});
keyF.addEventListener("mouseup", function (event) {
    keyF.style.boxShadow="0 0 5px 3px rgba(250, 250, 250, 0.5)";
    keyF.style.backgroundColor="white";
});
//*********************
keyG.addEventListener("mousedown", function (event) {
    ring5.currentTime = 0;
    ring5.play();
    keyG.style.boxShadow="0 0 5px 6px rgba(183, 253, 248, 0.5)";
    keyG.style.backgroundColor="#C4FFE1";
});
keyG.addEventListener("mouseup", function (event) {
    keyG.style.boxShadow="0 0 5px 3px rgba(250, 250, 250, 0.5)";
    keyG.style.backgroundColor="white";
});
//*********************
keyH.addEventListener("mousedown", function (event) {
    ring6.currentTime = 0;
    ring6.play();
    keyH.style.boxShadow="0 0 5px 6px rgba(183, 253, 248, 0.5)";
    keyH.style.backgroundColor="#C4FFE1";
});
keyH.addEventListener("mouseup", function (event) {
    keyH.style.boxShadow="0 0 5px 3px rgba(250, 250, 250, 0.5)";
    keyH.style.backgroundColor="white";
});
//*********************
keyJ.addEventListener("mousedown", function (event) {
    ring7.currentTime = 0;
    ring7.play();
    keyJ.style.boxShadow="0 0 5px 6px rgba(183, 253, 248, 0.5)";
    keyJ.style.backgroundColor="#C4FFE1";
});
keyJ.addEventListener("mouseup", function (event) {
    keyJ.style.boxShadow="0 0 5px 3px rgba(250, 250, 250, 0.5)";
    keyJ.style.backgroundColor="white";
});
//*********************
keyK.addEventListener("mousedown", function (event) {
    ring8.currentTime = 0;
    ring8.play();
    keyK.style.boxShadow="0 0 5px 6px rgba(183, 253, 248, 0.5)";
    keyK.style.backgroundColor="#C4FFE1";
});
keyK.addEventListener("mouseup", function (event) {
    keyK.style.boxShadow="0 0 5px 3px rgba(250, 250, 250, 0.5)";
    keyK.style.backgroundColor="white";
});