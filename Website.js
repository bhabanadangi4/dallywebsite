document.addEventListener('DOMContentLoaded', function() {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const mainNav = document.querySelector('.main-nav');

    if (hamburgerMenu && mainNav) {
        hamburgerMenu.addEventListener('click', function() {
            this.classList.toggle('active');
            mainNav.classList.toggle('open');
             // Toggle aria-expanded attribute
            this.setAttribute('aria-expanded', mainNav.classList.contains('open'));
        });
    }

     // Get all the navigation links
    const navLinks = document.querySelectorAll('.main-nav ul li a');

    // Add a click event listener to each link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            // Check if the main navigation is open (i.e., on mobile)
            if (mainNav.classList.contains('open')) {
                // If it's open, close it
                hamburgerMenu.classList.remove('active');
                mainNav.classList.remove('open');
                 hamburgerMenu.setAttribute('aria-expanded', 'false');
            }
        });
    });
});
