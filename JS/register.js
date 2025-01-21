const form = document.getElementById('registerForm');
const usernameInput = document.getElementById('username');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const usernameError = document.getElementById('usernameError');
const emailError = document.getElementById('emailError');
const phoneError = document.getElementById('phoneError');


form.addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    usernameError.style.display = 'none';
    emailError.style.display = 'none';
    phoneError.style.display = 'none';

    let isValid = true;

   
    if (usernameInput.value.trim() === "") {
        usernameError.style.display = 'inline';
        isValid = false;
    }

    
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(emailInput.value.trim())) {
        emailError.style.display = 'inline';
        isValid = false;
    }

    
    const phoneRegex = /^[0-9]{10}$/; 
    if (!phoneRegex.test(phoneInput.value.trim())) {
        phoneError.style.display = 'inline';
        isValid = false;
    }

    
        window.location.href = "http://127.0.0.1:5500/HTML/learningfacebookpage.html"; 
});


