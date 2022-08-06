const app = document.getElementById("app");

var startMenuShown = false;
var pickedElement;
var offset;
var windowIndex = 0;

let canvasBackground = document.createElement("div");
canvasBackground.id = "canvasBackground";
app.appendChild(canvasBackground);

let canvasLogo = document.createElement("img");
canvasLogo.id = "canvasLogo";
canvasLogo.src = "./resources/images/MakjOS.png";
canvasLogo.alt = "makjOS";
app.appendChild(canvasLogo);

let canvasMain = document.createElement("div");
canvasMain.id = "canvasMain";
app.appendChild(canvasMain);

let startBar = document.createElement("div");
startBar.id = "startBar";
app.appendChild(startBar);

let startButton = document.createElement("button");
startButton.id = "startButton";
app.appendChild(startButton);

let startButtonImage = document.createElement("img");
startButtonImage.id = "startButtonImage";
startButtonImage.src = "./resources/images/Abe.png";
startButtonImage.alt = "Abe";
startButton.appendChild(startButtonImage);

let startBarClock = document.createElement("div");
startBarClock.id = "startBarClock";
startBarClock.innerText = "12:00";
app.appendChild(startBarClock);

let startMenu = document.createElement("div");
startMenu.id = "startMenu";
app.appendChild(startMenu);

let startMenuBanner = document.createElement("div");
startMenuBanner.id = "startMenuBanner";
startMenu.appendChild(startMenuBanner);

let startMenuItems = document.createElement("ul");
startMenuItems.id = "startMenuItems";
startMenuItems.innerHTML = "<li id='menuAbout' class='startMenuItem'>About Abe</li>" +
    "<li class='startMenuItem menuLineBreak'></li>" +
    "<li id='menuDisplaySettings' class='startMenuItem'>Display Settings</li>";
startMenu.appendChild(startMenuItems);

let iconFolder = document.createElement("div");
iconFolder.id = "iconFolder";
iconFolder.className = "canvasMainItem";
iconFolder.innerHTML = "<img class='iconImage' src='./resources/images/folder.png' alt='Folders'>" +
    "<span class='iconText'>Files</span>";
canvasMain.appendChild(iconFolder);

canvasBackground.onclick = function (e) {
    menu_shown = true;
    Toggle_Start_Menu();
}

startButton.onclick = function () {
    Toggle_Start_Menu();
}

iconFolder.onclick = function () {
    Open_Folder_Window();
}

let menuAbout = document.getElementById("menuAbout");
menuAbout.onclick = function () {
    Open_About_Window();
}

let menuDisplaySettings = document.getElementById("menuDisplaySettings");
menuDisplaySettings.onclick = function () {
    Open_Settings_Window();
}

Update_Clock();
setInterval(() => { Update_Clock(); }, 60000);

function Toggle_Start_Menu() {
    let startMenu = document.getElementById("startMenu");

    if (startMenuShown) {
        startMenu.style.display = "none";
        startMenu.classList.remove("start_menu_grow");
        startMenu.classList.add("start_menu_shrink")
        startMenuShown = false;
    } else {
        startMenu.style.display = "block";
        startMenu.classList.add("start_menu_grow");
        startMenu.classList.remove("start_menu_shrink")
        startMenuShown = true;
    }
}

function Update_Clock() {
    let current_date = new Date();
    let current_time = `${current_date.toLocaleDateString("en-US", { weekday: 'short' })} ${current_date.getHours()}:${current_date.getMinutes()}`;
    document.getElementById("startBarClock").innerText = current_time;
}

SetBackgroundColor(COLOR_BACKGROUND);
SetStartBarColor(COLOR_START_BAR);