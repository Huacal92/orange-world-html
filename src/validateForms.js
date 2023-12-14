const btnSubmit = document.getElementById('owBtnForm');
const mostrarMensaje = (iconoClass, textBox1) =>{
    const mensajeBox = document.querySelector('.message-box');
    const iconSpan = document.getElementById('iconMessage');
    const textBox = document.getElementById('textmessage');
    
    iconSpan.className = iconoClass;
    /* iconSpan.innerHTML  = icono; */
    textBox.innerHTML = textBox1;
    mensajeBox.style.display = 'block';

    setTimeout(() => {
        mensajeBox.style.display = 'none';
    }, 5000);
}

const formularioVacio = () => {
mostrarMensaje('error fa-solid fa-square-xmark', '¡Debes rellenar todos los espacio del formulario!');

};

const errorEmail = () => {
mostrarMensaje('error fa-solid fa-square-xmark', 'Correo electrónico no válido.');

};

const validarNombre = () =>{
    mostrarMensaje('error fa-solid fa-square-xmark', 'Nombre es requerido');
};

const enviarFormularioExitoso = () => {
    mostrarMensaje('✅','¡El formulario se envió con éxito!')
};

const enviarFormularioError = () => {
    mostrarMensaje('❌', '¡Hubo un error al enviar el formulario!');
  };


const validarFormulario = () => {
    const nombre = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!nombre || !email || !message ) {
        formularioVacio();
    }else if(!regexEmail.test(email)){
        errorEmail();
    }else if (!nombre) {
        validarNombre();
    }


  }
    

if (btnSubmit) {
    btnSubmit.addEventListener('click', () =>{
        validarFormulario();
    });
}
