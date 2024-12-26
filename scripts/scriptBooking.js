// // Array to store user email and service details
// let userBookings = JSON.parse(localStorage.getItem('userBookings')) || []; // Retrieve data from localStorage if it exists, else start with an empty array

// // Function to update the cost based on the selected service
// function updateServiceCost() {
//     const service = document.getElementById('service').value;
//     const costInput = document.getElementById('cost');
//     let cost = 0;

//     switch (service) {
//         case 'Preventive Maintenance':
//             cost = 1000;
//             break;
//         case 'Body Repair':
//             cost = 5000;
//             break;
//         case 'Car care':
//             cost = 3000;
//             break;
//         default:
//             cost = 0;
//     }

//     costInput.value = cost;
// }

// // Event listener to update cost when the service selection changes
// document.getElementById('service').addEventListener('change', updateServiceCost);

// // Ensure that the value of selectedService does not change when the page reloads
// window.onload = function () {
//     // Uncomment to retain the selected service after page reload
//     // const selectedService = localStorage.getItem('selectedService');
//     // if (selectedService) {
//     //     document.getElementById('service').value = selectedService;
//     // }

//     // Ensure the date input doesn't allow past dates
//     const today = new Date();
//     const formattedDate = today.toISOString().split('T')[0]; // Get current date in YYYY-MM-DD format
//     document.getElementById('appointment-date').setAttribute('min', formattedDate); // Set min date to today
// };

// // Store selected service in localStorage when the user selects a new service
// document.getElementById('service').addEventListener('change', function () {
//     localStorage.setItem('selectedService', this.value);
// });

// // General form validation function
// function validateForm(event) {
//     // Get the form element
//     const form = document.getElementById('booking');

//     // Check if form is valid
//     if (!form.checkValidity()) {
//         event.preventDefault(); // Prevent form submission if not valid
//         alert("Please fill in all required fields correctly.");
//         return false;
//     }

//     // Get the booking details from the form fields
//     const userData = {
//         name: document.getElementById('name').value,
//         email: document.getElementById('emailId').value,
//         service: document.getElementById('service').value,
//         cost: document.getElementById('cost').value,
//         carMake: document.getElementById('car-make').value,
//         carModel: document.getElementById('car-model').value,
//         fuelType: document.querySelector('input[name="fuel-type"]:checked').value,
//         appointmentDate: document.getElementById('appointment-date').value,
//         address: document.getElementById('address').value,
//     };

//     // Push the user data object into the userBookings array
//     userBookings.push(userData);

//     // Store the updated userBookings array in localStorage
//     localStorage.setItem('userBookings', JSON.stringify(userBookings));

//     // Debugging: Log the userBookings array to the console
//     console.log(userBookings);

//     // If form is valid, redirect to the success page
//     window.location.href = './booking_success.html';
//     return true;
// }


// =======================================================================================

// // General form validation function
// function validateForm(event) {
//     // Get the form element
//     const form = document.getElementById('booking');

//     // Check if form is valid
//     if (!form.checkValidity()) {
//         event.preventDefault(); // Prevent form submission if not valid
//         alert("Please fill in all required fields correctly.");
//         return false;
//     }

//     // Get the booking details from the form fields
//     const userData = {
//         name: document.getElementById('name').value,
//         email: document.getElementById('emailId').value,
//         service: document.getElementById('service').value,
//         cost: document.getElementById('cost').value,
//         carMake: document.getElementById('car-make').value,
//         carModel: document.getElementById('car-model').value,
//         fuelType: document.querySelector('input[name="fuel-type"]:checked').value,
//         appointmentDate: document.getElementById('appointment-date').value,
//         address: document.getElementById('address').value,
//     };

//     // Push the user data object into the userBookings array
//     userBookings.push(userData);

//     // Store the updated userBookings array in localStorage
//     localStorage.setItem('userBookings', JSON.stringify(userBookings));

//     // Debugging: Log the userBookings array to the console
//     console.log(userBookings);

//     // Redirect to the booking success page
//     window.location.href = './bookingSuccess.html'; // Ensure the path is correct
//     return true;
// }




// ========================================================================

// Array to store user email and service details
let userBookings = JSON.parse(localStorage.getItem('userBookings')) || []; // Retrieve data from localStorage if it exists, else start with an empty array

// Function to update the cost based on the selected service
function updateServiceCost() {
    const service = document.getElementById('service').value;
    const costInput = document.getElementById('cost');
    let cost = 0;

    switch (service) {
        case 'Preventive Maintenance':
            cost = 1000;
            break;
        case 'Body Repair':
            cost = 5000;
            break;
        case 'Car care':
            cost = 3000;
            break;
        default:
            cost = 0;
    }

    costInput.value = cost;
}

// Event listener to update cost when the service selection changes
document.getElementById('service').addEventListener('change', updateServiceCost);

// Ensure that the value of selectedService does not change when the page reloads
window.onload = function () {
    // Uncomment to retain the selected service after page reload
    // const selectedService = localStorage.getItem('selectedService');
    // if (selectedService) {
    //     document.getElementById('service').value = selectedService;
    // }

    // Ensure the date input doesn't allow past dates
    const today = new Date();
    const formattedDate = today.toISOString().split('T')[0]; // Get current date in YYYY-MM-DD format
    document.getElementById('appointment-date').setAttribute('min', formattedDate); // Set min date to today
};

// Store selected service in localStorage when the user selects a new service
document.getElementById('service').addEventListener('change', function () {
    localStorage.setItem('selectedService', this.value);
});

// General form validation function
document.getElementById('booking').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get the form element
    const form = document.getElementById('booking');

    // Check if form is valid
    if (!form.checkValidity()) {
        alert("Please fill in all required fields correctly.");
        return false;
    }

    // Get the booking details from the form fields
    const userData = {
        name: document.getElementById('name').value,
        email: document.getElementById('emailId').value,
        service: document.getElementById('service').value,
        cost: document.getElementById('cost').value,
        carMake: document.getElementById('car-make').value,
        carModel: document.getElementById('car-model').value,
        fuelType: document.querySelector('input[name="fuel-type"]:checked').value,
        appointmentDate: document.getElementById('appointment-date').value,
        address: document.getElementById('address').value,
    };

    // Push the user data object into the userBookings array
    userBookings.push(userData);

    // Store the updated userBookings array in localStorage
    localStorage.setItem('userBookings', JSON.stringify(userBookings));

    // Debugging: Log the userBookings array to the console
    console.log(userBookings);

    // If form is valid, redirect to the success page
    window.location.href = 'booking_success.html';
});
