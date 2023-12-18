/* Dominic Yuschyshyn - ID#3123230 - DESN 340 - Project 4 - JS */

//Broke last minute :(
window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.navbar');
  const navbarOffsetTop = navbar.offsetTop;

  if (window.pageYOffset >= navbarOffsetTop) {
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');
  }

  // Check if scrolled back to the top
  if (window.pageYOffset === 0) {
    navbar.classList.remove('sticky');
  }
});

// Get the countdown element and the preregister button element
  const countdownElement = document.getElementById('countdown');
  const preregisterButton = document.getElementById('preregister');

  // Start the countdown
  let countdown = 30;
  countdownElement.textContent = countdown;

  const countdownInterval = setInterval(() => {
    countdown--;
    countdownElement.textContent = countdown;

    // Check if the countdown has reached 0
    if (countdown === 0) {
      // Enable the preregister button
      preregisterButton.disabled = false;

      // Clear the countdown interval
      clearInterval(countdownInterval);
    }
  }, 1000);

// Get the countdown element and the preregister button element
  const countdownElement2 = document.getElementById('countdown2');
  const preregisterButton2 = document.getElementById('preregister2');

  // Start the countdown
  let countdown2 = 30;
  countdownElement2.textContent = countdown2;

  const countdownInterval2 = setInterval(() => {
    countdown2--;
    countdownElement2.textContent = countdown2;

    // Check if the countdown has reached 0
    if (countdown2 === 0) {
      // Enable the preregister button
      preregisterButton2.disabled = false;

      // Clear the countdown interval
      clearInterval(countdownInterval2);
    }
  }, 1000);


