function Toggle_Start_Menu() {
    let start_menu = document.getElementById("start_menu");

    if(menu_shown) {
        start_menu.style.display="none";
        start_menu.classList.remove("start_menu_grow");
        start_menu.classList.add("start_menu_shrink")
        menu_shown = false;
    } else {
        start_menu.style.display="block";
        start_menu.classList.add("start_menu_grow");
        start_menu.classList.remove("start_menu_shrink")
        menu_shown = true;
    }
}

function Create_A_Window(x, y, title, w, h, unique) {
    if (unique === true) {
        let existing = document.getElementById(title);
        if (existing != undefined) return null;
    }

    Reset_Window_Bar_Color();

    let a_window = document.createElement("div");
    a_window.style.display="block";
    a_window.style.position="absolute";
    a_window.style.width=w;
    a_window.style.height=h;
    a_window.style.top=x;
    a_window.style.left=y;
    a_window.style.backgroundColor="#c0c5c9";
    a_window.id=title;
    a_window.style.zIndex=0;
    windowIndex++;

    let a_window_bar = document.createElement("button");
    a_window_bar.style.display="block";
    a_window_bar.style.position="relative";
    a_window_bar.style.width="90%";
    a_window_bar.style.height="25px";
    a_window_bar.style.backgroundColor="#0601B2";
    a_window_bar.style.color="white";
    a_window_bar.className="window_bar";
    a_window_bar.innerText=title;

    let a_window_close = document.createElement("button");
    a_window_close.style.display="block";
    a_window_close.style.position="absolute";
    a_window_close.style.width="10%";
    a_window_close.style.height="25px";
    a_window_close.style.right="0px";
    a_window_close.style.top="0px";
    a_window_close.style.backgroundColor="#c0c5c9";
    a_window_close.style.color="black";
    a_window_close.className="window_bar_close";
    a_window_close.innerText="X";
    
    a_window.appendChild(a_window_bar);
    a_window.appendChild(a_window_close);

    a_window_close.onclick = function() {
        Close_Window(a_window);
    }

    a_window.onclick = function() {
        Pick_Window(a_window);
    }

    return a_window;
}

function Pick_Window(clickedElement) {
    Reset_Window_Bar_Color();
    pickedElement = clickedElement;
    let window_bar = pickedElement.childNodes[0];
    window_bar.style.backgroundColor="#0601B2";
    window_bar.style.color="white";
    
    pickedElement.addEventListener("mousedown", Mouse_Down, false);
    window.addEventListener("mouseup", Mouse_Up, false);
}

function Close_Window(clickedElement) {
    clickedElement.removeEventListener("onclick", Pick_Window);
    main_canvas.removeChild(clickedElement);
}

function Reset_Window_Bar_Color() {
    elements = document.getElementsByClassName("window_bar");
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor="#9ca3a8";
        elements[i].style.color="black";
    }
}

function Mouse_Up() { 
    window.removeEventListener("mousemove", Mouse_Move, true); 
}

function Mouse_Down(e) {
    offset = {
        left: e.pageX - Real_Offset(pickedElement).left,
        top: e.pageY - Real_Offset(pickedElement).top
    };
    window.addEventListener("mousemove", Mouse_Move, true);
}

function Mouse_Move(e) {
    // REUSE THE OFFSET HERE
    let maxW = window.innerWidth - pickedElement.offsetWidth;
    let maxH = window.innerHeight- pickedElement.offsetHeight;
    let left = e.pageX - offset.left;
    if (left <= 0) left = 0;
    if (left > maxW) left = maxW;
    let top = e.pageY - offset.top;
    if (top <= 0) top = 0;
    if (top > maxH) top = maxH;

    pickedElement.style.left  = left + "px";
    pickedElement.style.top = top + "px";
}

function Real_Offset(elem) {
    let top = 0, left = 0;
    while (elem) {
        top = top + parseInt(elem.offsetTop, 10);
        left = left + parseInt(elem.offsetLeft, 10);
        elem = elem.offsetParent;
    }
    return { top: top, left: left };
}