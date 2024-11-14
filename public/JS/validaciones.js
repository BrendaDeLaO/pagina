const formulario = document.getElementById("formulario")
const nombre = document.getElementById("nombre")
const apellido = document.getElementById("apellido")
const correo = document.getElementById("correo")
const telefono = document.getElementById("numero")
const motivo = document.getElementById("motivo")
const parrafo = document.getElementById("warnings")

formulario.addEventListener("submit", e=>{
    e.preventDefault();
    let warnings = ""
    let validacionEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,10}$/
    let validacionNombres = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s'-]{2,10}$/
    let validacionNumeros = /^\d{9,15}$/

    if(!validacionNombres.test(nombre.value)){
        warnings += "el nombre no es valido <br>"
        validar = true
    }
    if(!validacionNombres.test(apellido.value)){
        warnings += "el apellido no es valido <br>"
        validar = true
    }
    if(!validacionEmail.test(correo.value)){
        warnings += "el email no es valido <br>"
        validar = true
    }
    if(!validacionNumeros.test(telefono.value)){
        warnings += "el telefono no es valido <br>"
        validar = true
    }


    if(validar){
        parrafo.innerHTML = warnings
    }
})


var inputs = document.getElementsByClassName("form_input")
for(var i = 0; i < inputs.length; i ++) {
    inputs[i].addEventListener('keyup', function(){
        if(this.value.length >=1){
            this.nextElementSibling.classList.add("fijar")
        } else{
            this.nextElementSibling.classList.remove("fijar")
        }
    })
}
