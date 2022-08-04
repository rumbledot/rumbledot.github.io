const main_canvas = document.getElementById("main_canvas");
const start_button = document.getElementById("start_button");

const icon_files = document.getElementById("icon_folder");

const menu_about = document.getElementById("menu_about");

var menu_shown = false;
var pickedElement;
var offset;
var windowIndex = 0;

main_canvas.onclick = function() {
    menu_shown = true;
    Toggle_Start_Menu();
}

start_button.onclick = function() {
    Toggle_Start_Menu();   
}

icon_files.onclick = function() {
    Open_Files_Window();
}

menu_about.onclick = function() {
    Open_About_Window();
}