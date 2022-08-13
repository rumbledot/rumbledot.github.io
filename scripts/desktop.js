let iconFolder = document.createElement("div");
iconFolder.id = "iconFolder";
iconFolder.className = "canvasMainItem";
iconFolder.innerHTML = "<img class='iconImage' src='./resources/images/folder.png' alt='Folders'>" +
    "<span class='iconText'>Files</span>";
canvasMain.appendChild(iconFolder);

iconFolder.onclick = function () {
    Open_Folder_Window();
}

let iconGithub = document.createElement("div");
iconGithub.id = "iconFolder";
iconGithub.className = "canvasMainItem";
iconGithub.innerHTML = "<img class='iconImage' src='./resources/images/folder.png' alt='Folders'>" +
    "<span class='iconText'>Github</span>";
canvasMain.appendChild(iconGithub);

iconGithub.onclick = function () {
    Open_Github_Window();
}