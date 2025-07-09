function startTest() {
  startTime = new Date();
  document.getElementById('result').textContent = "Test started! Type the sentence below.";
  document.getElementById('userInput').value = "";
}



function calculateSpeed() {
  endTime = new Date();
  const timeTaken = (endTime - startTime) / 1000;
  const userInput = document.getElementById('userInput').value.trim();
  const referenceText = document.getElementById('referenceText').textContent.trim();

  if (userInput === "") {
    document.getElementById('result').textContent = "You didn't type anything! Please try again.";
    return;
  }

  const wordCount = userInput.split(/\s+/).length;
  const speed = (wordCount / timeTaken * 60).toFixed(2);

  // Accuracy calculation
  const userWords = userInput.split(/\s+/);
  const referenceWords = referenceText.split(/\s+/);
  let correctWords = 0;

  for (let i = 0; i < Math.min(userWords.length, referenceWords.length); i++) {
    if (userWords[i] === referenceWords[i]) {
      correctWords++;
    }
  }

  const accuracy = ((correctWords / referenceWords.length) * 100).toFixed(2);

  document.getElementById('result').innerHTML = `
    <p>You typed ${wordCount} words in ${timeTaken.toFixed(2)} seconds.</p>
    <p>Your typing speed is <strong>${speed} words per minute</strong>.</p>
    <p>Your accuracy is <strong>${accuracy}%</strong>.</p>
  `;
}