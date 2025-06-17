// Set the current year for the footer
var year = new Date().getFullYear();
var date = ` Privacy Statement: SheFit Fitness Gym is committed to protecting your personal information. We do not share or sell your details to any third parties.
<br> &copy; Mphatso Phiri Codes ${year}. All Rights Reserved.`;
document.getElementsByTagName('footer')[0].innerHTML = date;

// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault(); // Prevent default jump
    const targetId = link.getAttribute('href').substring(1);
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Animate welcome text on page load
window.addEventListener('DOMContentLoaded', () => {
  const welcomeText = document.querySelector('.welcome-text');
  if (welcomeText) {
    welcomeText.style.opacity = '1';
    welcomeText.style.transform = 'translateY(0) scale(1)';
  }
});

// Function to provide voice feedback using Web Speech API
function speak(message) {
  if (!('speechSynthesis' in window)) return; // Exit if API is unsupported
  const utterance = new SpeechSynthesisUtterance(message);
  utterance.lang = 'en-US'; // Set language to English US
  window.speechSynthesis.speak(utterance);
}

// Listen for form submission event on the enquiry form
document.getElementById('enquiry-form').addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent the default form submission behavior

  const form = e.target; // Reference to the form element
  const name = form.name;
  const email = form.email;
  const comments = form.comments;

  let isValid = true; // Flag to track overall form validity

  // Clear previous invalid styles and error indications
  [name, email, comments].forEach(field => {
    field.classList.remove('invalid');
  });

  // Validate Name (required, minimum 2 characters)
  if (!name.value.trim() || name.value.trim().length < 2) {
    name.classList.add('invalid');
    isValid = false;
  }

  // Validate Email (required, simple regex check)
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email.value.trim() || !emailPattern.test(email.value.trim())) {
    email.classList.add('invalid');
    isValid = false;
  }

  // Validate Comments (required, minimum 10 characters)
  if (!comments.value.trim() || comments.value.trim().length < 10) {
    comments.classList.add('invalid');
    isValid = false;
  }

  const popup = document.getElementById('popup'); // The pop-up div for messages

  if (isValid) {
    // If form is valid, display success message and speak it
    popup.textContent = "Thank you! You'll hear from us soon.";
    popup.style.display = 'block'; // Show the pop-up
    speak(popup.textContent);
    form.reset(); // Reset the form fields
  } else {
    // If invalid, show error message and speak it
    popup.textContent = "Error: Please fill in all fields correctly.";
    popup.style.display = 'block'; // Show the pop-up
    speak(popup.textContent);
  }

  // Hide the pop-up after 5 seconds
  setTimeout(() => {
    popup.style.display = 'none';
  }, 5000);
});

// Animate each progress bar width based on the percentage text content
document.addEventListener('DOMContentLoaded', () => {
  const progressBars = document.querySelectorAll('.progress-fill');
  progressBars.forEach(bar => {
    // Extract the numerical percentage from the text (e.g., "Strength 90%" -> "90%")
    const percentage = bar.textContent.match(/\d+/)[0];
    // Set the CSS width property to the percentage value
    bar.style.width = percentage + '%';
  });
});

