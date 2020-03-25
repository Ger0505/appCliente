function init(){
    document.getElementById("enviar").addEventListener("click",verificar,false);
}

function verificar(){
var campo = document.getElementById("email");
var modal = document.getElementById("modalContenido");
if(campo.checkValidity()){
    modal.textContent = "Mensaje Enviado";
}else{
    modal.textContent = "No Mensaje Enviado";
}

function enviarSolicitud(){
    Si(validarDatos()){
        enviar("correoInstitucion","InformaciónJSON");
    }
}

window.addEventListener("load",init,false);