function getFormvalue() {
  // Get the form element by its ID
  const form = document.getElementById('form1');

  // Get the values of the First and Last name inputs by their names
  const firstName = form.fname.value;
  const lastName = form.lname.value;

  // Display the values using an alert
  alert(`First Name: ${firstName}\nLast Name: ${lastName}`);
}
