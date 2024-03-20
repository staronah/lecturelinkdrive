function validateForm() {
  var password = document.getElementById("txtPassword").value;
  if (password === "FOS6606" || password === "FOE8612") {
      // Correct password, redirect to log.html
      window.location.href = "log.html";
      return false; // Prevent form submission
  } else {
      // Incorrect password, display error message
      document.getElementById("lblErrorMessage").innerHTML = "Incorrect password. Please try again.";
      return false; // Prevent form submission
  }
}
