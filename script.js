const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

// Toggle navbar on click
menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');
});

// 👇 CLOSE navbar when any nav link is clicked
document.querySelectorAll('#navLinks a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('nav-active');
    });
});

// 👇 CLOSE navbar on scroll
window.addEventListener('scroll', () => {
    navLinks.classList.remove('nav-active');
});

// Appear on scroll animation
const animatedSections = document.querySelectorAll('.appear');
function revealOnScroll() {
    animatedSections.forEach(section => {
        const top = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (top < windowHeight - 80) {
            section.classList.add('visible');
        }
    });
}
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// Contact form message
// document.getElementById('contactForm').addEventListener('submit', function (e) {
//     e.preventDefault();
//     document.getElementById('formMessage').textContent = 'Thank you for reaching out! I will get back to you soon.';
//     this.reset();
// });
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  document.getElementById('formMessage').textContent = 'Thank you for reaching out! I will get back to you soon.';
  this.reset();
});


