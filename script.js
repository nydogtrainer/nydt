// ==========================================
// NEW YORK DOG TRAINER - JAVASCRIPT
// ==========================================

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // Initialize Swiper for testimonials carousel
    const swiper = new Swiper('.testimonials-swiper', {
        // Carousel settings
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        speed: 600,
        
        // Pagination dots
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        
        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            
            if (target) {
                const offsetTop = target.offsetTop - 80; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                const navLinks = document.querySelector('.nav-links');
                const mobileToggle = document.getElementById('mobileMenuToggle');
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    mobileToggle.classList.remove('active');
                }
            }
        });
    });
    
    // Mobile Menu Toggle
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuToggle && navLinks) {
        mobileMenuToggle.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Mobile menu clicked'); // Debug log
            this.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
    } else {
        console.error('Mobile menu elements not found:', {
            toggle: !!mobileMenuToggle,
            navLinks: !!navLinks
        });
    }
    
    // Navbar scroll effect and Back to top button
    let lastScroll = 0;
    const navbar = document.getElementById('navbar');
    const backToTopButton = document.getElementById('backToTop');
    
    if (navbar && backToTopButton) {
        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;
            
            // Navbar shadow effect
            if (currentScroll > 100) {
                navbar.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
            } else {
                navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
            }
            
            // Back to top button visibility
            if (currentScroll > 300) {
                backToTopButton.classList.add('visible');
            } else {
                backToTopButton.classList.remove('visible');
            }
            
            lastScroll = currentScroll;
        });
    }
    
    // Back to top button click handler
    if (backToTopButton) {
        backToTopButton.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // Contact form handling
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            // Basic validation before Formspree submission
            const name = this.querySelector('#name').value;
            const email = this.querySelector('#email').value;
            const phone = this.querySelector('#phone').value;
            const dogName = this.querySelector('#dog-name').value;
            const message = this.querySelector('#message').value;
            
            if (!name || !email || !phone || !dogName || !message) {
                e.preventDefault();
                alert('Please fill in all required fields');
                return false;
            }
            
            // Form will now submit to Formspree
            // Formspree will handle the redirect and confirmation
        });
    }
    
    // Brevo handles the email signup form
    // No additional JavaScript needed for newsletter signup
});
