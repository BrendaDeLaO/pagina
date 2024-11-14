const menuHamburguesa = document.getElementById("menuHamburguesa");
const nav = document.querySelector("nav");

menuHamburguesa.addEventListener("click", () => nav.classList.toggle("active"));
document.addEventListener("click", (event) => !nav.contains(event.target) && nav.classList.remove("active"));

