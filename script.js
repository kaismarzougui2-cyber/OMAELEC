// Mobile burger menu
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Close menu on link click
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// Sticky nav highlight on scroll
const nav = document.querySelector('.nav');
window.addEventListener('scroll', () => {
  nav.style.background = window.scrollY > 10
    ? 'rgba(17,17,17,0.98)'
    : 'rgba(17,17,17,0.95)';
});

// Contact form mock submit
function handleSubmit(e) {
  e.preventDefault();
  const success = document.getElementById('formSuccess');
  success.style.display = 'block';
  e.target.reset();
  setTimeout(() => { success.style.display = 'none'; }, 5000);
}

// Fade-in on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.card, .stat, .irve-badge, .contact-item').forEach(el => {
  el.classList.add('fade-in');
  observer.observe(el);
});
