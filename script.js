document.addEventListener("DOMContentLoaded", function() {
    let images = document.querySelectorAll("#carousel img");
    // Initialise les classes pour les images
    if(images.length >= 3) {
        images[0].classList.add('left');
        images[1].classList.add('center');
        images[2].classList.add('right');
    }

    function rotateImages() {
        // Trouve l'index de l'image actuellement au centre
        const currentCenterIndex = Array.from(images).findIndex(img => img.classList.contains('center'));
        images.forEach(img => img.classList.remove('left', 'center', 'right'));

        // Calcule les nouveaux indices pour les classes left, center, et right
        const newCenterIndex = (currentCenterIndex + 1) % images.length;
        const newLeftIndex = (newCenterIndex - 1 + images.length) % images.length;
        const newRightIndex = (newCenterIndex + 1) % images.length;

        // Applique les nouvelles classes
        images[newLeftIndex].classList.add('left');
        images[newCenterIndex].classList.add('center');
        images[newRightIndex].classList.add('right');
    }

    setInterval(rotateImages, 3000); // Change l'image mise en avant toutes les 3 secondes
});