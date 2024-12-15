# AutoMob-Mechanic Website - Capstone Project  

**Contributor1: Pratik Kumar**

This project is for the **AutoMob-Mechanic** website, an online platform for learning about the company and accessing services. Key contributions:

1. **Home Page (home.html)**:
   - Displayed company info and added an **Explore More** button that redirects to **services.html** using JavaScript.

2. **Login Page (login.html)**:
   - Created a login form with **username** and **password** validation from a **JSON array**.
   - Redirected users to **home.html** on successful login, displaying their name in the **navbar**.

3. **Dynamic Navbar**:
   - Navbar updates based on user roles (admin/user) using **localStorage**.
   - **Admin**: Includes links to **Admin Panel**, **Manage Users**, **Reports**.
   - **User**: Includes links to **Services**, **Booking**, **Logout**.

4. **User/Admin Panels**:
   - **Admin Panel**: Manages users, views reports, and more.
   - **User Panel**: Books services and views service history.

5. **Consistent Navbar & Footer**:
   - Shared across all pages for a uniform design. The navbar adapts dynamically after login.

### Key Technologies:
- **localStorage**: Stores user info and roles for personalized navigation.
- **JavaScript**: For event handling, dynamic updates, and redirection.

This project enhances user experience with role-based customization and streamlined access to key features.
