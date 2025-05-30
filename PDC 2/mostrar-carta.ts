function volteaCarta() {
    const mostrarImg = document.getElementById("imagen-leon");

    if (mostrarImg instanceof HTMLImageElement) {
        mostrarImg.addEventListener("click", () => {
            mostrarImg.src = "../imagenes/2.png";
        });
    
    
    }
}

volteaCarta();
