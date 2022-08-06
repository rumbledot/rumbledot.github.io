var COLOR_BACKGROUND = localStorage.getItem("color_background");
if (COLOR_BACKGROUND === null || COLOR_BACKGROUND === undefined) COLOR_BACKGROUND = "#00adff"; //#97c93f

var COLOR_START_BAR = localStorage.getItem("color_start_bar");
if (COLOR_START_BAR === null || COLOR_START_BAR === undefined) COLOR_START_BAR = "#c0c5c9";

var COLOR_WINDOW_BG = localStorage.getItem("color_window_bg");
if (COLOR_WINDOW_BG === null || COLOR_WINDOW_BG === undefined) COLOR_WINDOW_BG = "#c0c5c9";

var COLOR_WINDOW_BAR = localStorage.getItem("color_window_bar");
if (COLOR_WINDOW_BAR === null || COLOR_WINDOW_BAR === undefined) COLOR_WINDOW_BAR = "#0601B2";

var COLOR_WINDOW_BAR_TEXT = localStorage.getItem("color_window_bar_text");
if (COLOR_WINDOW_BAR_TEXT === null || COLOR_WINDOW_BAR_TEXT === undefined) COLOR_WINDOW_BAR_TEXT = "white";

var COLOR_WINDOW_BAR_INACTIVE = localStorage.getItem("color_window_bar_inactive");
if (COLOR_WINDOW_BAR_INACTIVE === null || COLOR_WINDOW_BAR_INACTIVE === undefined) COLOR_WINDOW_BAR_INACTIVE = "#9ca3a8";

var COLOR_WINDOW_BAR_TEXT_INACTIVE = localStorage.getItem("color_window_bar_text_inactive");
if (COLOR_WINDOW_BAR_TEXT_INACTIVE === null || COLOR_WINDOW_BAR_TEXT_INACTIVE === undefined) COLOR_WINDOW_BAR_TEXT_INACTIVE = "white";

var COLOR_HIGHLIGHT = localStorage.getItem("color_highlight");
if (COLOR_HIGHLIGHT === null || COLOR_HIGHLIGHT === undefined) COLOR_HIGHLIGHT = "#0601B2";

var COLOR_HIGHLIGHT_TEXT = localStorage.getItem("color_highlight_text");
if (COLOR_HIGHLIGHT_TEXT === null || COLOR_HIGHLIGHT_TEXT === undefined) COLOR_HIGHLIGHT_TEXT = "white";

function SetBackgroundColor(colorName) {
    let bg = document.getElementById("canvasBackground");
    bg.style.backgroundColor = colorName;
}

function SetStartBarColor(colorName) {
    let bar = document.getElementById("startBar");
    bar.style.backgroundColor = colorName;
}

function SetElementIDColor(id, colorName) {
    let element = document.getElementById(id);
    element.style.backgroundColor = colorName;
}

function SetElementColor(element, colorName) {
    element.style.backgroundColor = colorName;
}