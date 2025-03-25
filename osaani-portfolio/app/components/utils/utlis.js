
//Adds/Removes bulma classes to change size of project buttons 
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
//Displays associating projects based on button toggle 
export function ShowSelectedProjs() {
    //Gets the selected button 
    let projectType = document.querySelector("button[data-selected='true']"); 
    let webProjects = document.querySelectorAll('#web-project'); 
    let mobileProjects = document.querySelectorAll('#mobile-project'); 
    let threeDProjects = document.querySelectorAll('#three-D-project')

    //Loops through the web projects to hide them from view 
    if(projectType){
        if(projectType?.dataset.type === "mobile"){//Mobile
            mobileProjects.forEach((project) => project.classList.remove("is-hidden")); 
            webProjects.forEach((project) => project.classList.add("is-hidden")); 
            threeDProjects.forEach((project) => project.classList.add("is-hidden"));

        }else if(projectType?.dataset.type === "web"){
            webProjects.forEach((project) =>  project.classList.remove("is-hidden"));
            mobileProjects.forEach((project) => project.classList.add("is-hidden"));
            threeDProjects.forEach((project) => project.classList.add("is-hidden"));

        }else if(projectType?.dataset.type === "animation"){
            webProjects.forEach((project) => project.classList.add("is-hidden")); 
            mobileProjects.forEach((project) => project.classList.add("is-hidden"));
            threeDProjects.forEach((project) => project.classList.remove("is-hidden"));
        }
    }
}
