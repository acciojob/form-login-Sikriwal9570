// Define a function to handle form submission
function getFormValue() {
  // Get the form element by its ID
  const form = document.getElementById("myForm");

  // Get the values of the first and last name input fields
  const firstName = form.elements["firstName"].value;
  const lastName = form.elements["lastName"].value;

  // Check if both first and last names are filled
  if (firstName && lastName) {
    // Display the values using alert
    alert(`First Name: ${firstName}\nLast Name: ${lastName}`);
  } else {
    alert("Please fill in both first and last names.");
  }
}
