
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

// document.addEventListener("keydown", function (event) {
//     if(event.keyCode === 65){
//         console.log(event.keyCode);
//         ring1.play();
//     } else if (event.keyCode === 83){
//         console.log(event.keyCode);
//         ring2.play();
//     }



    switch (event.keyCode) {
        case 65:
            console.log(event.keyCode);
            ring1.play();
            break;
        case 83:
            console.log(event.keyCode);
            ring2.play();
            break;
        case 68:
            console.log(event.keyCode);
            ring3.play();
            break;
        case 70:
            console.log(event.keyCode);
            ring4.play();
            break;
        case 71:
            console.log(event.keyCode);
            ring5.play();
            break;
        case 72:
            console.log(event.keyCode);
            ring6.play();
            break;
        case 74:
            console.log(event.keyCode);
            ring7.play();
            break;
        case 75:
            console.log(event.keyCode);
            ring8.play();
            break;
    }
});
