// Filter Images

function filterImages(category) {

    let images = document.querySelectorAll(".image");

    images.forEach(image => {

        if (category === "all") {
            image.style.display = "block";
        } else {

            if (image.classList.contains(category)) {
                image.style.display = "block";
            } else {
                image.style.display = "none";
            }

        }

    });

}


// Lightbox Functionality

const galleryImages = document.querySelectorAll(".gallery img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".close");

galleryImages.forEach(image => {

    image.addEventListener("click", () => {

        lightbox.style.display = "flex";
        lightboxImg.src = image.src;

    });

});


// Close Button

closeBtn.addEventListener("click", () => {

    lightbox.style.display = "none";

});


// Close when clicking outside image

lightbox.addEventListener("click", (e) => {

    if (e.target === lightbox) {
        lightbox.style.display = "none";
    }

});


// ESC Key Support

document.addEventListener("keydown", (e) => {

    if (e.key === "Escape") {
        lightbox.style.display = "none";
    }

});