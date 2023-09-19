function classifyAge() {
  // Initialize the output text
  var outputText;

  // Get the age input value from the text field
  var ageText = document.getElementById("txtAge").value;

  // Convert the age input to a number
  var age = Number(ageText);

  // Check if the age input is empty or not a number
  if (ageText.trim() === "" || isNaN(age)) {
    // Display an error message for invalid input
    outputText = "Please enter a valid integer between 0 and 122.";
  } else if (age < 0 || age > 122) {
    // Check if the age is out of the valid range
    outputText = "The age should be between 0 and 122.";
  } else if (age < 18) {
    // Check if the age indicates a minor
    outputText = "You're a minor.";
  } else {
    // The age is valid and indicates an adult
    outputText = "You're an adult.";
  }

  // Display the output text in the HTML element with id "pOutput"
  document.getElementById("pOutput").innerHTML = outputText;
}
