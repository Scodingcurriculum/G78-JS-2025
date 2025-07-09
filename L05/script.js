//Additional Activity -Start
// Function to map moon phase to a human-readable name
function getMoonPhaseName(phase) {
  if (phase === 0 || phase === 1) {
    return "New Moon";
  } else if (phase > 0 && phase < 0.25) {
    return "Waxing Crescent";
  } else if (phase === 0.25) {
    return "First Quarter";
  } else if (phase > 0.25 && phase < 0.5) {
    return "Waxing Gibbous";
  } else if (phase === 0.5) {
    return "Full Moon";
  } else if (phase > 0.5 && phase < 0.75) {
    return "Waning Gibbous";
  } else if (phase === 0.75) {
    return "Last Quarter";
  } else {
    return "Waning Crescent";
  }
}
//Additional Activity - ENd
// Function to display moon phases for the next 'n' days
function displayMoonPhases() {
  const daysInput = document.getElementById('days');
  const outputDiv = document.getElementById('output');
  const days = parseInt(daysInput.value);

  // Validate user input
  if (isNaN(days) || days <= 0) {
    outputDiv.textContent = "Please enter a valid positive number.";
    return;
  }

  // Clear output
  outputDiv.innerHTML = "";

  let day = 0;
  while (day < days) {
    const date = new Date();
    date.setDate(date.getDate() + day); // Move to the next day

    const moonIllumination = SunCalc.getMoonIllumination(date);
    const phase = moonIllumination.phase.toFixed(2);
    const illumination = (moonIllumination.fraction * 100).toFixed(1);
    const phaseName = getMoonPhaseName(moonIllumination.phase);

    // Display the result for each day
    const result = `Day ${day + 1}: ${phaseName} (Illumination: ${illumination}%)`;
    const paragraph = document.createElement('p');
    paragraph.textContent = result;
    outputDiv.appendChild(paragraph);

    day++;
  }
}

// Add event listener to the button
document.getElementById('checkMoonPhase').addEventListener('click', displayMoonPhases);