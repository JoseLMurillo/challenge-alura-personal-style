const caracteresPermitidos = "abcdefghijklmnñopqrstuvwxyz ";
let textoCorrecto = "";

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

/*COSAS A ARREGLAR
Estilos del resultado en todos los dispositivos
el boton desencriptar funciona aun cuando el input esta vacio
Arreglar el contenido del input no se salga
*/
/*function copiarPortapapeles() {
    if (document.getElementById("text-result").textContent.length > 0) {
        navigator.clipboard.writeText(document.getElementById("text-result").textContent);

        let x = document.getElementById("snackbar");
        x.className = "show";
        setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
    }
}


function activarBotones() {
    document.getElementById("btnEncriptar").removeAttribute("disabled", "true");
    document.getElementById("btnEncriptar").setAttribute("class", "button-active");

    document.getElementById("btnDesencriptar").removeAttribute("disabled", "true");
    document.getElementById("btnDesencriptar").setAttribute("class", "button-active");
}

function desActivarBotones() {
    document.getElementById("btnEncriptar").removeAttribute("disabled", "false");
    document.getElementById("btnEncriptar").removeAttribute("class");

    document.getElementById("btnDesencriptar").removeAttribute("disabled", "false");
    document.getElementById("btnDesencriptar").removeAttribute("class");
}

function inputVacio() {
    if (document.getElementById("input-text").value.length > 0) {
        activarBotones();
    } else {
        desActivarBotones();
    }
}

function showEncript(palabra) {
    document.getElementById("input-text").value = "";

    document.getElementById("result").setAttribute("class", "result content-result");

    document.getElementById("text-result").textContent = palabra;
    document.getElementById("text-result").removeAttribute("hidden");

    document.getElementById("default-result").setAttribute("hidden", true);

    desActivarBotones();
}

function encriptar() {
    document.getElementById("text-result").textContent = "";
    let palabra = document.getElementById("input-text").value;

    if (palabra.length <= 0) {
        return;
    }

    let contador = 0;

    let palabraNueva = "";

    while (contador < palabra.length) {
        if (palabra[contador] == "e") {
            palabraNueva += "enter";
        } else if (palabra[contador] == "i") {
            palabraNueva += "imes";
        } else if (palabra[contador] == "a") {
            palabraNueva += "ai";
        } else if (palabra[contador] == "o") {
            palabraNueva += "ober";
        } else if (palabra[contador] == "u") {
            palabraNueva += "ufat";
        } else {
            palabraNueva += palabra[contador];
        }

        contador++;
    }

    showEncript(palabraNueva);
}

function extraerCaracteres(inicio, fin, palabra) {
    let contador = inicio;
    palabraNueva = "";

    if (inicio >= fin) {
        return;
    }

    while (contador < fin) {
        palabraNueva += palabra[contador];
        contador++;
    }

    return palabraNueva;
}

function desencriptar() {
    document.getElementById("text-result").textContent = "";
    let palabra = document.getElementById("input-text").value;
    let contador = 0;
    let palabraNueva = "";

    while (contador < palabra.length) {
        if (palabra[contador] == "e" && extraerCaracteres(contador, contador + 5, palabra) == "enter") {
            palabraNueva += "e";
            contador += 5;
        } else
            if (palabra[contador] == "i" && extraerCaracteres(contador, contador + 4, palabra) == "imes") {
                palabraNueva += "i";
                contador += 4;
            } else
                if (palabra[contador] == "a" && extraerCaracteres(contador, contador + 2, palabra) == "ai") {
                    palabraNueva += "a";
                    contador += 2;
                } else
                    if (palabra[contador] == "o" && extraerCaracteres(contador, contador + 4, palabra) == "ober") {
                        palabraNueva += "o";
                        contador += 4;
                    } else
                        if (palabra[contador] == "u" && extraerCaracteres(contador, contador + 4, palabra) == "ufat") {
                            palabraNueva += "u";
                            contador += 4;
                        } else {
                            palabraNueva += palabra[contador];
                            contador++;
                        }
    }


    return showEncript(palabraNueva);
}*/

/*Las "llaves" de encriptación que utilizaremos son las siguientes:

Requisitos:

Debe funcionar solo con letras minúsculas
No deben ser utilizados letras con acentos ni caracteres especiales
Debe ser posible convertir una palabra para la versión encriptada también devolver una palabra encriptada para su versión original.
Por ejemplo:
"gato" => "gaitober"
gaitober" => "gato"

La página debe tener campos para
inserción del texto que será encriptado o desencriptado, y el usuario debe poder escoger entre as dos opciones.
El resultado debe ser mostrado en la pantalla.
Extras:

Un botón que copie el texto encriptado/desencriptado para la sección de transferencia, o sea que tenga la misma funcionalidad del ctrl+C o de la opción "copiar" del menú de las aplicaciones.*/