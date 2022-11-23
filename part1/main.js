var mainDiv = document.getElementById("main");
var congratsDiv = document.getElementById("congrats");
var yesBtn = document.getElementById("yesBtn");
yesBtn.onclick = onClickyes;
var noBtn = document.getElementById("noBtn");
noBtn.onclick = onClickno;
noBtn.onmouseover = onMouseOverNo;

var moveTo = ["left", "right", "up", "down"]

const minTop = 20;
const maxTop = 80;
const minLeft = 20;
const maxLeft = 80;

var initPos = noBtn.getBoundingClientRect();

function onClickyes() {
    console.log("Clicked Yes");
    //show congratulation div
    mainDiv.style.visibility = "hidden";
    congratsDiv.style.visibility = "visible";
}

function onClickno() {
    console.log("Clicked No");

    //return position to default
    noBtn.style.top = initPos.top;
    noBtn.style.left = initPos.left;
    //show div of wrong answer try again

}

function onMouseOverNo() {
    console.log("Mouse over No Button");
    //change the style to absolute
    //Move position to random
    // noBtn.style.position = "absolute";

    
    let topPos = noBtn.style.top;
    let leftPos = noBtn.style.left;
    let dir = moveTo[Math.floor(Math.random * moveTo.length)]
    topPos = Math.floor(Math.random() * 9) * 10;
    leftPos = Math.floor(Math.random() * 9) * 10;
    switch (dir) {
        case "left":
            
            break;
        case "right":
        
            break;
        case "up":
        
            break;
        case "down":
        
            break;
        default:
            break;
    }

    console.log(topPos);
    noBtn.style.top = topPos.toString().concat("%");
    noBtn.style.left = leftPos.toString().concat("%");
}