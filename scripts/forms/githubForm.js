async function Open_Github_Window() {
    let a_window = Create_A_Window("100px", "100px", "Github Repositories", "600px", "400px", true);

    if (a_window === null) return;

    menu_shown = true;
    Toggle_Start_Menu();

    let content = document.createElement("div");
    content.style.display = "grid";
    content.style.gridTemplateColumns = "25% 25% 25% 25%";
    content.style.gridAutoRows = "120px";
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

    fetch("https://api.github.com/users/rumbledot/repos")
        //.then(response => console.log(response.json()));
        .then(response => repos = response.json())
        .then(repos => repos.forEach(element => {
            let fileIcon = File_Icon_Element(element["name"], element["html_url"]);
            content.appendChild(fileIcon);
        }));
}