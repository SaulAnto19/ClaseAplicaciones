var numCuadros = 6;
var colores = generarColoresAleatorios(numCuadros);

var cuadros = document.querySelectorAll(".cuadro");
var colorsele = seleccionarColor();
var colorMostrado = document.getElementById("colorMostrado");
var mensaje = document.querySelector("#mensaje");
var h1 = document.querySelector("h1");
var btnReset = document.getElementById("reset");
var btnFacil = document.getElementById("btnFacil");
var btnDificil = document.getElementById("btnDificil");

btnFacil.addEventListener("click", function() {
    btnDificil.classList.remove("seleccionado");
    btnFacil.classList.add("seleccionado");
    numCuadros = 3;
    colores = generarColoresAleatorios(numCuadros);
    colorsele = seleccionarColor();
    colorMostrado.textContent = colorsele;
    for (var i = 0; i < cuadros.length; i++) {
        if (colores[i]) {
            cuadros[i].style.backgroundColor = colores[i];
        } else {
            cuadros[i].style.display = "none";
        }
    }
});

btnDificil.addEventListener("click", function() {
    btnFacil.classList.remove("seleccionado");
    btnDificil.classList.add("seleccionado");
    numCuadros = 6;
    colores = generarColoresAleatorios(numCuadros);
    colorsele = seleccionarColor();
    colorMostrado.textContent = colorsele;
    for (var i = 0; i < cuadros.length; i++) {
        cuadros[i].style.backgroundColor = colores[i];
        cuadros[i].style.display = "block";
    }
});

btnReset.addEventListener("click", function() {
    //generar colores nuevos
    colores = generarColoresAleatorios(6);
    //selecciona un color aleatorio del arreglo
    colorsele = seleccionarColor();
    //cambiar el color mostrado por el color seleccionado
    colorMostrado.textContent = colorsele;
    mensaje.textContent = "Colores Nuevos";
    //cambiar los colores del cuadro
    for (var i = 0; i < cuadros.length; i++) {
        cuadros[i].style.backgroundColor = colores[i];
    }
    h1.style.backgroundColor = "steelblue";
});

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
            btnReset.textContent = "Volver a jugar?";
            cambiarcolores(colorClickeado);
            h1.style.backgroundColor = colorClickeado;
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
    var g = Math.floor(Math.random() * 256);
    //seleccionar B (Azul) 0 - 255
    var b = Math.floor(Math.random() * 256);
    //generar la cadena "RGB(r, g, b)"
    return "rgb(" + r + ", " + g + ", " + b + ")";
};