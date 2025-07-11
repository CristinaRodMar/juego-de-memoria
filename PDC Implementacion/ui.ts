import { tablero, Tablero } from "./modelo"
import { voltearLaCarta, sePuedeVoltearLaCarta, sonPareja, parejaNoEncontrada, parejaEncontrada, iniciaPartida } from "./motor"

const crearTablero = () => {
    for (let indice = 0; indice < tablero.cartas.length; indice++) {
        mapearCartas(indice);
    }
}

const mapearCartas = (indice: number) => {
    const elementoDiv = document.querySelector(`div[data-indice-array="${indice}"]`);
    if (elementoDiv !== null && elementoDiv !== undefined && elementoDiv instanceof HTMLDivElement) {
        elementoDiv.addEventListener("click", () => {
            if (sePuedeVoltearLaCarta(tablero, indice)) {
                voltearLaCarta(tablero, indice);
                pintarCarta(indice);
                esLaSegundaCarta(tablero);
                actualizarContadorIntentos();
                console.log(tablero);
            } else {
                alert("¡Esta carta ya está volteada o encontrada!");
            }
        })
    }
}

const pintarCarta = (indice: number) => {
    const elementoImg = document.querySelector(`img[data-indice-array="${indice}"]`);
    if (elementoImg !== null && elementoImg !== undefined && elementoImg instanceof HTMLImageElement) {
        elementoImg.src = tablero.cartas[indice].imagen;
    }
}

const vaciarImagen = (indice: number) => {
    const elementoImg = document.querySelector(`img[data-indice-array="${indice}"]`);
    if (elementoImg !== null && elementoImg !== undefined && elementoImg instanceof HTMLImageElement) {
        elementoImg.src = "";
    }
}

const voltearCartas = (tablero: Tablero) => {
    for (let indice = 0; indice < tablero.cartas.length; indice++) {
        if (tablero.cartas[indice].encontrada === false && tablero.cartas[indice].estaVuelta === false) {
            vaciarImagen(indice);
        }
    }
}

const reiniciarInterfaz = () => {
    for (let indice = 0; indice < tablero.cartas.length; indice++) {
        vaciarImagen(indice);
    }
}

const esLaSegundaCarta = (tablero: Tablero) => {
    const indiceA = tablero.indiceCartaVolteadaA;
    const indiceB = tablero.indiceCartaVolteadaB;
    if (indiceA !== undefined && indiceB !== undefined) {
        if (sonPareja(indiceA, indiceB, tablero)) {
            parejaEncontrada(tablero, indiceA, indiceB);
        } else {
            parejaNoEncontrada(tablero, indiceA, indiceB);
            setTimeout(() => {
                voltearCartas(tablero);
            }, 1000);
        }
        actualizarContadorIntentos();
    }
}

const actualizarContadorIntentos = () => {
    const contador = document.getElementById("contador-intentos");
    if (contador !== null && contador !== undefined && contador instanceof HTMLSpanElement) {
        contador.textContent = tablero.intentos.toString();
    }
}

document.addEventListener("DOMContentLoaded", () => {
    crearTablero();
    const btnIniciarPartida = document.getElementById("btnEmpezar");
    if (btnIniciarPartida !== null && btnIniciarPartida !== undefined && btnIniciarPartida instanceof HTMLButtonElement) {
        btnIniciarPartida.addEventListener("click", () => {
            iniciaPartida(tablero);
            reiniciarInterfaz();
            actualizarContadorIntentos();
        })
    }
})