const caracteresPermitidos = "abcdefghijklmnñopqrstuvwxyz ";
let textoCorrecto = "";

function limpiarPlaceholder() {
    let textarea = document.getElementById('message');
    if (textarea.value === '') {
        textarea.placeholder = '';
        textarea.classList.remove('placeholder-active');
    }
}

function restaurarPlaceholder() {
    let textarea = document.getElementById('message');
    if (textarea.value === '') {
        textarea.placeholder = 'Tu mensaje de encriptacion aqui';
        textarea.classList.add('placeholder-active');
    }
}

function copiar(){
    let textarea = document.getElementById("message");
    navigator.clipboard.writeText(textarea.value);

    const snackbar = document.getElementById('snackbar');
            snackbar.className = 'show';
            setTimeout(() => {
                snackbar.className = snackbar.className.replace('show', '');
            }, 3000);
}

function validar() {
    let textarea = document.getElementById("message");
    let copy = document.getElementById("title");

    if(textarea.value.length > 0){
        copy.textContent = "Copy";
        copy.setAttribute("class", "title");
        copy.addEventListener("click", copiar);
    } else {
        copy.textContent = "ENCRIPTADOR";
        copy.setAttribute("class", "");
    }
    
    let textoCorrecto = '';

    for (let i = 0; i < textarea.value.length; i++) {
        let caracter = textarea.value[i];

        for (let j = 0; j < caracteresPermitidos.length; j++) {
            if (caracter == caracteresPermitidos[j]) {
                textoCorrecto += caracter;
            }
        }
    }

    if (textoCorrecto !== textarea.value) {
        textarea.value = textoCorrecto;
    }
}

function encriptar() {
    let MensajeNuevo = "";
    let mensaje = document.getElementById("message").value;

    if (mensaje.length <= 0) {
        return;
    }

    let contador = 0;

    while (contador < mensaje.length) {
        if (mensaje[contador] == "e") {
            MensajeNuevo += "enter";
        } else if (mensaje[contador] == "i") {
            MensajeNuevo += "imes";
        } else if (mensaje[contador] == "a") {
            MensajeNuevo += "ai";
        } else if (mensaje[contador] == "o") {
            MensajeNuevo += "ober";
        } else if (mensaje[contador] == "u") {
            MensajeNuevo += "ufat";
        } else {
            MensajeNuevo += mensaje[contador];
        }

        contador++;
    }

    mostrarEncriptado(MensajeNuevo);
    changeColor();
}

function extraerCaracteres(inicio, fin, palabra) {
    palabraNueva = "";

    if (inicio >= fin) {
        return;
    }

    while (inicio < fin) {
        palabraNueva += palabra[inicio];
        inicio++;
    }

    return palabraNueva;
}

function desencriptar() {
    let mensaje = document.getElementById("message").value;
    let contador = 0;
    let mensajeNuevo = "";

    while (contador < mensaje.length) {
        if (extraerCaracteres(contador, contador + 5, mensaje) == "enter") {
            mensajeNuevo += "e";
            contador += 5;
        } else
            if (extraerCaracteres(contador, contador + 4, mensaje) == "imes") {
                mensajeNuevo += "i";
                contador += 4;
            } else
                if (extraerCaracteres(contador, contador + 2, mensaje) == "ai") {
                    mensajeNuevo += "a";
                    contador += 2;
                } else
                    if (extraerCaracteres(contador, contador + 4, mensaje) == "ober") {
                        mensajeNuevo += "o";
                        contador += 4;
                    } else
                        if (extraerCaracteres(contador, contador + 4, mensaje) == "ufat") {
                            mensajeNuevo += "u";
                            contador += 4;
                        } else {
                            mensajeNuevo += mensaje[contador];
                            contador++;
                        }
    }

    mostrarEncriptado(mensajeNuevo);
    changeColor();
}


function mostrarEncriptado(mensaje){
    document.getElementById("message").value = mensaje;
}

function changeColor(){
    let clase = document.getElementById("danger");
    clase.setAttribute("class", "stripe_inner stripe_no_standar");

    setTimeout(() => {
        let clase = document.getElementById("danger");
        clase.setAttribute("class", "stripe_inner stripe_standar")
    }, 1500);
}