import { tablero,Tablero, infoCartas } from "./modelo"
import { voltearLaCarta, sePuedeVoltearLaCarta, sonPareja, parejaNoEncontrada, parejaEncontrada } from "./motor"

const crearTablero = () => {
    for (let indice = 0; indice < tablero.cartas.length; indice++){
        const elementoDiv = document.querySelector(`div[data-indice-array="${indice}"]`);
        if (elementoDiv !== null && elementoDiv !== undefined && elementoDiv instanceof HTMLDivElement) {
            elementoDiv.addEventListener("click", () => {
                const elementoImg = document.querySelector(`img[data-indice-array="${indice}"]`);
                if (elementoImg !== null && elementoImg !== undefined && elementoImg instanceof HTMLImageElement) {
                    elementoImg.src = tablero.cartas[indice].imagen;
                }
            })
        }
    }
}

document.addEventListener("DOMContentLoaded", () => {
    crearTablero();
})


const esVolteable = (tablero: Tablero, indiceCarta: number): boolean => {
    return sePuedeVoltearLaCarta(tablero, indiceCarta);
};

const manejarVolteoCarta = (tablero: Tablero, indice: number, elementoImg: HTMLImageElement) => {
    if (sePuedeVoltearLaCarta(tablero, indice)) { 
        voltearLaCarta(tablero, indice);
        const carta = tablero.cartas[indice];
        const infoCarta = infoCartas.find(info => info.idFoto === carta.idFoto);
        if (infoCarta) {
            elementoImg.src = infoCarta.imagen;
        } 
    }
};

const siSonPareja = (tablero: Tablero): boolean => {
    if (tablero.estadoPartida === "DosCartasLevantadas") {
        const indiceA = tablero.indiceCartaVolteadaA!;
        const indiceB = tablero.indiceCartaVolteadaB!;
        return sonPareja(indiceA, indiceB, tablero);
    }
    return false;
};

const gestionarTurno = (tablero: Tablero, indice: number): void => {
    switch (tablero.estadoPartida) {
        case "CeroCartasLevantadas":
            tablero.indiceCartaVolteadaA = indice;
            tablero.estadoPartida = "UnaCartaLevantada";
            break;

        case "UnaCartaLevantada":
            tablero.indiceCartaVolteadaB = indice;
            tablero.estadoPartida = "DosCartasLevantadas";

            const indiceA = tablero.indiceCartaVolteadaA!;
            const indiceB = tablero.indiceCartaVolteadaB!;

            if (siSonPareja(tablero)) {
                parejaEncontrada(tablero, indiceA, indiceB);
                tablero.estadoPartida = "CeroCartasLevantadas";
            } else {
                setTimeout(() => {
                    parejaNoEncontrada(tablero, indiceA, indiceB);
                    ocultarCartas(indiceA, indiceB);
                    tablero.estadoPartida = "CeroCartasLevantadas";
                }, 1000);
            }
            break;
    }
};

const ocultarCartas = (indiceA: number, indiceB: number): void => {
    const imgA = document.querySelector(`img[data-indice-array="${indiceA}"]`) as HTMLImageElement;
    const imgB = document.querySelector(`img[data-indice-array="${indiceB}"]`) as HTMLImageElement;
    const divA = document.querySelector(`div[data-indice-array="${indiceA}"]`) as HTMLDivElement;
    const divB = document.querySelector(`div[data-indice-array="${indiceB}"]`) as HTMLDivElement;

    if (imgA && imgB && divA && divB) {
        imgA.src = "";
        imgB.src = "";
        divA.classList.add("boca-abajo");
        divB.classList.add("boca-abajo");
    }
};


