function Open_Files_Window() {
    let a_window = Create_A_Window("100px", "100px", "Files Explorer", "600px", "400px", true);

    if(a_window === null) return;

    let content = document.createElement("div");
    content.style.display="grid";
    content.style.gridTemplateColumns="auto auto auto auto auto auto";
    content.style.gridTemplateRows="25px auto";
    content.style.position="relative";
    content.style.width="100% -10px";
    content.style.height="350px";
    content.style.backgroundColor="white";
    content.style.color="black";
    content.style.justifyContent="stretch";
    content.style.margin = "5px 5px 5px 5px";

    content.appendChild(File_Icon_Element("CV", "./resources/documents/CV.pdf"));
    content.appendChild(File_Icon_Element("MYOB Adv API Dev", "./resources/documents/MYOB_API.pdf"));
    content.appendChild(File_Icon_Element("MYOB Adv Dev", "./resources/documents/MYOB_Developer.pdf"));
    content.appendChild(File_Icon_Element("happens", "./resources/abe.png"));

    a_window.appendChild(content);

    main_canvas.appendChild(a_window);
}

function File_Icon_Element(file_name, url) {
    let file_icon = document.createElement("div");
    file_icon.style.display="grid";
    file_icon.style.gridTemplateColumns="auto";
    file_icon.style.gridTemplateRows="auto auto";
    file_icon.style.alignContent="center";
    file_icon.style.justifyContent="center";
    file_icon.style.height="fit-content";
    file_icon.style.overflow="hidden";

    let file_icon_img = document.createElement("img");
    file_icon_img.style.gridRow="1/2"
    file_icon_img.style.justifySelf="center"
    file_icon_img.src="./resources/file.png";
    file_icon_img.alt="file";

    let file_name_text = document.createElement("span");
    file_name_text.style.gridRow="2/3"
    file_name_text.style.justifySelf="center"
    file_name_text.innerText=file_name;

    file_icon.appendChild(file_icon_img);
    file_icon.appendChild(file_name_text);

    file_icon_img.addEventListener("mouseover", function() { 
        file_icon_img.style.scale="1.2";
    });

    file_icon_img.addEventListener("mouseout", function() { 
        file_icon_img.style.scale="1";
    });

    file_icon_img.onclick = function() { 
        window.open(url);
    }

    return file_icon;
}