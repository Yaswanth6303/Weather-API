function submitForm() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var subject = document.getElementById("subject").value;
  var feedback = document.getElementById("feedback").value;

  // Validate email format
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    document.getElementById("emailError").innerText = "Invalid email address";
    alert("Please enter a valid email address.");
    return;
  }

  // Clear previous error messages
  document.getElementById("emailError").innerText = "";

  if (name === "" || subject === "" || feedback === "") {
    alert("All fields are mandatory");
  } else {
    var description =
      "Form submitted!\nThank you for your feedback, " +
      name +
      "!\nAny follow-up regarding your feedback/query will be addressed to this e-mail id: ' " +
      email +
      " ' ";
    alert(description);
    // Here you can add AJAX code to send data to the server and handle the email sending process
  }
}
