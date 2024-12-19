// Explore More
function exploreMore() {
  showLoader();
  setTimeout(() => {
    hideLoader();
    location.assign("services.html");
  }, 1000);
}

// handling login
function handleLogin(event) {
  event.preventDefault();
  showLoader();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username === "admin") {
    // Fetch admin details from user.json
    fetch('../json/users.json')
      .then(response => response.json())
      .then(adminData => {
        const admin = adminData.find(u => u.username === username && u.password === password);
        console.log(admin, "admin")
        if (admin) {
          sessionStorage.setItem("user", JSON.stringify(admin));
          hideLoader();
          showMessage("Login successful!", "success");
          setTimeout(() => {
            location.assign("home.html");
          }, 1000);
        } else {
          hideLoader();
          showMessage("Invalid username or password", "error");
        }
      })
      .catch(error => {
        hideLoader();
        showMessage("An error occurred while fetching admin data.", "error");
      });
  } else {
    // Proceed with regular user login
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
      sessionStorage.setItem("user", JSON.stringify(user));
      hideLoader();
      showMessage("Login successful!", "success");
      setTimeout(() => {
        location.assign("home.html");
      }, 1000);
    } else {
      hideLoader();
      showMessage("Invalid username or password", "error");
    }
  }
}

// handling registration
function handleRegister(event) {
  event.preventDefault();
  showLoader();
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const fullName = document.getElementById("fullName").value;
  const phone = document.getElementById("phone").value;
  const address = document.getElementById("address").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

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
  let users = JSON.parse(localStorage.getItem("users") || "[]");

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
    setTimeout(() => {
      location.assign("login.html");
    }, 2000);
  }

  hideLoader();
}

// updating navbar based on user role also for default
function updateNavbar() {
  const user = JSON.parse(sessionStorage.getItem("user"));
  const navbarNav = document.getElementById("navbarNav");
  const currentPage = location.pathname.split("/").pop();

  let navItems = "";

  if (user) {
    const userRole = user.role;
    const commonItems = `
      <li><span>Welcome, ${user.username}</span></li>
      <li><a href="home.html" ${currentPage === "home.html" ? 'class="current"' : ''}>Home</a></li>
    `;

    switch (userRole) {
      case "admin":
        navItems = `
          <ul>
            ${commonItems}
            <li><a href="reports.html" ${currentPage === "reports.html" ? 'class="current"' : ''}>Reports</a></li>
            <li><a href="#" onclick="logout()">Logout</a></li>
          </ul>
        `;
        break;
      case "user":
        navItems = `
          <ul>
            ${commonItems}
            <li><a href="services.html" ${currentPage === "services.html" ? 'class="current"' : ''}>Services</a></li>
            <li><a href="booking.html" ${currentPage === "booking.html" ? 'class="current"' : ''}>Booking</a></li>
            <li><a href="#" onclick="logout()">Logout</a></li>
          </ul>
        `;
        break;
    }
  } else {
    navItems = `
      <ul>
        <li><a href="home.html" ${currentPage === "home.html" ? 'class="current"' : ''}>Home</a></li>
        <li><a href="login.html" ${currentPage === "login.html" ? 'class="current"' : ''}>Login</a></li>
        <li><a href="register.html" ${currentPage === "register.html" ? 'class="current"' : ''}>Register</a></li>
      </ul>
    `;
  }
  navbarNav.innerHTML = navItems;
}

// logout
 function logout  () {
   showLoader();
   sessionStorage.clear();
   localStorage.removeItem('user');
   setTimeout(() => {
     hideLoader();
     showMessage("Logged out successfully!", "success"); 
    setTimeout(() => {
      window.location.href = 'home.html';
    }, 1500);
  }, 1000);
}

// loader
function showLoader() {
  document.getElementById("loader").style.display = "block";
}

// loader hide
function hideLoader() {
  document.getElementById("loader").style.display = "none";
}

// show message
function showMessage(text, type) {
  const messageElement = document.getElementById("message");
  if (messageElement) {
    messageElement.textContent = text;
    messageElement.className = type;
    messageElement.style.display = "block";
    setTimeout(() => {
      messageElement.style.display = "none";
    }, 3000);
  }
}

// toggle mobile menu
function toggleMobileMenu() {
  const nav = document.getElementById("navbarNav");
  nav.classList.toggle("active");
}

// Event listeners
document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", handleLogin);
  }

  const registerForm = document.getElementById("registerForm");
  if (registerForm) {
    registerForm.addEventListener("submit", handleRegister);
  }

  // event listener for mobile menu toggle
  const menuToggle = document.querySelector(".menu-toggle");
  if (menuToggle) {
    menuToggle.addEventListener("click", toggleMobileMenu);
  }

  updateNavbar();
});

window.addEventListener('load', updateNavbar);

