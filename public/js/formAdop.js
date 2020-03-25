let submit = document.getElementById("submit");
let tel = document.getElementById("tel");

function init(){
    submit.addEventListener("click",verificarCampos,false);   
    tel.addEventListener("click",function(){
        tel.style.backgroundColor = "white";
    },false);
}

function verificarCampos(){
    var claseTel = typeof(parseInt(tel.value))+"";
    if(claseTel != "number"){
        alert("Formato de telefono incorrecto");
        tel.style.backgroundColor = "red";
        return;
    }
}

window.addEventListener("load",init,false);