let submit = document.getElementById("submit");
let c = document.getElementById("contrasenia");
let cc = document.getElementById("confirmPass");
let tel = document.getElementById("telefono");

function init(){
    submit.addEventListener("click",verificarCampos,false);   
    c.addEventListener("click",function(){
        c.style.backgroundColor = "white";
        cc.style.backgroundColor = "white";
    },false);
    cc.addEventListener("click",function(){
        c.style.backgroundColor = "white";
        cc.style.backgroundColor = "white";
    },false);
    tel.addEventListener("click",function(){
        tel.style.backgroundColor = "white";
    },false);
}

function verificarCampos(){
    if(c.value != cc.value){
        alert("Las contrasenia no concuerda");
        c.style.backgroundColor = "red";
        cc.style.backgroundColor = "red";
        return;
    }
    var claseTel = typeof(parseInt(tel.value))+"";
    if(claseTel != "number"){
        alert("Formato de telefono incorrecto");
        tel.style.backgroundColor = "red";
        return;
    }
}

function cambiarPassword(){
    var viejaPwd = campoViejaContraseña.value;
    var nuevaPwd = campoNuevaContraseña.value;
    var vieja = Consulta.select("select contrasenia from institucion ...");
    Si(vieja == MD5(viejaPwd)){
        Consulta.update("update instituto set contrasenia="+MD5(nuevaPwd)+"...");
    }else{
        ContenedorError.estilo.display = "Block";
    }
}

function mostrarPerros(){
    for (let index = 0; index < perros.length; index++) {
        const element = perros[index];
        
    }
}

window.addEventListener("load",init,false);