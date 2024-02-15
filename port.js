// Custom Alert Popup
const customAlert = document.getElementById('js-custom-alert');

function showAlert(message) {
    document.getElementById('alert-message').innerHTML = message;
    customAlert.style.display = 'block';
}

function hideAlert() {
    customAlert.style.display = 'none';
}

customAlert.addEventListener('click', hideAlert);

// Copying the discord username into the clipboard
const discordBox = document.querySelector('.discord-box');
const base = document.querySelector('.base');

discordBox.addEventListener('click', function() {
    const username = document.querySelector('.dc-nick').textContent;

    navigator.clipboard.writeText(username)
        .then(() => {
            let message = 'Discord username ' + username + ' copied to clipboard!';

            if (window.innerHeight > 825) {
                message = 'Discord username ' + username + ' <br> copied to clipboard!';
            }
            
            showAlert(message);
            
        })
        .catch(err => {
            console.error('Failed to copy: ', err);
        });
});

// The Timer on the Website
function updateDateTime() {
    const now = new Date(); 

    // Selecting elements with id "date" & "time"
    const dateElement = document.getElementById('date');
    const timeElement = document.getElementById('time');

    // Date and time format using toLocaleDateString() & toLocaleTimeString()
    const dateOptions = { year: 'numeric', month: 'long', day: 'numeric', locale: 'en-US'};

    const timeOptions = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };

    // Set the text content of the selected elements with the formatted date
    dateElement.textContent = now.toLocaleDateString('en-US', dateOptions);
    timeElement.textContent = now.toLocaleTimeString(undefined, timeOptions);
}

updateDateTime();
setInterval(updateDateTime, 1000);
