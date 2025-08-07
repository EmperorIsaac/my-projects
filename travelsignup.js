 
  function toggleVisibility(inputId, toggleId) {
    const input = document.getElementById(inputId);
    const toggle = document.getElementById(toggleId);
    function toggleFunc() {
      if (input.type === "password") {
        input.type = "text";
        toggle.textContent = "visibility_off";
      } else {
        input.type = "password";
        toggle.textContent = "visibility";
      }
    }
    toggle.addEventListener("click", toggleFunc);
    toggle.addEventListener("keydown", function(e) {
      if (e.key === "Enter" || e.key === " "){
        e.preventDefault();
        toggleFunc();
      }
    });
  }
  toggleVisibility("password", "togglePassword");
  toggleVisibility("confirm-password", "toggleConfirmPassword");
  
  const form = document.getElementById('signup-form');
  form.addEventListener('submit', function(e) {
    if (!form.checkValidity()) {
      e.preventDefault();
      form.reportValidity();
      return;
    }
    
    const pwd = form['password'].value;
    const cpwd = form['confirm-password'].value;
    if (pwd !== cpwd) {
      e.preventDefault();
      alert('Passwords do not match.');
      form['confirm-password'].focus();
      return;
    }
    
    alert('Sign Up successful!');
    e.preventDefault();
  });