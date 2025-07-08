import { Carta, Tablero, crearColeccionDeCartasInicial, infoCartas } from "./modelo"

/* En el motor nos va a hacer falta un método para barajar cartas */

const barajarCartas = (cartas: Carta[]): Carta[] => {
    const resultado = [...cartas];
    for (let i = resultado.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [{ ...resultado[i] }, { ...resultado[j] }] = [resultado[j], resultado[i]];
    }
    return resultado;
}
/* Una carta se puede voltear si no está encontrada y no está ya volteada, o no hay dos cartas ya volteadas */
export const sePuedeVoltearLaCarta = (tablero: Tablero, indice: number): boolean => {
    return tablero.cartas[indice].encontrada === false && tablero.cartas[indice].estaVuelta === false;
}

export const voltearLaCarta = (tablero: Tablero, indice: number): void => {
    const cartaSeleccionada = tablero.cartas[indice];

    cartaSeleccionada.estaVuelta = true;
    
    if (tablero.estadoPartida === "CeroCartasLevantadas") {
        tablero.indiceCartaVolteadaA = indice;
        tablero.estadoPartida = "UnaCartaLevantada";
    } else if (tablero.estadoPartida === "UnaCartaLevantada") {
        tablero.indiceCartaVolteadaB = indice;
        tablero.estadoPartida = "DosCartasLevantadas";
        tablero.intentos += 1;
    }
}
/* Dos cartas son pareja si en el array de tablero de cada una tienen el mismo id */
export const sonPareja = (indiceA: number, indiceB: number, tablero: Tablero): boolean => {
    const cartaA = tablero.cartas[indiceA];
    const cartaB = tablero.cartas[indiceB];
    return cartaA.idFoto === cartaB.idFoto;
}

/* Aquí asumimos ya que son pareja, lo que hacemos es marcarlas como encontradas y comprobar si la partida esta completa. */

export const parejaEncontrada = (tablero: Tablero, indiceA: number, indiceB: number): void => {
    tablero.cartas[indiceA].encontrada = true;
    tablero.cartas[indiceB].encontrada = true;
    tablero.indiceCartaVolteadaA = undefined;
    tablero.indiceCartaVolteadaB = undefined;

    const todasEncontradas = tablero.cartas.every(cartas => cartas.encontrada);

    if (todasEncontradas) {
        tablero.estadoPartida = "PartidaCompleta"
    } else {
        tablero.estadoPartida = "CeroCartasLevantadas";
    }
}

/* Aquí asumimos que no son pareja y las volvemos a poner boca abajo */

export const parejaNoEncontrada = (tablero: Tablero, indiceA: number, indiceB: number): void => {
    tablero.cartas[indiceA].estaVuelta = false;
    tablero.cartas[indiceB].estaVuelta = false;
    tablero.estadoPartida = "CeroCartasLevantadas";
    tablero.indiceCartaVolteadaA = undefined;
    tablero.indiceCartaVolteadaB = undefined;
}

/* Esto lo podemos comprobar o bien utilizando every, o bien utilizando un contador (cartasEncontradas) */
export const esPartidaCompleta = (tablero: Tablero): boolean => {
    const completa = tablero.cartas.every((carta) => carta.encontrada);
    
    if (completa) {
        tablero.estadoPartida = "PartidaCompleta";
    }
    return completa;
};

/* Iniciar partida */

export const iniciaPartida = (tablero: Tablero): void => {
    const nuevasCartas = crearColeccionDeCartasInicial(infoCartas);
    const cartasBarajadas = barajarCartas(nuevasCartas);
    tablero.cartas = cartasBarajadas.map(carta => ({
        ...carta,
        estaVuelta: false,
        encontrada: false
    }));
    tablero.estadoPartida = "CeroCartasLevantadas";
    tablero.indiceCartaVolteadaA = undefined;
    tablero.indiceCartaVolteadaB = undefined;
    tablero.intentos = 0;
};