let startMenu = document.createElement("div");
startMenu.id = "startMenu";
app.appendChild(startMenu);

let startMenuBanner = document.createElement("div");
startMenuBanner.id = "startMenuBanner";
startMenu.appendChild(startMenuBanner);

let startMenuItems = document.createElement("ul");
startMenuItems.id = "startMenuItems";
startMenuItems.innerHTML = "<li id='menuAbout' class='startMenuItem'><h3>Abe</h3></li>" +
    "<li class='startMenuItem menuLineBreak'></li>" +
    "<li id='menuDisplaySettings' class='startMenuItem'>Display Settings</li>" +
    "<li id='menuAboutMakjos' class='startMenuItem'>About Makj'OS</li>";
startMenu.appendChild(startMenuItems);

let menuAbout = document.getElementById("menuAbout");
menuAbout.onclick = function () {
    Open_Abe_Window();
}

let menuDisplaySettings = document.getElementById("menuDisplaySettings");
menuDisplaySettings.onclick = function () {
    Open_Settings_Window();
}

let menuAboutMakjos = document.getElementById("menuAboutMakjos");
menuAboutMakjos.onclick = function () {
    Open_About_Window();
}