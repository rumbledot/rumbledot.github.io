function Open_Settings_Window() {
    let a_window = Create_A_Window("10px", "10px", "Display Settings", "600px", "400px", true);

    if (a_window === null) return;

    Toggle_Start_Menu();

    let content = document.createElement("div");
    content.style.display = "grid";
    content.style.gridTemplateRows = "20px 30px 30px 30px 30px";
    content.style.position = "relative";
    content.style.width = "calc(100% -10px)";
    content.style.height = "calc(100% -25px)";
    content.style.color = "white";
    content.style.justifyContent = "stretch";
    content.style.margin = "5px 5px 5px 5px";

    content.appendChild(CreateColorPicker(canvasBackground, "Background", "#00adff"));
    content.appendChild(CreateColorPickerID(COLOR_WINDOW_BAR, "Window Bar", "#00adff"));

    a_window.appendChild(content);
    canvasMain.appendChild(a_window);
}

function CreateColorPicker(targetElement, targetElementName, currentValue) {
    let colorPicker = document.createElement("div");
    colorPicker.style.display = "grid";
    colorPicker.style.gridTemplateColumns = "20px 150px 50px 50px 50px ";
    colorPicker.style.alignContent = "center";
    colorPicker.style.justifyContent = "center";
    colorPicker.style.height = "fit-content";

    let colorPreview = document.createElement("div");
    colorPreview.style.gridColumn = "1 / 2";
    colorPreview.style.width = "25px";
    colorPreview.style.height = "25px";
    colorPreview.style.backgroundColor = currentValue;
    colorPicker.appendChild(colorPreview);

    let colorPickerText = document.createElement("div");
    colorPickerText.style.gridColumn = "2 / 3";
    colorPickerText.innerText = targetElementName;
    colorPicker.appendChild(colorPickerText);

    let colorAlt1 = document.createElement("div");
    colorAlt1.style.gridColumn = "3 / 4";
    colorAlt1.style.width = "25px";
    colorAlt1.style.height = "25px";
    colorAlt1.style.backgroundColor = "#00adff";
    colorAlt1.dataset.selectedValue = "#00adff";
    colorPicker.appendChild(colorAlt1);

    let colorAlt2 = document.createElement("div");
    colorAlt2.style.gridColumn = "4 / 5";
    colorAlt2.style.width = "25px";
    colorAlt2.style.height = "25px";
    colorAlt2.style.backgroundColor = "#97c93f";
    colorAlt2.dataset.selectedValue = "#97c93f";
    colorPicker.appendChild(colorAlt2);

    let colorAlt3 = document.createElement("div");
    colorAlt3.style.gridColumn = "5 / 6";
    colorAlt3.style.width = "25px";
    colorAlt3.style.height = "25px";
    colorAlt3.style.backgroundColor = "#7c61b7";
    colorAlt3.dataset.selectedValue = "#7c61b7";
    colorPicker.appendChild(colorAlt3);

    colorAlt1.onclick = function () {
        SetElementColor(targetElement, colorAlt1.dataset.selectedValue);
    }

    colorAlt2.onclick = function () {
        SetElementColor(targetElement, colorAlt2.dataset.selectedValue);
    }

    colorAlt3.onclick = function () {
        SetElementColor(targetElement, colorAlt3.dataset.selectedValue);
    }

    return colorPicker;
}

function CreateColorPickerID(targetVariable, targetElementName, currentValue) {

    let colorPicker = document.createElement("div");
    colorPicker.style.display = "grid";
    colorPicker.style.gridTemplateColumns = "20px 150px 50px 50px 50px ";
    colorPicker.style.alignContent = "center";
    colorPicker.style.justifyContent = "center";
    colorPicker.style.height = "fit-content";

    let colorPreview = document.createElement("div");
    colorPreview.style.gridColumn = "1 / 2";
    colorPreview.style.width = "25px";
    colorPreview.style.height = "25px";
    colorPreview.style.backgroundColor = currentValue;
    colorPicker.appendChild(colorPreview);

    let colorPickerText = document.createElement("div");
    colorPickerText.style.gridColumn = "2 / 3";
    colorPickerText.innerText = targetElementName;
    colorPicker.appendChild(colorPickerText);

    let colorAlt1 = document.createElement("div");
    colorAlt1.style.gridColumn = "3 / 4";
    colorAlt1.style.width = "25px";
    colorAlt1.style.height = "25px";
    colorAlt1.style.backgroundColor = "#00adff";
    colorAlt1.dataset.selectedValue = "#00adff";
    colorPicker.appendChild(colorAlt1);

    let colorAlt2 = document.createElement("div");
    colorAlt2.style.gridColumn = "4 / 5";
    colorAlt2.style.width = "25px";
    colorAlt2.style.height = "25px";
    colorAlt2.style.backgroundColor = "#97c93f";
    colorAlt2.dataset.selectedValue = "#97c93f";
    colorPicker.appendChild(colorAlt2);

    let colorAlt3 = document.createElement("div");
    colorAlt3.style.gridColumn = "5 / 6";
    colorAlt3.style.width = "25px";
    colorAlt3.style.height = "25px";
    colorAlt3.style.backgroundColor = "#7c61b7";
    colorAlt3.dataset.selectedValue = "#7c61b7";
    colorPicker.appendChild(colorAlt3);

    colorAlt1.onclick = function () {
        COLOR_WINDOW_BAR = colorAlt1.dataset.selectedValue;
    }

    colorAlt2.onclick = function () {
        COLOR_WINDOW_BAR = colorAlt2.dataset.selectedValue;
    }

    colorAlt3.onclick = function () {
        COLOR_WINDOW_BAR = colorAlt3.dataset.selectedValue;
    }

    return colorPicker;
}