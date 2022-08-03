function Create_About_Window() {
    let a_window = Create_A_Window("100px", "100px", "About", "400px", "400px", true);

    if(a_window === null) return;

    let content = document.createElement("div");
    content.style.display="grid";
    content.style.gridTemplateColumns="auto-fit auto-fit auto-fit auto-fit";
    content.style.gridTemplateRows="25px auto";
    content.style.position="relative";
    content.style.width="100% -10px";
    content.style.height="100% -25px";
    content.style.color="white";
    content.style.justifyContent="stretch";
    content.style.margin = "5px 5px 5px 5px";

    let tab_one = document.createElement("button");
    tab_one.style.gridRow="1/2";
    tab_one.style.gridColumn="1/2";
    tab_one.style.height="25px";
    tab_one.style.backgroundColor="#c0c5c9";
    tab_one.className="about_tab";
    tab_one.innerText="I am"

    let tab_two = document.createElement("button");
    tab_two.style.gridRow="1/2";
    tab_two.style.gridColumn="2/3";
    tab_two.style.height="25px";
    tab_two.style.backgroundColor="#c0c5c9";
    tab_two.className="about_tab";
    tab_two.innerText="Skill"

    let tab_three = document.createElement("button");
    tab_three.style.gridRow="1/2";
    tab_three.style.gridColumn="3/4";
    tab_three.style.height="25px";
    tab_three.style.backgroundColor="#c0c5c9";
    tab_three.className="about_tab";
    tab_three.innerText="Experience"

    let tab_four = document.createElement("button");
    tab_four.style.gridRow="1/2";
    tab_four.style.gridColumn="4/5";
    tab_four.style.height="25px";
    tab_four.style.backgroundColor="#c0c5c9";
    tab_four.className="about_tab";
    tab_four.innerText="Hobby"

    let tab_content = document.createElement("div");
    tab_content.style.gridRow="2/3";
    tab_content.style.gridColumn="1/5";
    tab_content.style.paddingTop="5px";
    tab_content.innerText="Love life. Into programming. Proficient .NET C# developer. Wanting to become cloud engineer.";

    content.appendChild(tab_one);
    content.appendChild(tab_two);
    content.appendChild(tab_three);
    content.appendChild(tab_four);
    content.appendChild(tab_content);

    a_window.appendChild(content);
    main_canvas.appendChild(a_window);

    tab_one.onclick = function() {
        Show_IAM_Content(tab_one, tab_content);
    }

    tab_two.onclick = function() {
        Show_Skill_Content(tab_two, tab_content);
    }

    tab_three.onclick = function() {
        Show_Exp_Content(tab_three, tab_content);
    }

    tab_four.onclick = function() {
        Show_Hobby_Content(tab_four, tab_content);
    }
}

function Show_IAM_Content(tab, tab_content) {
    Reset_Tab_Color();
    tab.style.backgroundColor="#a3a3a3";
    tab_content.innerText="Love life. Enjoy being in the open road and fresh outdoor air. Into game/software development. Proficient .NET C# developer. Wanting to become cloud engineer. Gamer!";
}

function Show_Skill_Content(tab, tab_content) {
    Reset_Tab_Color();
    tab.style.backgroundColor="#a3a3a3";
    tab_content.innerHTML="<ul><li>.NET C#</li><li>.NET VB</li><li>MSSQL</li><li>PHP</li><li>python</li></ul>";
}

function Show_Exp_Content(tab, tab_content) {
    Reset_Tab_Color();
    tab.style.backgroundColor="#a3a3a3";
    tab_content.innerHTML="<ul><li>Avenir</li><li>Very Impressive Soft</li></ul>"
}

function Show_Hobby_Content(tab, tab_content) {
    Reset_Tab_Color();
    tab.style.backgroundColor="#a3a3a3";
    tab_content.innerHTML="<ul><li>Tai Chi</li><li>Traveling</li></ul>"
}

function Reset_Tab_Color() {
    elements = document.getElementsByClassName("about_tab");
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor="#c0c5c9";
        elements[i].style.color="black";
    }
}