// =========== about me function==================

function scrollToTop() {
  window.scrollTo(0, 0);
}

// ===========Contact me Function ==================

function showAlert() {
  if (
    document.getElementById("name").value &&
    document.getElementById("email").value
  ) {
    alert("Submitted! I'm very excited to contact you soon!");
  }
}
