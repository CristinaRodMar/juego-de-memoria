export function barajarCartas<T>(array: T[]): T[] {
    const resultado = [...array]; 
        for (let i = resultado.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [resultado[i], resultado[j]] = [resultado[j], resultado[i]];
    }
    
    return resultado;
}
