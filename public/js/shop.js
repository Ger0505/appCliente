let items = document.getElementsByClassName("col-sm-4");
let btnFiltro = document.getElementById("filtrar");
let buttons = document.querySelectorAll("#filtro button");
let selects = document.querySelectorAll("#filtro select");
let pluss = document.querySelectorAll("#filtro span");
let filterCam = document.querySelectorAll("#filtro strong");
let lista = [];
function init(){
    lista = reg;
    agregarCartas();
    // agregar();
    btnFiltro.addEventListener("click",filtrarCampos,false);
    buttons[0].addEventListener("click",function(){
        document.getElementById("camGenero").textContent = buttons[0].value;
    },false);
    buttons[1].addEventListener("click",function(){
        document.getElementById("camGenero").textContent = buttons[1].value;
    },false);
    buttons[2].addEventListener("click",function(){
        document.getElementById("camTam").textContent = buttons[2].value;
    },false);
    buttons[3].addEventListener("click",function(){
        document.getElementById("camTam").textContent = buttons[3].value;
    },false);
    buttons[4].addEventListener("click",function(){
        document.getElementById("camTam").textContent = buttons[4].value;
    },false);
    selects[0].addEventListener("change",function(){
        document.getElementById("camRaza").textContent = selects[0].value;
    },false);
    selects[1].addEventListener("change",function(){
        document.getElementById("camIns").textContent = selects[1].value;
    },false);
    pluss[0].addEventListener("click",function(){
        console.log("Hola");    
        filterCam[0].textContent = "";
    },false);
    pluss[1].addEventListener("click",function(){
        console.log("Hola");
        filterCam[1].textContent = "";
    },false);
    pluss[2].addEventListener("click",function(){
        console.log("Hola");
        filterCam[2].textContent = "";
    },false);
    pluss[3].addEventListener("click",function(){
        filterCam[3].textContent = "";
    },false);
}

function filtrarCampos(){
    var txtG = filterCam[0].textContent;
    var txtT = filterCam[1].textContent;
    var txtR = filterCam[2].textContent;
    var txtI = filterCam[3].textContent;
    console.log(reg.length);
    lista = reg.slice();
    for(var i = 0;i<4;i++){
        if(filterCam[i].textContent != ""){
            for(var j = 0;j<lista.length;j++){
                switch(i){
                    case 0:
                        if(lista[j].genero != filterCam[i].textContent){
                             lista.splice(j,1);
                        }
                        break;
                    case 1:
                        if(lista[j].size != filterCam[i].textContent){
                         lista.splice(j,1);
                        }
                        break;
                    case 2:
                        if(lista[j].raza != filterCam[i].textContent){

                        lista.splice(j,1);
                        }
                        break;
                    case 3:
                        if(lista[j].institucion != filterCam[i].textContent){
                             lista.splice(j,1);
                        }
                        break;
                }
                i--;
            }
        }
    }
    borrarItem();
    agregarCartas();
}

function agregar(){
    for(var i = 0;i<9;i++){
        var ima = items[i].querySelector("img");
        var titulo = items[i].querySelector("h3");
        var spans = items[i].querySelectorAll("span");

        ima.src = reg[i].images[0];
        titulo.textContent = reg[i].nombre;
        spans[0].textContent = reg[i].genero;
        spans[1].textContent = reg[i].size;
        spans[2].textContent = reg[i].raza;
    }
}

function agregarCartas(){
    for(var i = 0;i<lista.length;i++){
        var listIt = document.createElement("li");
        listIt.setAttribute("class","col-sm-4");
        var divPrincipal = document.createElement("div");
        divPrincipal.setAttribute("class","shop-item");
        var divThum = document.createElement("div");
        divThum.setAttribute("class","thumbnail");
        var aImag = document.createElement("a");
        aImag.setAttribute("class","shop-item-image");
        var divImage = document.createElement("img");
        divImage.setAttribute("class","img-fluid");
        divImage.setAttribute("src",lista[i].images[0]);
        divImage.setAttribute("alt",lista[i].nombre);

        var infoDiv = document.createElement("div");
        infoDiv.setAttribute("class","shop-item-summary");
        var titulo = document.createElement("h3");
        titulo.textContent = lista[i].nombre;
        var info = document.createElement("p");
        var array = [["Genero: ",lista[i].genero],["Tamaño: ",lista[i].size],["Raza: ",lista[i].raza]];
        for(var j = 0;j<3;j++){
            var f = document.createElement("strong");
            f.innerHTML = array[j][0];
            var s = document.createElement("span");
            s.innerHTML = array[j][1];
            var br = document.createElement("br");
            info.appendChild(f);
            info.appendChild(s);
            info.appendChild(br);
        }

        var divBoton = document.createElement("div");
        divBoton.setAttribute("class","shop-item-buttons");
        divBoton.setAttribute("class","text-center");
        var botonLink = document.createElement("a");
        botonLink.setAttribute("class","btn");
        botonLink.setAttribute("class","btn-light");
        botonLink.setAttribute("href","single-item.html");
        var icon = document.createElement("i");
        icon.setAttribute("class","fa");
        icon.setAttribute("class","fa-plus");
        var spaninfo = document.createElement("span");
        spaninfo.innerHTML = "More Information";

        aImag.appendChild(divImage);
        divThum.appendChild(aImag);

        infoDiv.appendChild(titulo);
        infoDiv.appendChild(info);

        botonLink.appendChild(icon);
        botonLink.appendChild(spaninfo);
        divBoton.appendChild(botonLink);

        divPrincipal.appendChild(divThum);
        divPrincipal.appendChild(infoDiv);
        divPrincipal.appendChild(divBoton);
        listIt.appendChild(divPrincipal);
        document.getElementById("lista").appendChild(listIt);
    }

}

function borrarItem(){
    var list = document.getElementById("lista");
    var sd = list.children;
    console.log(sd);
    for(var i= 0; i < sd.length;i++){
        list.removeChild(sd[0]);
        i--;
    }
}

window.addEventListener("load",init,false);