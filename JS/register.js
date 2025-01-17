const form = document.getElementById('registerForm');
const usernameInput = document.getElementById('username');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const usernameError = document.getElementById('usernameError');
const emailError = document.getElementById('emailError');
const phoneError = document.getElementById('phoneError');

// Add event listener for form submission
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting automatically

    // Clear previous error messages
    usernameError.style.display = 'none';
    emailError.style.display = 'none';
    phoneError.style.display = 'none';

    let isValid = true;

    // Validate username: check if empty
    if (usernameInput.value.trim() === "") {
        usernameError.style.display = 'inline';
        isValid = false;
    }

    // Validate email: check if it's a valid email format
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(emailInput.value.trim())) {
        emailError.style.display = 'inline';
        isValid = false;
    }

    // Validate phone number: check if it's a valid phone number format
    const phoneRegex = /^[0-9]{10}$/; // Assuming phone numbers are 10 digits (adjust as needed)
    if (!phoneRegex.test(phoneInput.value.trim())) {
        phoneError.style.display = 'inline';
        isValid = false;
    }

    // If everything is valid, redirect to another page
    if (isValid) {
        window.location.href = "http://127.0.0.1:5502/HTML/learningfacebookpage.html"; // Redirect to learning page
    }
});


