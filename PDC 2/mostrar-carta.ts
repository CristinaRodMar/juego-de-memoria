function volteaCarta() {
    const mostrarImg = document.getElementById("imagen-leon");

    if (mostrarImg instanceof HTMLImageElement) {
        mostrarImg.addEventListener("click", () => {
            mostrarImg.src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/memo/2.png";
        });
    
    
    }
}

volteaCarta();
