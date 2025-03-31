function selectTeam(buttonId, inputId, teamName) {
    document.getElementById(buttonId).innerText = teamName;
    console.log(teamName)
    document.getElementById(inputId).value = teamName;
}
