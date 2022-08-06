function Open_About_Window() {
    let a_window = Create_A_Window("100px", "100px", "About Abe", "400px", "400px", true);

    if (a_window === null) return;

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
    tab_one.innerText = "I am"

    let tab_two = document.createElement("button");
    tab_two.style.gridRow = "1/2";
    tab_two.style.gridColumn = "2/3";
    tab_two.style.height = "25px";
    tab_two.style.backgroundColor = "#c0c5c9";
    tab_two.className = "about_tab";
    tab_two.innerText = "Skill"

    let tab_three = document.createElement("button");
    tab_three.style.gridRow = "1/2";
    tab_three.style.gridColumn = "3/4";
    tab_three.style.height = "25px";
    tab_three.style.backgroundColor = "#c0c5c9";
    tab_three.className = "about_tab";
    tab_three.innerText = "Experience"

    let tab_four = document.createElement("button");
    tab_four.style.gridRow = "1/2";
    tab_four.style.gridColumn = "4/5";
    tab_four.style.height = "25px";
    tab_four.style.backgroundColor = "#c0c5c9";
    tab_four.className = "about_tab";
    tab_four.innerText = "Hobby"

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
        Show_IAM_Content(tab_one, tab_content);
    }

    tab_two.onclick = function () {
        Show_Skill_Content(tab_two, tab_content);
    }

    tab_three.onclick = function () {
        Show_Exp_Content(tab_three, tab_content);
    }

    tab_four.onclick = function () {
        Show_Hobby_Content(tab_four, tab_content);
    }
}

function Show_IAM_Content(tab, tab_content) {
    Reset_Tab_Color();
    tab.style.backgroundColor = "#a3a3a3";
    tab_content.innerHTML = "<p>Hailed from tropical island of Java. Abe sets out for new adventure in New Zealand.</p>" +
        "<p>An intermediate level Software Developer. Ready to level up the skill. Killing bugs, sort out complicated hard to read code, re-configure stoney monolithic architecture, updating legacy codes and working with queries and learning new languages.</p>" +
        "<p>Love traveling the New Zealand roads, enjoying fresh outdoor air and sight.</p>" +
        "<p>Abe like Tai Chi, a bit of hiking and biking and swimming.</p>" +
        "<p>And playing good PC games especially building management, tactics and FPS on free time.</p>" +
        "<p>Hailed from tropical island of Java. Abe sets out for new adventure in New Zealand.</p>" +
        "<p>An intermediate level Software Developer. Ready to level up the skill. Killing bugs, sort out complicated hard to read code, re-configure stoney monolithic architecture, updating legacy codes and working with queries and learning new languages.</p>" +
        "<p>Love traveling the New Zealand roads, enjoying fresh outdoor air and sight.</p>" +
        "<p>Abe like Tai Chi, a bit of hiking and biking and swimming.</p>" +
        "<p>And playing good PC games especially building management, tactics and FPS on free time.</p>"
}

function Show_Skill_Content(tab, tab_content) {
    Reset_Tab_Color();
    tab.style.backgroundColor = "#a3a3a3";
    tab_content.innerHTML = "<ul><li>.NET C#</li><li>.NET VB</li><li>MSSQL</li><li>PHP</li><li>python</li></ul>";
}

function Show_Exp_Content(tab, tab_content) {
    Reset_Tab_Color();
    tab.style.backgroundColor = "#a3a3a3";
    tab_content.innerHTML = "<ol>" +
        "<li>Very Impressive Software</li>" +
        "<p>Software Developer</p>" +
        "<span>2020 - NOW</span>" +
        "<p>Specialises in MYOB product integration app development. Very Impressive is now part of Kilimanjaro Consulting with offices in Australia and New Zealand.</p>" +
        "<p>My role including support and development.</p>" +
        "<p>I enjoy working in this small team and know each other well. I'm also quite get along well with clients that I support.</p>" +
        "<p>For development we use:</p>" +
        "<ul><li>.NET Framework</li>" +
        "<li>.NET Core</li>" +
        "<li>MSSQL</li>" +
        "<li>.NET C# and VB</li>" +
        "</ul><hr/>" +
        "<li>Avenir Technology</li>" +
        "<p>Inter Software Developer</p>" +
        "<span>2019 - 2020</span>" +
        "<p>Close knit Start up company growing out of its Start-Up phase. Avenir is a global developer of post-trade Financial Market Infrastructure solutions.</p>" +
        "<p>I learn working in a team environment while learning software versioning and secure development best practices.</p>" +
        "<p>The technologies that used:</p>" +
        "<ul><li>PERL</li>" +
        "<li>PostgreSQL</li>" +
        "<li>PHP</li>" +
        "<li>JavaScript</li>" +
        "<li>GIT</li>" +
        "<li>Bash script</li>" +
        "</ul>" +
        "<hr/>" +
        "</ol>";
}

function Show_Hobby_Content(tab, tab_content) {
    Reset_Tab_Color();
    tab.style.backgroundColor = "#a3a3a3";
    tab_content.innerHTML = "<ul><li>Tai Chi</li><li>Traveling</li></ul>"
}

function Reset_Tab_Color() {
    elements = document.getElementsByClassName("about_tab");
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor = "#c0c5c9";
        elements[i].style.color = "black";
    }
}