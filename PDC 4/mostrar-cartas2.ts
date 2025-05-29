/*function volteaCarta() {
    const mostrarImg = document.getElementById("imagen-leon");

    if (mostrarImg instanceof HTMLImageElement) {
        mostrarImg.addEventListener("click", () => {
            mostrarImg.src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/memo/2.png";
        });
    
    
    }
}
    function vueltaCarta() {
    const muestraImg = document.getElementById("imagen-perro");
    if (muestraImg instanceof HTMLImageElement) {
        muestraImg.addEventListener("click", () => {
            muestraImg.src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/memo/2.png";
        });
    }
}

vueltaCarta();
    
*/

function vueltaCarta(): void{
    const imgPerro = document.getElementById("imagen-perro");
    const imgGallina = document.getElementById("imagen-gallina");

    if (imgPerro instanceof HTMLImageElement) {
        imgPerro.addEventListener("click", () => {
            imgPerro.src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/memo/6.png";
        })
    }

    
    if (imgGallina instanceof HTMLImageElement) {
        imgGallina.addEventListener("click", () => {
            imgGallina.src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/memo/5.png";
        })
    }
}

vueltaCarta()