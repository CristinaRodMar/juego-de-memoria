
interface InfoCarta {
    idFoto: number;
    imagen: string;
}

const infoCarta: InfoCarta[] = [
    {
        idFoto: 0,
        imagen: "../imagenes/2.png"
    },
    {
        idFoto: 1,
        imagen: "../imagenes/2.png"
    },
    {
        idFoto: 2,
        imagen: "../imagenes/6.png"
    },
    {
        idFoto: 3,
        imagen: "../imagenes/6.png"
    }
]

const cartas = document.querySelectorAll('[data-indice-id]');

cartas.forEach((carta) => {
    carta.addEventListener('click', () => {
        const id = parseInt(carta.getAttribute('data-indice-id')!);
        const nuevaImagen = infoCarta[id].imagen;

        const img = carta.querySelector('img');
        if (img) {
            img.setAttribute('src', nuevaImagen);
        }
    });
});
