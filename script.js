document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let isValid = true;
  
    // Clear previous error messages
    document.querySelectorAll('.error-message').forEach((el) => el.style.display = 'none');
  
    // Validate first name
    const firstName = document.getElementById('firstName');
    const firstNameError = document.getElementById('firstNameError');
    if (!firstName.value.trim()) {
      firstNameError.style.display = 'block';
      isValid = false;
    }
  
    // Validate last name
    const lastName = document.getElementById('lastName');
    const lastNameError = document.getElementById('lastNameError');
    if (!lastName.value.trim()) {
      lastNameError.style.display = 'block';
      isValid = false;
    }
  
    // Validate email
    const email = document.getElementById('email');
    const emailError = document.getElementById('emailError');
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.value.trim() || !emailPattern.test(email.value)) {
      emailError.style.display = 'block';
      isValid = false;
    }
  
    // Validate query type
    const queryType = document.querySelector('input[name="queryType"]:checked');
    if (!queryType) {
      document.getElementById('generalEnquiry').parentElement.parentElement.nextElementSibling.style.display = 'block';
      isValid = false;
    }
  
    // Validate message
    const message = document.getElementById('message');
    const messageError = document.getElementById('messageError');
    if (!message.value.trim()) {
      messageError.style.display = 'block';
      isValid = false;
    }
  
    // Validate consent
    const consent = document.getElementById('consent');
    const consentError = document.getElementById('consentError');
    if (!consent.checked) {
      consentError.style.display = 'block';
      isValid = false;
    }
  
    // Submit form if valid
    if (isValid) {
      alert('Form submitted successfully!');
      this.submit();
    }
  });
  