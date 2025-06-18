// Function to provide voice feedback using Web Speech API
function speak(message) {
  if (!('speechSynthesis' in window)) return; // Exit if API is unsupported
  const utterance = new SpeechSynthesisUtterance(message);
  utterance.lang = 'en-US'; // Set language to English US
  window.speechSynthesis.speak(utterance);
}

// Listen for form submission event on the signup form
document.getElementById('signup-form').addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent the default form submission behavior

  const form = e.target;
  const name = form.name;
  const email = form.email;
  const telephone = form.telephone;
  const comments = form.comments;
  const popup = document.getElementById('popup');

  let isValid = true;

  // Clear previous invalid styles
  [name, email, telephone, comments].forEach(field => {
    field.classList.remove('invalid');
  });

  // Validate Name
  if (!name.value.trim() || name.value.trim().length < 2) {
    name.classList.add('invalid');
    isValid = false;
  }

  // Validate Email
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email.value.trim() || !emailPattern.test(email.value.trim())) {
    email.classList.add('invalid');
    isValid = false;
  }

  // Validate Phone Number
  const phonePattern = /^\+?[0-9\s()-]{7,15}$/;
  if (!telephone.value.trim() || !phonePattern.test(telephone.value.trim())) {
    telephone.classList.add('invalid');
    isValid = false;
  }

  // Validate Comments
  if (!comments.value.trim() || comments.value.trim().length < 10) {
    comments.classList.add('invalid');
    isValid = false;
  }

  if (isValid) {
    // Success message
    popup.textContent = "Thank you! We look forward to having you as a member.";
    popup.style.display = 'block';
    speak(popup.textContent);

    // Redirect after short delay (to allow speech and user feedback)
    setTimeout(() => {
      window.location.href = 'thankyou2.html';
    }, 3000); // 3 seconds delay
  } else {
    // Error message
    popup.textContent = "Error: Please fill in all fields correctly.";
    popup.style.display = 'block';
    speak(popup.textContent);

    // Hide after delay
    setTimeout(() => {
      popup.style.display = 'none';
    }, 5000);
  }
});
