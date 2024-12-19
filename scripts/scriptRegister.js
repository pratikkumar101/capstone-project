document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');

    menuToggle.addEventListener('click', function() {
        nav.classList.toggle('active');
    });

    const registerForm = document.getElementById('registerForm');
    const loader = document.getElementById('loader');
    const message = document.getElementById('message');

    // Initialize users array in localStorage if it doesn't exist
    if (!localStorage.getItem('users')) {
        localStorage.setItem('users', JSON.stringify([]));
    }

    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            loader.style.display = 'block';
            message.innerHTML = '';
            message.className = '';

            const username = document.getElementById('username').value;
            const email = document.getElementById('email').value;
            const fullName = document.getElementById('fullName').value;
            const phone = document.getElementById('phone').value;
            const address = document.getElementById('address').value;
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirmPassword').value;

            // Validate email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                showMessage('Please enter a valid email address.', 'error');
                return;
            }

            // Validate phone number (exactly 10 digits)
            const phoneRegex = /^\d{10}$/;
            if (!phoneRegex.test(phone)) {
                showMessage('Please enter a valid 10-digit phone number.', 'error');
                return;
            }

            // Validate password
            const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
            if (!passwordRegex.test(password)) {
                showMessage('Password must be at least 8 characters long and include at least one capital letter, one number, and one special character.', 'error');
                return;
            }

            // Check if passwords match
            if (password !== confirmPassword) {
                showMessage('Passwords do not match.', 'error');
                return;
            }

            // Get existing users from localStorage
            let users = JSON.parse(localStorage.getItem('users'));

            // Check if user already exists
            const userExists = users.some(user => user.username === username || user.email === email);

            if (userExists) {
                showMessage('Username or email already exists.', 'error');
            } else {
                // Add new user
                users.push({
                    username,
                    email,
                    fullName,
                    phone,
                    address,
                    password,
                    role: 'user'
                });

                // Save updated users array back to localStorage
                localStorage.setItem('users', JSON.stringify(users));

                showMessage('Registration successful! Redirecting to login page...', 'success');
                registerForm.reset();
                
                // Redirect to login page after 2 seconds
                setTimeout(function() {
                    window.location.href = 'login.html';
                }, 2000);
            }

            loader.style.display = 'none';
        });
    }

    function showMessage(text, type) {
        loader.style.display = 'none';
        message.innerHTML = text;
        message.className = type;
        message.scrollIntoView({ behavior: 'smooth' });
    }
});

