const main_canvas = document.getElementById("main_canvas");
const start_button = document.getElementById("start_button");

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

menu_about.onclick = function() {
    Create_About_Window();
}