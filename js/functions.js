



export function setValidateFormAndMessageWelcomeCallbacks () {

    const input  = document.querySelector("input");

    input.addEventListener('focus', changeStyle);

    input.addEventListener('blur',changeStyle);
    
    const btn = document.getElementById("btnMessage");

    btn.addEventListener("click", welcomeMessage);

}

function changeStyle (event) {

    
    if (event.target.validity.valid === false) {
        
        event.target.style.backgroundColor = "#fbccd1";

    } else {

        event.target.style.backgroundColor = "#bdecd6"  ;

    }

}


function welcomeMessage() {


    let checkPolitica = document.getElementById("politica-privacidad");

    let email = document.getElementById("email");



    /* Utilizamos la API de javascript para validar los elemnento INPUT del formulario */
    if (checkPolitica.checkValidity() && email.checkValidity()) { 

            let message  = document.getElementById("mensaje-de-bienvenida-newsletter");
            
            message.innerHTML="<b>¡¡ Bienvenido!! Gracias por unirte a nuestro Newsletter.</b>";
            
    } 

}


export default {

    setValidateFormAndMessageWelcomeCallbacks,

}