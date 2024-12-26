// Function to book a service
function bookService() {
    localStorage.setItem('selectedService', 'Preventive Maintenance');
    location.assign('booking.html');
} 

// Function to go back to the services page
function goBack() {
    location.assign('services.html');
}
