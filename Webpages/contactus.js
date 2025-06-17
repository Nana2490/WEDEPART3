// Function to provide voice feedback using Web Speech API
function speak(message) {
  if (!('speechSynthesis' in window)) return; // Exit if API is unsupported
  const utterance = new SpeechSynthesisUtterance(message);
  utterance.lang = 'en-US'; // Set language to English US
  window.speechSynthesis.speak(utterance);
}
// Listen for form submission event on the enquiry form
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the default form submission behavior
  
    const form = e.target; // Reference to the form element
    const name = form.name;
    const email = form.email;
    const subject = form.subject;
    const comments = form.comments;
  
    let isValid = true; // Flag to track overall form validity
  
    // Clear previous invalid styles and error indications
    [name, email, subject, comments].forEach(field => {
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
  
    //Validate Subject (required, simple minimum 2 characters)
    if (!subject.value.trim() || subject.value.trim().length < 2) {
      subject.classList.add('invalid');
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