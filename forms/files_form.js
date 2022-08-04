function Open_Files_Window() {
    let a_window = Create_A_Window("100px", "100px", "Files Explorer", "600px", "400px", true);

    if(a_window === null) return;

    main_canvas.appendChild(a_window);
}