// Loading Animation
window.addEventListener('load', () => {
    const loader = document.querySelector('.loader');
    loader.classList.add('hidden');
  });
  
  // Theme Toggle
  const themeToggle = document.getElementById('theme-toggle');
  const body = document.body;
  
  themeToggle.addEventListener('click', () => {
    body.classList.toggle('light-theme');
    const isLightTheme = body.classList.contains('light-theme');
    themeToggle.innerHTML = isLightTheme ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
    localStorage.setItem('theme', isLightTheme ? 'light' : 'dark');
  });
  
  // Set theme on page load
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light') {
    body.classList.add('light-theme');
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
  }
  
  // Smooth Scroll
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Scroll Animations and Active Navigation
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-links a'); // Declare navLinks once
  
  const checkVisibility = () => {
    sections.forEach((section, index) => {
      const sectionTop = section.getBoundingClientRect().top;
      const sectionBottom = section.getBoundingClientRect().bottom;
      if (sectionTop < window.innerHeight * 0.75 && sectionBottom > 0) {
        section.classList.add('visible');
        navLinks[index].classList.add('active');
      } else {
        navLinks[index].classList.remove('active');
      }
    });
  };
  
  window.addEventListener('scroll', checkVisibility);
  window.addEventListener('load', checkVisibility);
  
  // Contact Form Submission
  const contactForm = document.getElementById('contact-form');
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for your message!');
    contactForm.reset();
  });
  
  // Hamburger Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinksContainer = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinksContainer.classList.toggle('active');
});

// Close Navbar when a link is clicked (for mobile)
navLinksContainer.addEventListener('click', (e) => {
  if (e.target.tagName === 'A' && window.innerWidth <= 768) {
    navLinksContainer.classList.remove('active');
  }
});