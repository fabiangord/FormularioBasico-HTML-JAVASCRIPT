const formulario = document.querySelector('.formulario')
const userName = document.querySelector('#id')
const userEmail = document.querySelector('#correo')

const alertSuccess = document.querySelector('#alertSuccess')
const alertName = document.querySelector('#alertName')
const alertEmail = document.querySelector('#alertEmail')

const regUserName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
const regUserEmail = /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;

const pintarMensajeExito = (e) => {
    alertSuccess.classList.remove('d-none')
}

const pintarMensajeError = (errores) => {
    errores.forEach((item) => {
        item.tipo.classList.remove("d-none");
        item.tipo.textContent = item.msg;
        
    });
}

formulario.addEventListener('submit', (e) =>{
    e.preventDefault()

    alertSuccess.classList.add('d-none')
    

    const errores = []

    if(!regUserName.test(userName.value) || !userName.value.trim()) {

        userName.classList.add('is-invalid')

        errores.push({
            tipo: alertName,
            msg: 'Formato no valido en el campo nombre, rectifique.'
        })

    }else{
        
        userName.classList.remove('is-invalid')
        userName.classList.add('is-valid')
        alertName.classList.add('d-none')
    }

    if(!regUserEmail.test(userEmail.value) || !userEmail.value.trim()){

        userEmail.classList.add('is-invalid')

        errores.push({
            tipo: alertEmail,
            msg: 'Formato no valido en el campo correo, rectifique.'
        })

    }else{

        userEmail.classList.remove('is-invalid')
        userEmail.classList.add('is-valid')
        alertEmail.classList.add('d-none')
    }

    if(errores.length !== 0){
        pintarMensajeError(errores)
        return
    }
    
    console.log('formato enviado')
    pintarMensajeExito()
})