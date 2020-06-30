var colores = generarColoresAleatorios(6);

var cuadros = document.querySelectorAll(".cuadro");
var colorsele = seleccionarColor();
var colorMostrado = document.getElementById("colorMostrado");
var mensaje = document.querySelector("#mensaje");

colorMostrado.textContent = colorsele;

for (var i = 0; i < cuadros.length; i++) {
    //agregar colores iniciales
    cuadros[i].style.backgroundColor = colores[i];
    //agregar escuchadores de eventos a cada cuadro
    cuadros[i].addEventListener("click", function() {
        //tomar color de cada cuadro seleccionado
        var colorClickeado = this.style.backgroundColor;
        //comparar color con color seleccionado
        if (colorClickeado === colorsele) {
            mensaje.textContent = "Correcto!";
            cambiarcolores(colorClickeado);
        } else {
            this.style.backgroundColor = "#232323";
            mensaje.textContent = "Intente de nuevo!";
        }
    });
};

function cambiarcolores(color) {
    //recorrer todos los cuadros
    for (var i = 0; i < cuadros.length; i++) {
        //cambiar cada color para que coincida con el color dado
        cuadros[i].style.backgroundColor = color;
    }
};

function seleccionarColor() {
    //Seleccionar un numero aleatorio
    //entre el 1 y el tamaño del arreglo de colores (puede ser 3 o 6)
    var aleatorio = Math.floor(Math.random() * colores.length);
    return colores[aleatorio];
};

function generarColoresAleatorios(num) {
    //crear arreglo
    var arr = [];
    //repetir numero veces
    for (var i = 0; i < num; i++) {
        //Agregar num de colores aleatorios al arreglo
        arr.push(colorAleatorio());
    }
    //retornar arreglo
    return arr;
};

function colorAleatorio() {
    //seleccionar R (rojo) 0 - 255
    var r = Math.floor(Math.random() * 256);
    //seleccionar G (verde) 0 - 255
    var g = Math.floor(Math.random * 256);
    //seleccionar B (Azul) 0 - 255
    var b = Math.floor(Math.random * 256);
    //generar la cadena "RGB(r, g, b)"
    return "rgb(" + r + ", " + g + ", " + b + ")";
};