function vueltaCarta(): void{
    const imgPerro = document.getElementById("imagen-perro");
    const imgGallina = document.getElementById("imagen-gallina");

    if (imgPerro instanceof HTMLImageElement) {
        imgPerro.addEventListener("click", () => {
            imgPerro.src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/memo/4.png";
        })
    }

    
    if (imgGallina instanceof HTMLImageElement) {
        imgGallina.addEventListener("click", () => {
            imgGallina.src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/memo/6.png";
        })
    }
}

vueltaCarta()