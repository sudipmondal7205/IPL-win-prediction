function selectTeam(buttonId, inputId, teamName) {
    document.getElementById(buttonId).innerText = teamName;
    console.log(teamName)
    document.getElementById(inputId).value = teamName;
}
console.log("JS file loaded");


function validateForm() {
    // Get all required inputs
    const battingTeam = document.getElementById('batting_team').value;
    const bowlingTeam = document.getElementById('bowling_team').value;
    const inning = document.getElementById('inningInput').value;
    const over = document.getElementById('overInput').value;
    const ball = document.getElementById('ballInput').value;
    const runs = document.getElementById('runsInput').value;

    // Clear previous error messages
    clearErrors();

    // Validate each field
    let isValid = true;

    if (!battingTeam) {
        showError('teamButton1', 'Please select batting team');
        isValid = false;
    }

    if (!bowlingTeam) {
        showError('teamButton2', 'Please select bowling team');
        isValid = false;
    }

    if (!inning) {
        showError('inningInput', 'Please enter inning number');
        isValid = false;
    }

    if (!over) {
        showError('overInput', 'Please enter over number');
        isValid = false;
    }

    if (!ball) {
        showError('ballInput', 'Please enter ball number');
        isValid = false;
    }

    if (!runs) {
        showError('runsInput', 'Please enter runs');
        isValid = false;
    }

    return isValid;
}

function showError(elementId, message) {
    const element = document.getElementById(elementId);
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.style.color = 'red';
    errorDiv.style.fontSize = '0.8rem';
    errorDiv.style.marginTop = '0.2rem';
    errorDiv.textContent = message;
    element.parentNode.appendChild(errorDiv);
}

function clearErrors() {
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(error => error.remove());
}