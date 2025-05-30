function vueltaCarta(): void{
    const imgPerro = document.getElementById("imagen-perro");
    const imgGallina = document.getElementById("imagen-gallina");

    if (imgPerro instanceof HTMLImageElement) {
        imgPerro.addEventListener("click", () => {
            imgPerro.src = "../imagenes/4.png";
        })
    }

    
    if (imgGallina instanceof HTMLImageElement) {
        imgGallina.addEventListener("click", () => {
            imgGallina.src = "../imagenes/6.png";
        })
    }
}

vueltaCarta()