
document.addEventListener('DOMContentLoaded', () => {
  const preferredDateInput = document.getElementById('preferredDate');
  if (preferredDateInput) {
    const today = new Date().toISOString().split('T')[0];
    preferredDateInput.setAttribute('min', today);
  }
});

const signupForm = document.getElementById('signupForm');
const formMessage = document.getElementById('formMessage');

signupForm.addEventListener('submit', (e) => {
  e.preventDefault();


  const fullName = signupForm.fullName.value.trim();
  const email = signupForm.email.value.trim();
  const phone = signupForm.phone.value.trim();
  const course = signupForm.course.value;
  const preferredDate = signupForm.preferredDate.value;

 
  if (!fullName || !email || !phone || !course || !preferredDate) {
    showMessage('Please fill in all required fields.', 'red');
    return;
  }

  
  if (!validateEmail(email)) {
    showMessage('Please enter a valid email address.', 'red');
    return;
  }

  
  if (!validatePhone(phone)) {
    showMessage('Please enter a valid phone number (e.g. +1 555 123 4567).', 'red');
    return;
  }

  
  if (new Date(preferredDate) < new Date(new Date().toISOString().split('T')[0])) {
    showMessage('Preferred lesson date cannot be in the past.', 'red');
    return;
  }

  showMessage('Submitting your registration...', '#2563eb');

  setTimeout(() => {
    showMessage('Thank you for signing up! We will contact you soon.', 'green');
    signupForm.reset();
  }, 1500);
});

function showMessage(message, color) {
  formMessage.textContent = message;
  formMessage.style.color = color;
}

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email.toLowerCase());
}

function validatePhone(phone) {
  
  const phonePattern = /^\+?[\d\s\-]{7,15}$/;
  return phonePattern.test(phone);
}