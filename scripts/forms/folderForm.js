function Open_Folder_Window() {
    let a_window = Create_A_Window("100px", "100px", "File Cabinet", "600px", "400px", true);

    if (a_window === null) return;

    menu_shown = true;
    Toggle_Start_Menu();

    let content = document.createElement("div");
    content.style.display = "grid";
    content.style.gridTemplateColumns = "25% 25% 25% 25%";
    content.style.position = "relative";
    content.style.width = "100% -10px";
    content.style.height = "340px";
    content.style.backgroundColor = "white";
    content.style.color = "black";
    content.style.justifyContent = "stretch";
    content.style.margin = "5px 5px 5px 5px";
    content.style.overflowY = "auto";

    a_window.appendChild(content);

    let footers = document.createElement("div");
    footers.id = "fileDescription";
    footers.display = "relative";
    footers.style.height = "25px";
    footers.style.width = "calc(100% - 6px)";
    footers.style.bottom = "2px";
    footers.style.right = "2px";
    footers.style.textAlign = "right";
    footers.style.overflow = "hidden";

    a_window.appendChild(footers);

    canvasMain.appendChild(a_window);

    let fileIcon = File_Icon_Element("CV", "./resources/documents/CV.pdf");
    content.appendChild(fileIcon);
    fileIcon = File_Icon_Element("MYOB Adv API Dev", "./resources/documents/MYOB_API.pdf");
    content.appendChild(fileIcon);
    fileIcon = File_Icon_Element("MYOB Adv Dev", "./resources/documents/MYOB_Developer.pdf");
    content.appendChild(fileIcon);
}

function File_Icon_Element(iconText, url) {
    let file_icon = document.createElement("div");
    file_icon.style.display = "grid";
    file_icon.style.gridTemplateColumns = "auto";
    file_icon.style.gridTemplateRows = "auto auto";
    file_icon.style.alignContent = "center";
    file_icon.style.justifyContent = "center";
    file_icon.style.height = "fit-content";
    file_icon.style.overflow = "hidden";

    let file_icon_img = document.createElement("img");
    file_icon_img.className = "iconImage";
    file_icon_img.style.gridRow = "1/2";
    file_icon_img.style.justifySelf = "center";
    file_icon_img.src = "./resources/images/file.png";
    file_icon_img.alt = "file";

    let file_name_text = document.createElement("span");
    file_name_text.className = "iconText";
    file_name_text.style.gridRow = "2/3";
    file_name_text.style.width = "100px";
    file_name_text.style.textAlign = "center";
    file_name_text.style.justifySelf = "center";
    file_name_text.style.overflow = "hidden";
    file_name_text.innerText = iconText;

    file_icon.appendChild(file_icon_img);
    file_icon.appendChild(file_name_text);

    file_icon_img.addEventListener("mouseover", function () {
        document.getElementById("fileDescription").innerText = iconText;
        file_icon_img.style.scale = "1.2";
    });

    file_icon_img.addEventListener("mouseout", function () {
        document.getElementById("fileDescription").innerText = "";
        file_icon_img.style.scale = "1";
    });

    file_icon_img.onclick = function () {
        window.open(url);
    }

    return file_icon;
}