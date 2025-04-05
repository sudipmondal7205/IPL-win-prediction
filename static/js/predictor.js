function selectTeam(buttonId, inputId, teamName) {
    // Update the button text
    document.getElementById(buttonId).textContent = teamName;
    
    // Update the hidden input value
    document.getElementById(inputId).value = teamName;
  }
  
  function validateForm() {
    // Get form values
    const battingTeam = document.getElementById('batting_team').value;
    const bowlingTeam = document.getElementById('bowling_team').value;
    const inning = document.getElementById('inningInput').value;
    const over = document.getElementById('overInput').value;
    const ball = document.getElementById('ballInput').value;
    const runs = document.getElementById('runsInput').value;
    const wickets = document.getElementById('wicketsInput').value;
    const target = document.getElementById('targetInput').value;
  
    // Validate team selection
    if (!battingTeam || !bowlingTeam) {
      alert('Please select both batting and bowling teams');
      return false;
    }
  
    // Validate same team not selected for both
    if (battingTeam === bowlingTeam) {
      alert('Batting and bowling teams cannot be the same');
      return false;
    }
  
    // Validate inning (1 or 2)
    if (inning !== '1' && inning !== '2') {
      alert('Inning must be either 1 or 2');
      return false;
    }
  
    // Validate over (0-20)
    if (over < 0 || over > 20) {
      alert('Over must be between 0 and 20');
      return false;
    }
  
    // Validate ball (0-5)
    if (ball < 0 || ball > 5) {
      alert('Ball must be between 0 and 5');
      return false;
    }
  
    // Validate runs (non-negative)
    if (runs < 0) {
      alert('Runs cannot be negative');
      return false;
    }
  
    // Validate wickets (0-10)
    if (wickets < 0 || wickets > 10) {
      alert('Wickets must be between 0 and 10');
      return false;
    }
  
    // Validate target for 2nd inning
    if (inning === '2' && !target) {
      alert('Please enter target for 2nd inning');
      return false;
    }
  
    // If all validations pass
    return true;
  }
  
  // Add event listeners for dynamic validation
  document.addEventListener('DOMContentLoaded', function() {
    const inningInput = document.getElementById('inningInput');
    const targetInput = document.getElementById('targetInput');
    
    inningInput.addEventListener('change', function() {
      if (inningInput.value === '1') {
        targetInput.value = '0';
        targetInput.disabled = true;
      } else {
        targetInput.disabled = false;
      }
    });
    
    // // Initialize target input state
    // if (inningInput.value === '1') {
    //   targetInput.disabled = true;
    // }
  });