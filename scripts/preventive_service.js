function bookService() {
    localStorage.setItem('selectedService', 'Preventive Maintenance');
    location.assign('booking.html');
}

function goBack() {
    location.assign('services.html');
}
