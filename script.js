// =========== about me function==================

function scrollToTop() {
  window.scrollTo(0, 0);
}

function contactMeAlert() {
  alert("Please contact me too see implementation of this project!");
}

// ===========Contact me Function ==================

function showAlert() {
  if (
    document.getElementById("name").value == "" &&
    document.getElementById("email").value == ""
  ) {
    alert("Please Enter Your Name and Email!");
  } else if (document.getElementById("name").value == "") {
    alert("Please Enter Your Name!");
  } else if (document.getElementById("email").value == "") {
    alert("Please Enter Your Email!");
  }
  if (
    document.getElementById("name").value &&
    document.getElementById("email").value
  ) {
    alert("Submitted! I'm very excited to contact you soon!");
  }
}
