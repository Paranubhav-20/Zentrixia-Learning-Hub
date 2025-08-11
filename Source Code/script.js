// Mobile Menu toggle
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

menuBtn.addEventListener('click', () => {
  const expanded = menuBtn.getAttribute('aria-expanded') === 'true' || false;
  menuBtn.setAttribute('aria-expanded', !expanded);
  mobileMenu.classList.toggle('hidden');
});

// Navbar shadow on scroll
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 10) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Join Form Validation and Feedback
const joinForm = document.getElementById('joinForm');
const formResponse = document.getElementById('formResponse');

joinForm.addEventListener('submit', (e) => {
  e.preventDefault();
  formResponse.textContent = "";
  const name = joinForm.name.value.trim();
  const email = joinForm.email.value.trim();
  const course = joinForm.course.value;
  if (!name || !email || !course) {
    formResponse.textContent = "Please fill in all fields.";
    formResponse.classList.add("text-red-600");
    formResponse.classList.remove("text-green-600");
    return;
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    formResponse.textContent = "Please enter a valid email address.";
    formResponse.classList.add("text-red-600");
    formResponse.classList.remove("text-green-600");
    return;
  }
  formResponse.textContent = "Thank you for joining! We will contact you soon.";
  formResponse.classList.add("text-green-600");
  formResponse.classList.remove("text-red-600");
  joinForm.reset();
});

// Newsletter subscribe form
const newsletterForm = document.getElementById('newsletterForm');
const newsletterResponse = document.getElementById('newsletterResponse');

newsletterForm.addEventListener('submit', (e) => {
  e.preventDefault();
  newsletterResponse.textContent = "";
  const emailInput = newsletterForm.querySelector('input[type=email]');
  const email = emailInput.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    newsletterResponse.textContent = "Please enter a valid email address.";
    newsletterResponse.classList.remove("text-green-400");
    newsletterResponse.classList.add("text-red-400");
    return;
  }
  newsletterResponse.textContent = "Thank you for subscribing to our newsletter!";
  newsletterResponse.classList.add("text-green-400");
  newsletterResponse.classList.remove("text-red-400");
  newsletterForm.reset();
});

