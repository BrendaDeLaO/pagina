function irArriba(){
    window.addEventListener('scroll', () => {
        var scroll = document.documentElement.scrollTop;
        var botonArriba = document.getElementById('botonArriba');

        if (scroll > 700){
            botonArriba.style.right = 20 + "px";
        } else {
            botonArriba.style.right = -200 + "px";
        }
    })
}

irArriba();