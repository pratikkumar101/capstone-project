function loadBookings() {
    const bookings = JSON.parse(localStorage.getItem('userBookings')) || [];
    const tableBody = document.getElementById('table-body');
    tableBody.innerHTML = '';

    // Populate the table
    bookings.forEach((booking, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>C${String(1001 + index).padStart(4, '0')}</td>
            <td>${booking.name}</td>
            <td>${booking.service}</td>
            <td>${booking.appointmentDate}</td>
            <td>${booking.cost}</td>
        `;
        tableBody.appendChild(row);
    });
}

// Load data when the page loads
window.onload = loadBookings;
