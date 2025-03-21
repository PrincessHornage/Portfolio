export function ResizeBtns() {
    const screenWidth = window.innerWidth;
    let projectBtns = document.querySelectorAll('#project-btn');  // Select all buttons with id 'project-btn'

    projectBtns.forEach(btn => {
        if (screenWidth <= 425) {
            // Make buttons smaller for screen widths 320px and below
            btn.classList.remove("is-medium");
            btn.classList.add("is-small");
        } else if(screenWidth > 425 && screenWidth <= 1440){
            // Make buttons medium for larger screens
            btn.classList.remove("is-small");
            btn.classList.add("is-medium");
        }else if(screenWidth > 1440){
            btn.classList.remove("is-medium");
            btn.classList.add("is-large");
        }
    });
}
