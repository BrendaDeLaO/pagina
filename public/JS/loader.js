window.addEventListener("DOMContentLoaded", () => {
    shoutLoader();

})

window.addEventListener("load", () => {  
    setTimeout(() => {
        hidetLoader();
    }, 1100);
})


const shoutLoader = () => {
    const loader = document.getElementById("loaderPage");
    loader.classList.add("show_loader");

}

const hidetLoader = () => {
    const loader = document.getElementById("loaderPage");
    loader.classList.remove("show_loader");
    
}