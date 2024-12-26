function navigateToDetails() {
    location.assign('preventive_service.html');
}

function nvigate2details() { 
    location.assign('body-repair-service.html');
}

function nav2Details() { 
    location.assign('car-care-service.html');
}

const timerElement = document.getElementById('offer-timer');
let remainingTime = 600;

function updateTimer() {
    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;
    timerElement.textContent = `**Offer ends in: ${minutes}m:${seconds < 10 ? '0' : ''}${seconds}s`;

    if (remainingTime > 0) {
        remainingTime--;
    } else {
        clearInterval(timerInterval);
        timerElement.textContent = '**Offer has ended';
    }
}

const timerInterval = setInterval(updateTimer, 1000);
