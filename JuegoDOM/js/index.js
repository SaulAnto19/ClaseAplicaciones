var btnj1 = document.querySelector("#j1");
var btnj2 = document.getElementById("j2");
var btnrst = document.getElementById("reset");
var puntos1 = document.querySelector("#puntos1");
var puntos2 = document.querySelector("#puntos2");
var inputpun = document.querySelector("input");
var puntomax = document.querySelector("p span");

var puntosj1 = 0;
var puntosj2 = 0;
var finjuego = false;
var puntuacionMax = 5;

btnj1.addEventListener("click", function() {
    if (!finjuego) {
        puntosj1++;
        if (puntosj1 === puntuacionMax) {
            puntos1.classList.add("ganador");
            finjuego = true;
        }
        puntos1.textContent = puntosj1;
    }
});

btnj2.addEventListener("click", function() {
    if (!finjuego) {
        puntosj2++;
        if (puntosj2 === puntuacionMax) {
            puntos2.classList.add("ganador");
            finjuego = true;
        }
        puntos2.textContent = puntosj2;
    }
});

btnrst.addEventListener("click", function() {
    reset();
});

inputpun.addEventListener("change", function() {
    puntomax.textContent = this.value;
    puntuacionMax = Number(this.value);
    reset();
});

function reset() {
    puntosj1 = 0;
    puntosj2 = 0;
    puntos1.textContent = puntosj1;
    puntos2.textContent = puntosj2;
    puntos1.classList.remove("ganador");
    puntos2.classList.remove("ganador");
    finjuego = false;
};