Update_Clock();
setInterval(() => { Update_Clock(); }, 60000);

function Toggle_Start_Menu() {
    let startMenu = document.getElementById("startMenu");

    if (startMenuShown) {
        startMenu.style.display = "none";
        startMenu.classList.remove("start_menu_grow");
        startMenu.classList.add("start_menu_shrink")
        startMenuShown = false;
    } else {
        startMenu.style.display = "block";
        startMenu.classList.add("start_menu_grow");
        startMenu.classList.remove("start_menu_shrink")
        startMenuShown = true;
    }
}

function Update_Clock() {
    let current_date = new Date();
    let current_time = `${current_date.toLocaleDateString("en-US", { weekday: 'short' })} ${current_date.getHours()}:${current_date.getMinutes()}`;
    document.getElementById("startBarClock").innerText = current_time;
}