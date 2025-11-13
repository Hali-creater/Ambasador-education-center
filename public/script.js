// Mobile navigation menu toggle
const nav = document.querySelector('nav');
const hamburger = document.createElement('button');
hamburger.innerHTML = '&#9776;';
hamburger.addEventListener('click', () => {
    nav.classList.toggle('responsive');
});
nav.prepend(hamburger);

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});