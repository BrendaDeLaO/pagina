document.addEventListener("DOMContentLoaded", () => {
    const imagenes = document.querySelectorAll(".contenedor-imagenes .imagen");
    const [verMasBtn, verMenosBtn] = [document.getElementById("verMas"), document.getElementById("verMenos")];

    imagenes.forEach((img, i) => img.style.display = i < 6 ? "block" : "none");

    verMasBtn.onclick = () => {
        imagenes.forEach(img => img.style.display = "block");
        verMasBtn.style.display = "none";
        verMenosBtn.style.display = "block";
    };

    verMenosBtn.onclick = () => {
        imagenes.forEach((img, i) => img.style.display = i < 6 ? "block" : "none");
        verMasBtn.style.display = "block";
        verMenosBtn.style.display = "none";
    };
});