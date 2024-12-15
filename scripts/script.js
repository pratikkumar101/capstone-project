// Explore More
function exploreMore() {
  showLoader();
  setTimeout(() => {
    hideLoader();
    location.assign("services.html");
  }, 1000);
}

// handling login
async function handleLogin(event) {
  event.preventDefault();
  showLoader();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  try {
    const response = await fetch("../json/users.json");
    const users = await response.json();

    const user = users.find(
      (u) => u.username === username && u.password === password
    );

    if (user) {
      sessionStorage.setItem("user", JSON.stringify(user));
      hideLoader();
      alert("Login successful!");
      location.assign("home.html");
    } else {
      hideLoader();
      alert("Invalid username or password");
    }
  } catch (error) {
    console.error("Error:", error);
    hideLoader();
    alert("An error occurred. Please try again.");
  }
}

// updating navbar based on user role also for default
function updateNavbar() {
  const user = JSON.parse(sessionStorage.getItem("user"));
  console.log("NAV BAR UPDATED");
  const navbarNav = document.getElementById("navbarNav");
  let navItems = "";

  if (user) {
    const userRole = user.role;

    switch (userRole) {
      case "admin":
        navItems = `
                    <ul>
                        <li><span>Welcome, ${user.username}</span></li>
                        <li><a href="home.html">Home</a></li>
                        <li><a href="reports.html">Reports</a></li>
                        <li><a href="#" onclick="logout()">Logout</a></li>
                    </ul>
                `;
        break;
      case "user":
        navItems = `
                    <ul>
                        <li><span>Welcome, ${user.username}</span></li>
                        <li><a href="home.html">Home</a></li>
                        <li><a href="services.html">Services</a></li>
                        <li><a href="booking.html">Booking</a></li>
                        <li><a href="#" onclick="logout()">Logout</a></li>
                    </ul>
                `;
        break;
    }

}
else {
    navItems = `<ul>
    <li><a href="home.html" class="current">Home</a></li>
    <li><a href="login.html">Login</a></li>
    </ul>`;
}
navbarNav.innerHTML = navItems;
}

// logout
function logout() {
  showLoader();
  sessionStorage.clear();
  setTimeout(() => {
    hideLoader();
    alert("Logged out successfully");
    location.assign("home.html");
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

  updateNavbar();

  // event listener for mobile menu toggle
  const menuToggle = document.querySelector(".menu-toggle");
  if (menuToggle) {
    menuToggle.addEventListener("click", toggleMobileMenu);
  }
});
