// Example: Simple form validation on Contact page
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');
  if (!form) return; // no form on pages like Home or About

  const formMessage = document.getElementById('form-message');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = form.elements['name'].value.trim();
    const email = form.elements['email'].value.trim();
    const message = form.elements['message'].value.trim();

    // Basic validation
    if (!name || !email || !message) {
      formMessage.textContent = 'Please fill in all fields.';
      return;
    }

    if (!validateEmail(email)) {
      formMessage.textContent = 'Please enter a valid email address.';
      return;
    }

    // On success
    formMessage.style.color = 'green';
    formMessage.textContent = 'Thank you for contacting us!';

    // Reset form fields
    form.reset();

    // Reset message color after 3 seconds
    setTimeout(() => {
      formMessage.textContent = '';
      formMessage.style.color = 'red';
    }, 3000);
  });

  function validateEmail(email) {
    // Simple email regex pattern
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
});
