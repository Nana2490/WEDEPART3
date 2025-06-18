# POE WEDEPART 3

# SheFit Fitness Gym Website

Welcome to the SheFit Fitness Gym website project. This website is designed as part of a Portfolio of Evidence (POE) to showcase web development skills, focusing on a women-only gym in Bloemfontein.

---

## Project Overview

SheFit is an all-female fitness gym offering a variety of classes such as yoga, pilates, strength training, cardio, HIIT, dance fitness, and swimming lessons. This website aims to provide information about the gym, enable users to sign up for classes, make enquiries, and contact the gym easily.

---

## Features

- **Multi-page website:** Home, About Us, Classes, Swimming, Signup, Contact Us, Enquiries, Booking, and Thank You pages  
- **Interactive forms:** Signup, Contact Us, and Enquiries forms with JavaScript validation  
- **Voice feedback:** Form submission confirmation and error messages are read aloud using the Web Speech API  
- **Interactive map:** Embedded map feature to locate the gym  
- **Lightbox gallery:** Image galleries with clickable images that open in a lightbox popup for better viewing experience  
- **Responsive design:** Layout adapts well across different screen sizes and devices  
- **Consistent UI/UX:** Improved CSS flow and styling for a unified and user-friendly experience across all pages  
- **Clean, semantic HTML:** Code optimized for readability, accessibility, and maintainability  
- **SEO-ready:** Meta tags added to improve discoverability in search engines  

---

## File Structure

## Site Map
/root-folder
│
├── index.html (Home page)
├── aboutus.html
├── classes.html
├── swimming.html
├── signup.html
├── contactus.html
├── enquiries.html
├── booking.html
├── thankyou2.html
│
├── css/
│ └── style.css
│
├── js/
│ ├── contactus.js
│ ├── enquiries.js
│ ├── map.js
│ ├── signup.js
│ └── javascript.js (additional scripts)
│
├── imageshefit/
│ └── (logo, gallery images, icons)
│
└── README.md


---
## Improvements & Enhancements

- Improved feedback from Part 2 by refining CSS for better visual flow and consistent styling across all pages.  
- Enhanced user experience with a cleaner, more user-friendly layout.  
- Improved HTML codes for aboutus.html, classes.html, signup.html, contactus.html and enquiries.html
- Ensured consistent navigation and page elements unify the website’s look and feel.  
- Cleaned up and optimized HTML code for About Us and Classes pages, removing redundant markup and improving semantic structure.  
- Added Lightbox2 integration for image galleries on About Us and Classes pages.  
- Added interactive map functionality on Contact Us page for easy location discovery.  
- Modularized JavaScript files for better maintainability (`contactus.js`, `enquiries.js`, `signup.js`, `map.js`, and a general `javascript.js`). 

---

## Technologies Used

- HTML5  
- CSS3  
- JavaScript (ES6+)  
- Web Speech API (voice feedback)  
- Lightbox2 (for image galleries)  
- Embedded interactive map (Leaflet)  

---
## 📜 Changelog

### Part 1 – Initial Setup
- Created basic HTML pages: Home, About Us, Classes, Swimming, Contact Us, Enquiries, Signup, Booking, Thank You.
- Set up consistent layout with header, footer, and navigation menu.
- Linked all pages together using plain HTML (no CSS/JS initially).

### Part 2 – Styling & Layout
- Added external CSS file (`style.css`) for global styling.
- Improved layout, color scheme, and font consistency.
- Applied visual structure to all pages for better flow.
- Made navigation menu and footer consistent across pages.
- Implemented feedback received (improved spacing, headings, and alignment).
- Introduced visual hierarchy with section headings and groupings.

### Part 3 – Functionality & Enhancements
- ✅ **JavaScript Enhancements:**
  - Created modular JS files: `signup.js`, `contactus.js`, `enquiries.js`, `map.js`, `javascript.js`.
  - Added form validation and voice feedback using the Web Speech API for Signup, Contact Us, and Enquiry forms.
  - Included success and error pop-up messages with automatic dismissal.

- 🗺 **Interactive Map:**
  - Integrated an embedded map for gym location using `map.js` on the Home page.

- 🖼 **Lightbox Gallery:**
  - Implemented Lightbox2 image gallery for About Us and Classes pages.
  - Ensured mobile-friendly image display with clickable previews.

- 🎯 **SEO & Best Practices:**
  - Added SEO meta tags (`title`, `description`, `keywords`, `viewport`, `charset`) to each HTML page.
  - Improved semantic HTML structure for accessibility and searchability.

- 🧼 **Code Cleanup & Consistency:**
  - Cleaned up and organized HTML in About Us and Classes pages.
  - Refactored and commented all JavaScript files for clarity.
  - Improved user interface design based on feedback (color coordination, layout balance, consistent spacing).

---

## Setup & Usage

1. Clone or download this repository to your local machine.  
2. Open the HTML files in a modern web browser to view the website.  
3. To test form validation and voice feedback, fill out the forms and submit.  
4. Navigate through pages using the menu links in the header.  
5. Images in the About Us and Classes pages can be clicked to open in a lightbox popup.  
6. The interactive map is located on the Contact Us page for easy gym location reference.  

---

## Form Validation & Voice Feedback

- Forms on Signup, Contact Us, and Enquiries pages validate inputs such as name, email, phone number, subject, and comments before submission.  
- Users receive instant visual feedback with input highlights on errors.  
- Success and error messages are displayed in a popup and also spoken aloud using the browser's speech synthesis capabilities.  
 
---

## SEO & Accessibility

- Each page contains SEO-friendly meta tags (title, description, keywords, viewport, charset).  
- Navigation uses semantic HTML and ARIA roles to enhance accessibility.  
- Forms have proper labels and ARIA attributes for screen reader support.  
- The website layout is responsive and mobile-friendly.  

---

## Known Issues & Future Improvements

- Currently, form submissions do not connect to a backend server or database. Integrating with a backend or third-party service would enable real submissions.  
- Add more detailed error messages for better user guidance.  
- Optimize images further for faster page load speeds.  
- Expand interactive map functionality with directions and route planning.  
- Add animations or transitions for smoother user experience.  

---
## College
Rosebank College Bloemfontein Campus
---

## Author

ST10479313
Mphatso Phiri 
(GitHub username: Nana2490)  

---

## License

This project is for academic purposes as part of a Portfolio of Evidence (POE) and is not intended for commercial use.

---

Thank you for reviewing the SheFit Fitness Gym website project!


