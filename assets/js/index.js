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


document.addEventListener('DOMContentLoaded', () => {
    const fullnameInput = document.getElementById('fullname');
    const emailInput = document.getElementById('email');
    const numberInput = document.getElementById('number');
    const successMessage = document.getElementById('successMessage');

    fullnameInput.addEventListener('input', validateFullName);
    emailInput.addEventListener('input', validateEmail);
    numberInput.addEventListener('input', validatePhoneNumber);

    function validateFullName() {
        const fullname = fullnameInput.value.trim();
        if (fullname === '') {
            fullnameInput.classList.add('invalid');
        } else {
            fullnameInput.classList.remove('invalid');
        }
    }

    function validateEmail() {
        const email = emailInput.value.trim();
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (email === '' || !emailPattern.test(email)) {
            emailInput.classList.add('invalid');
        } else {
            emailInput.classList.remove('invalid');
        }
    }

    function validatePhoneNumber() {
        const phoneNumber = numberInput.value.trim();
        const phonePattern = /^[0-9]+$/;
        if (phoneNumber === '' || !phonePattern.test(phoneNumber)) {
            numberInput.classList.add('invalid');
        } else {
            numberInput.classList.remove('invalid');
        }
    }

    window.clearForm = function() {
        validateFullName();
        validateEmail();
        validatePhoneNumber();

        const isValidForm = document.querySelectorAll('input.invalid, select.invalid').length === 0;
        if (isValidForm) {
            document.getElementById('myForm').reset();
            successMessage.style.display = 'block';
            setTimeout(() => {
                successMessage.style.display = 'none';
            }, 3000);
        }
    }
});


