// script.js

// Welcome message on page load
window.addEventListener('DOMContentLoaded', () => {
    alert("Welcome to Prachi Ingale's Portfolio!");
    
    // Dynamically set the current year in the footer
    const footer = document.querySelector('footer p');
    if (footer) {
        const year = new Date().getFullYear();
        footer.innerHTML = `© ${year} Prachi Ingale. All rights reserved.`;
    }
});
