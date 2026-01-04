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
    
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            this.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
    }
    
    // Navbar scroll effect and Back to top button
    let lastScroll = 0;
    const navbar = document.getElementById('navbar');
    const backToTopButton = document.getElementById('backToTop');
    
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
            // If you're using a form service (Formspree, Netlify Forms, etc.),
            // update the form action attribute and this handler accordingly
            
            // For now, basic validation
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
            
            // If not integrated with a service yet, prevent default and show message
            // Remove this section once you integrate with a form service
            e.preventDefault();
            alert('Thank you for your interest! We will be in touch soon. (Note: Form submission will be active once connected to your email service)');
            this.reset();
        });
    }
    
    // Email signup form handling
    const emailForm = document.querySelector('.email-signup');
    
    if (emailForm) {
        emailForm.addEventListener('submit', function(e) {
            const emailInput = this.querySelector('input[type="email"]');
            if (!emailInput.value) {
                e.preventDefault();
                alert('Please enter a valid email address');
                return false;
            }
            
            // If not integrated with a service yet, prevent default and show message
            // Remove this section once you integrate with an email service
            e.preventDefault();
            alert('Thank you for your interest! Email signup will be active soon.');
            emailInput.value = '';
        });
    }
});
