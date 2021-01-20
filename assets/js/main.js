$(document).ready(function () {
    var alto = $(window).height();
    var ancho = $(window).width();
    /*$('#div').height(alto - 100);*/
    $('#div').width(ancho - 100);
});
$(window).resize(function () {
$(document).ready(function () {
    var alto = $(window).height();
    var ancho = $(window).width();
    /*$('#div').height(alto - 100);*/
    $('#div').width(ancho - 100);
})
});

var clases = []
llenarLista();
function llenarLista() {
    var e = 1;
    while (e <= 16) {
        if (e < 10){
            var texto = "Clase 0" + e;
        }else{
            var texto = "Clase " + e;
        }
        e++;
        clases.push(texto);

    }
}

var contenedor = document.getElementById("div");



for (let index = 0; index < clases.length; index++) {
    const divs = document.createElement("div"); 
    divs.className = "card";
    contenedor.appendChild(divs); 

    /*Creamos el icono*/
    crear_logo(divs);


    const texto = document.createElement("p");
    texto.className = "texto";
    texto.textContent = clases[index];

    divs.appendChild(texto);

    crear_boton(divs);

    
    
}

function crear_boton(ubicacion) {
    const boton = document.createElement("div");
    boton.className = "boton";

    ubicacion.appendChild(boton);

    const imgBoton = document.createElement("img");
    imgBoton.src = "assets/img/expand.png";
    imgBoton.className = "imgBoton";
    boton.appendChild(imgBoton);

}

function crear_logo(ubicacion) {
    const contImg  = document.createElement("div");
    contImg.className = "marco";
    ubicacion.appendChild(contImg);

    const imagen = document.createElement("img")
    imagen.src = "assets/img/icon.png";
    imagen.className = "imagen";
    contImg.appendChild(imagen)
}
