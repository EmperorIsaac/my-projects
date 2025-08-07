 
  const bookLessonBtn = document.getElementById('bookLessonBtn');
  bookLessonBtn.addEventListener('click', () => {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    document.getElementById('name').focus();
  });
  
  const contactForm = document.getElementById('contactForm');
  const formMessage = document.getElementById('formMessage');
  contactForm.addEventListener('submit', e => {
    e.preventDefault();
    
    const name = contactForm.name.value.trim();
    const email = contactForm.email.value.trim();
    const message = contactForm.message.value.trim();
    if (!name || !email || !message) {
      formMessage.textContent = 'Please fill in all fields.';
      formMessage.style.color = 'red';
      return;
    }
    if (!validateEmail(email)) {
      formMessage.textContent = 'Please enter a valid email address.';
      formMessage.style.color = 'red';
      return;
    }
    
    formMessage.textContent = 'Sending your message...';
    formMessage.style.color = '#2563eb';
    setTimeout(() => {
      formMessage.textContent = 'Thank you for contacting us! We will get back to you soon.';
      formMessage.style.color = 'green';
      contactForm.reset();
    }, 1500);
  });
  function validateEmail(email) {
    
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email.toLowerCase());
  }