document.addEventListener('DOMContentLoaded', function () {
    // Слайдер отзывов
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');
    const prevButton = document.querySelector('.slider-btn.prev');
    const nextButton = document.querySelector('.slider-btn.next');

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove('active');
            if (i === index) slide.classList.add('active');
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    showSlide(currentSlide);

    if (nextButton) nextButton.addEventListener('click', nextSlide);
    if (prevButton) prevButton.addEventListener('click', prevSlide);

    // Функция для управления FAQ
    window.toggleFAQ = function (index) {
        const faqElement = document.getElementById(`faq${index}`);
        if (faqElement) {
            faqElement.classList.toggle('hidden');
        }
    };
});

// JavaScript для управления кнопкой-гамбургером
document.addEventListener('DOMContentLoaded', function () {
    const toggler = document.querySelector('.navbar-toggler');
    const togglerIcon = toggler.querySelector('.navbar-toggler-icon');

    // Обработчик нажатия на гамбургер
    toggler.addEventListener('click', function () {
        // Переключение класса активного состояния
        togglerIcon.classList.toggle('active');

        // Изменение атрибута aria-expanded
        const isExpanded = toggler.getAttribute('aria-expanded') === 'true';
        toggler.setAttribute('aria-expanded', !isExpanded);
    });
});
