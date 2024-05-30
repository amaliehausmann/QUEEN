let slideIndex = 0;
const slides = document.querySelectorAll('.gallery-image');
const dots = document.querySelectorAll('.dot');

function showSlide(index) {
    slides.forEach((slide, i) => {
        if (i === index) {
            slide.classList.remove('inactive');
            slide.classList.add('active');
            slide.style.display = 'block';
        } else {
            slide.classList.remove('active');
            slide.classList.add('inactive');
            setTimeout(() => {
                slide.style.display = 'none';
            }, 1000); // Wait for the fadeOut animation to finish before hiding
        }
    });
    dots.forEach((dot, i) => {
        dot.classList.toggle('active-dot', i === index);
    });
}

function nextSlide() {
    slideIndex = (slideIndex + 1) % slides.length;
    showSlide(slideIndex);
}

function currentSlide(index) {
    slideIndex = index;
    showSlide(slideIndex);
}

setInterval(nextSlide, 3000); // Change image every 3 seconds

document.addEventListener('DOMContentLoaded', () => {
    showSlide(slideIndex);
});
