// Banner controls
const bannerCloseBtn = document.querySelector('.banner-close-btn');
if (bannerCloseBtn) {
  bannerCloseBtn.addEventListener('click', () => {
    const banner = document.querySelector('.top-banner');
    if (banner) {
      banner.style.display = 'none';
    }
  });
}
// Mobile menu toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
if (mobileMenuBtn) {
  mobileMenuBtn.addEventListener('click', () => {
    document.body.classList.toggle('mobile-menu-open');
    
    // Create mobile menu if it doesn't exist
    if (!document.querySelector('.mobile-menu')) {
      const mobileMenu = document.createElement('div');
      mobileMenu.className = 'mobile-menu';
      
      const mainNav = document.querySelector('.main-nav');
      if (mainNav) {
        const navClone = mainNav.cloneNode(true);
        mobileMenu.appendChild(navClone);
      }
      
      document.body.appendChild(mobileMenu);
    } else {
      const mobileMenu = document.querySelector('.mobile-menu');
      if (mobileMenu) {
        mobileMenu.classList.toggle('active');
      }
    }
  });
}

// Smooth scroll for internal links
const anchors = document.querySelectorAll('a[href^="#"]');
for (const anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    
    const href = this.getAttribute('href');
    if (href) {
      const targetElement = document.querySelector(href);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
      }
    }
  });
}