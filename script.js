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
        
        // Responsive breakpoints
        breakpoints: {
            768: {
                slidesPerView: 1,
            },
            1024: {
                slidesPerView: 1,
            }
        }
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
            }
        });
    });
    
    // Navbar scroll effect (optional - adds shadow on scroll)
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
    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Email signup form handling (customize based on your email service)
    const emailForm = document.querySelector('.email-signup');
    
    if (emailForm) {
        emailForm.addEventListener('submit', function(e) {
            // If you're using a service like Mailchimp, ConvertKit, etc., 
            // update the form action and this handler accordingly
            
            // Example basic validation
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
    
    // Optional: Add intersection observer for fade-in animations
    // Uncomment this section if you want elements to fade in as they scroll into view
    /*
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Add fade-in class to elements you want to animate
    document.querySelectorAll('.spec-card, .service-card, .team-member').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    */
});

// Optional: Add mobile menu toggle if needed
// Uncomment and customize if you want a hamburger menu for mobile
/*
function toggleMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

// Add hamburger button to HTML and call this function
*/
