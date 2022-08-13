const app = document.getElementById("app");

var startMenuShown = false;
var pickedElement;
var offset;
var windowIndex = 0;

let canvasBackground = document.createElement("div");
canvasBackground.id = "canvasBackground";
app.appendChild(canvasBackground);

let developmentMode = document.createElement("span");
developmentMode.style.color = "grey";
developmentMode.innerText = "alpha version"
canvasBackground.appendChild(developmentMode);

let canvasLogo = document.createElement("img");
canvasLogo.id = "canvasLogo";
canvasLogo.src = "./resources/images/MakjOS.png";
canvasLogo.alt = "makjOS";
app.appendChild(canvasLogo);

let canvasMain = document.createElement("div");
canvasMain.id = "canvasMain";
canvasMain.style.zIndex = -990
app.appendChild(canvasMain);

let startBar = document.createElement("div");
startBar.id = "startBar";
startBar.style.backgroundColor = COLOR_START_BAR;
app.appendChild(startBar);

let startButton = document.createElement("button");
startButton.id = "startButton";
startButton.style.backgroundColor = COLOR_START_BAR;
app.appendChild(startButton);

let startButtonImage = document.createElement("img");
startButtonImage.id = "startButtonImage";
startButtonImage.src = "./resources/images/Abe.png";
startButtonImage.alt = "Abe";
startButton.appendChild(startButtonImage);

let startBarClock = document.createElement("div");
startBarClock.id = "startBarClock";
startBarClock.innerText = "12:00";
startBarClock.style.backgroundColor = COLOR_START_BAR;
app.appendChild(startBarClock);

canvasBackground.onclick = function () {
    menu_shown = true;
    Toggle_Start_Menu();
}

startButton.onclick = function () {
    Toggle_Start_Menu();
}

SetBackgroundColor(COLOR_BACKGROUND);
SetStartBarColor(COLOR_START_BAR);