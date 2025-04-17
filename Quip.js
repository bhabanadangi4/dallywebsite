document.addEventListener('DOMContentLoaded', function() {
    // Initialize components
    initBanner();
    initMobileMenu();
    initEmailPopup();
    initAddToCartButtons();
});

/**
 * Top banner functionality
 */
function initBanner() {
    const bannerCloseBtn = document.querySelector('.close-banner');
    if (bannerCloseBtn) {
        bannerCloseBtn.addEventListener('click', function() {
            const banner = document.querySelector('.top-banner');
            banner.style.display = 'none';
        });
    }
}

/**
 * Mobile menu toggle functionality
 */
function initMobileMenu() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mainNav = document.querySelector('.main-nav');

    if (mobileMenuToggle && mainNav) {
        mobileMenuToggle.addEventListener('click', function() {
            // Toggle active class for styling
            this.classList.toggle('active');

            // If mobile nav is not displayed, show it with animation
            if (window.getComputedStyle(mainNav).display === 'none') {
                // Create mobile nav overlay
                const overlay = document.createElement('div');
                overlay.className = 'mobile-nav-overlay';
                document.body.appendChild(overlay);

                // Show main nav as mobile menu
                mainNav.style.display = 'block';
                mainNav.style.position = 'fixed';
                mainNav.style.top = '80px';
                mainNav.style.left = '0';
                mainNav.style.width = '100%';
                mainNav.style.backgroundColor = 'var(--light-bg)';
                mainNav.style.padding = '20px';
                mainNav.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
                mainNav.style.zIndex = '99';

                // Style the nav items for mobile view
                const navItems = mainNav.querySelectorAll('ul');
                navItems.forEach(ul => {
                    ul.style.flexDirection = 'column';
                    ul.style.gap = '15px';
                });

                // Add click event to the overlay to close menu
                overlay.addEventListener('click', closeMenu);
            } else {
                closeMenu();
            }
        });
    }

    function closeMenu() {
        // Remove overlay
        const overlay = document.querySelector('.mobile-nav-overlay');
        if (overlay) {
            overlay.remove();
        }

        // Hide menu
        if (mainNav) {
            mainNav.style.display = '';
            mainNav.style.position = '';
            mainNav.style.top = '';
            mainNav.style.left = '';
            mainNav.style.width = '';
            mainNav.style.backgroundColor = '';
            mainNav.style.padding = '';
            mainNav.style.boxShadow = '';
            mainNav.style.zIndex = '';

            const navItems = mainNav.querySelectorAll('ul');
            navItems.forEach(ul => {
                ul.style.flexDirection = '';
                ul.style.gap = '';
            });
        }

        // Remove active class from toggle button
        if (mobileMenuToggle) {
            mobileMenuToggle.classList.remove('active');
        }
    }
}



