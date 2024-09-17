
let inputSusc=document.querySelector('#inputSuscrip');
let formSuscrip=document.getElementById('suscrip');
const suscripcion =(event)=>{
    event.preventDefault();
    const email = inputSusc.value.trim();
                alert(`Gracias por suscribirte con el correo electrónico: ${email}`);
                formSuscrip.reset();
}
formSuscrip.addEventListener('submit',suscripcion);

window.arrepentimiento=()=>{
    confirm('Seguro que te arrepientes??🤔');
}


