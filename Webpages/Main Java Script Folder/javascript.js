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


