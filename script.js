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

// ==========================Blog===========================

var slidePosition = 1;
SlideShow(slidePosition);

// forward/Back controls
function plusSlides(n) {
  SlideShow((slidePosition += n));
}

//  images controls
function currentSlide(n) {
  SlideShow((slidePosition = n));
}

function SlideShow(n) {
  var i;
  var slides = document.getElementsByClassName("Containers");
  var circles = document.getElementsByClassName("dots");
  if (n > slides.length) {
    slidePosition = 1;
  }
  if (n < 1) {
    slidePosition = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < circles.length; i++) {
    circles[i].className = circles[i].className.replace(" enable", "");
  }
  slides[slidePosition - 1].style.display = "block";
  circles[slidePosition - 1].className += " enable";
}

var slidePosition = 0;
SlideShow();

function SlideShow() {
  var i;
  var slides = document.getElementsByClassName("Containers");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slidePosition++;
  if (slidePosition > slides.length) {
    slidePosition = 1;
  }
  slides[slidePosition - 1].style.display = "block";
  setTimeout(SlideShow, 2000); // Change image every 2 seconds
}
