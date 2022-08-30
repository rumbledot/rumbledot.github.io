function Open_About_Window() {
    let a_window = Create_A_Window("100px", "100px", "Makj'OS", "400px", "400px", true);

    if (a_window === null) return;

    menu_shown = true;
    Toggle_Start_Menu();

    let content = document.createElement("div");
    content.style.display = "grid";
    content.style.gridTemplateColumns = "auto auto auto auto";
    content.style.gridTemplateRows = "25px auto";
    content.style.position = "relative";
    content.style.width = "100% -10px";
    content.style.height = "100% -25px";
    content.style.color = "white";
    content.style.justifyContent = "stretch";
    content.style.margin = "5px 5px 5px 5px";

    let tab_one = document.createElement("button");
    tab_one.style.gridRow = "1/2";
    tab_one.style.gridColumn = "1/2";
    tab_one.style.height = "25px";
    tab_one.style.backgroundColor = "#c0c5c9";
    tab_one.className = "about_tab";
    tab_one.innerText = "Overview"

    let tab_two = document.createElement("button");
    tab_two.style.gridRow = "1/2";
    tab_two.style.gridColumn = "2/3";
    tab_two.style.height = "25px";
    tab_two.style.backgroundColor = "#c0c5c9";
    tab_two.className = "about_tab";
    tab_two.innerText = "System"

    let tab_three = document.createElement("button");
    tab_three.style.gridRow = "1/2";
    tab_three.style.gridColumn = "3/4";
    tab_three.style.height = "25px";
    tab_three.style.backgroundColor = "#c0c5c9";
    tab_three.className = "about_tab";
    tab_three.innerText = "RumbleDot"

    let tab_four = document.createElement("button");
    tab_four.style.gridRow = "1/2";
    tab_four.style.gridColumn = "4/5";
    tab_four.style.height = "25px";
    tab_four.style.backgroundColor = "#c0c5c9";
    tab_four.className = "about_tab";
    tab_four.innerText = "Coming soon"

    let tab_content = document.createElement("div");
    tab_content.style.gridRow = "2/3";
    tab_content.style.gridColumn = "1/5";
    tab_content.style.paddingTop = "5px";
    tab_content.style.color = "black";
    tab_content.style.overflowY = "auto";
    tab_content.style.maxHeight = "330px";

    content.appendChild(tab_one);
    content.appendChild(tab_two);
    content.appendChild(tab_three);
    content.appendChild(tab_four);
    content.appendChild(tab_content);

    a_window.appendChild(content);
    canvasMain.appendChild(a_window);

    tab_one.onclick = function () {
        Show_Overview_Content(tab_one, tab_content);
    }

    tab_two.onclick = function () {
        Show_System_Content(tab_two, tab_content);
    }

    tab_three.onclick = function () {
        Show_RumbleDot_Content(tab_three, tab_content);
    }

    tab_four.onclick = function () {

    }

    Show_Overview_Content(tab_one, tab_content);
}

function Show_Overview_Content(tab, tab_content) {
    Reset_Tab_Color();
    tab.style.backgroundColor = "#a3a3a3";
    tab_content.innerHTML = "<h4>Makj'OS ver.0.1a</h4>" +
        "<p>Makj'OS is my website 'Operating System'.</p>" +
        "<p>Derived from Indonesian slang mak'nyus that means awesome/delicuous.</p>" +
        "<p>The design was inspired by the 90s website aesthetics. The wildest decade where website still alive and has personality. Freedom to be as tacky as you can without being judged.</p>";
}

function Show_System_Content(tab, tab_content) {
    Reset_Tab_Color();
    tab.style.backgroundColor = "#a3a3a3";
    tab_content.innerHTML = "This Operating system is powered by:" +
        "<ul>" +
        "<li>Imajination</li> " +
        "<li>Creativity</li> " +
        "<li>Passion in technology</li> " +
        "<li>Experience</li> " +
        "</ul> ";
}

function Show_RumbleDot_Content(tab, tab_content) {
    Reset_Tab_Color();
    tab.style.backgroundColor = "#a3a3a3";
    tab_content.innerHTML = "What or Who is Rumbledot?" +
        "<p>RumbleDot is acronymn of Neil Rumble and Dot Wilson. They are proud Invercargillite and our friend. Who first open their home and welcome us in New Zealand.</p>" +
        "<p>The name used for the first time for my fictional Game Development company. Created for my Post Graduate paper.</p> " +
        "<p>They are very pleased that I choose their beloved city as the site." +
        "And very hopeful, the business will someday start.</p><span>Pst.. This is still my long-term goal. :)</span>";
}

function Show_Tab2_Content(tab, tab_content) {
    Reset_Tab_Color();
    tab.style.backgroundColor = "#a3a3a3";
    tab_content.innerHTML = "";
}

function Show_Tab1_Content(tab, tab_content) {
    Reset_Tab_Color();
    tab.style.backgroundColor = "#a3a3a3";
    tab_content.innerHTML = "";
}

function Reset_Tab_Color() {
    elements = document.getElementsByClassName("about_tab");
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor = "#c0c5c9";
        elements[i].style.color = "black";
    }
}