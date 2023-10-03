function getFormvalue() {
  // Get the form element by its ID
  const form = document.getElementById('form1');

  // Get the values of the First and Last name inputs by their names
  const firstName = form.elements.fname.value;
  const lastName = form.elements.lname.value;

  // Display the values using an alert
  alert(`First Name: ${firstName}\nLast Name: ${lastName}`);
}

// Prevent the form from submitting and call the getFormvalue function
document.getElementById('form1').addEventListener('submit', function (event) {
  event.preventDefault();
  getFormvalue();
});
