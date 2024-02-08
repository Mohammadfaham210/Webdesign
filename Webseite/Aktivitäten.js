function openPopup() {
    document.getElementById("anmeldePopup").style.display = "block";
}

function closeModal() {
    document.getElementById("anmeldePopup").style.display = "none";
}

function submitForm() {
    var datenschutz = document.getElementById("datenschutz").checked;
    if (!datenschutz) {
        alert("Bitte akzeptieren Sie die Datenschutzrichtlinien.");
        return;
    }

    var dankesFenster = document.getElementById("dankesFenster");
    dankesFenster.style.display = "block";

    setTimeout(function() {
        dankesFenster.style.display = "none";
    }, 3000); // Erhöht auf 3000ms für bessere Sichtbarkeit

    closeModal(); // Verwenden Sie closeModal, um das Anmeldeformular zu schließen
}

let slideIndex = 0;

function changeSlide(step) {
    const slides = document.querySelectorAll('.carousel-images img');
    slideIndex = (slideIndex + step + slides.length) % slides.length;
    slides.forEach(slide => slide.style.display = 'none');
    slides[slideIndex].style.display = 'block';
}

let videoSlideIndex = 0;

function showVideoSlide(index) {
    const videos = document.querySelectorAll('.video-container video');
    videoSlideIndex = (videoSlideIndex + index + videos.length) % videos.length; // Korrigiert für zyklisches Durchlaufen
    videos.forEach(video => video.style.display = 'none');
    videos[videoSlideIndex].style.display = 'block';
}

function changeSlideVideo(step) {
    showVideoSlide(step);
}

document.addEventListener('DOMContentLoaded', (event) => {
    showVideoSlide(0); // Initialisiert die erste Video-Slide-Anzeige
    const slides = document.querySelectorAll('.carousel-images img');
    if (slides.length > 0) slides[0].style.display = 'block'; // Initialisiert die erste Bild-Slide-Anzeige, falls vorhanden
});
