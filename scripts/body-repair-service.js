// Function to book the service and store the selected service in localStorage
function bookService() {
    localStorage.setItem('selectedService', 'Preventive Maintenance');
    location.assign('booking.html'); // muskan will provide the link to me
}

// Function to navigate back to the previous page (services page)
function goBack() {
    location.assign('services.html');
}
