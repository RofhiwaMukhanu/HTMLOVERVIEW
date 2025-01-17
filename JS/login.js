    
      const form = document.getElementById('loginForm');
      const usernameInput = document.getElementById('username');
      const passwordInput = document.getElementById('password');
      const usernameError = document.getElementById('usernameError');
      const passwordError = document.getElementById('passwordError');

   
      form.addEventListener('submit', function(event) {
          event.preventDefault(); // Prevent the form from submitting automatically

    
          usernameError.style.display = 'none';
          passwordError.style.display = 'none';

          let isValid = true;

      
          if (usernameInput.value.trim() === "") {
              usernameError.style.display = 'inline';
              isValid = false;
          }

          // Validate password (checks if it's empty)
          if (passwordInput.value.trim() === "") {
              passwordError.style.display = 'inline';
              isValid = false;
          }

          // If validation passes, navigate to the login page
          if (isValid) {
              // Example: Redirection to login success page
              window.location.href = "http://127.0.0.1:5500/HTML/index.html"; // Redirect to login page
          }
      });
    