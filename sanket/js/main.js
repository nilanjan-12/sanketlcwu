/**
 * SANKET NGO Website - Main JavaScript
 * Handles navigation, form validation, animations, and other interactive elements
 */

document.addEventListener('DOMContentLoaded', function() {
    // Initialize mobile navigation
    initMobileNav();
    
    // Initialize scroll animations
    initScrollAnimations();
    
    // Initialize form validation
    initFormValidation();
    
    // Initialize accessibility features
    initAccessibility();
});

/**
 * Mobile Navigation
 * Handles the mobile menu toggle and overlay
 */
function initMobileNav() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const body = document.body;
    
    // Create menu overlay
    const menuOverlay = document.createElement('div');
    menuOverlay.className = 'menu-overlay';
    body.appendChild(menuOverlay);
    
    // Create close button for mobile menu
    const closeMenu = document.createElement('div');
    closeMenu.className = 'close-menu';
    closeMenu.innerHTML = '<i class="fas fa-times"></i>';
    navMenu.prepend(closeMenu);
    
    // Toggle menu on hamburger icon click
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.add('active');
            menuOverlay.classList.add('active');
            body.style.overflow = 'hidden'; // Prevent scrolling when menu is open
            
            // Set focus to the close button for accessibility
            closeMenu.focus();
        });
    }
    
    // Close menu on close button click
    closeMenu.addEventListener('click', function() {
        closeNav();
    });
    
    // Close menu on overlay click
    menuOverlay.addEventListener('click', function() {
        closeNav();
    });
    
    // Close menu on escape key press
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && navMenu.classList.contains('active')) {
            closeNav();
        }
    });
    
    // Close navigation function
    function closeNav() {
        navMenu.classList.remove('active');
        menuOverlay.classList.remove('active');
        body.style.overflow = ''; // Restore scrolling
        
        // Return focus to menu toggle
        if (menuToggle) {
            menuToggle.focus();
        }
    }
    
    // Handle submenu accessibility for keyboard navigation
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('keydown', function(e) {
            if (e.key === ' ' || e.key === 'Enter') {
                e.preventDefault();
                link.click();
            }
        });
    });
}

/**
 * Scroll Animations
 * Adds fade-in animations to elements as they enter the viewport
 */
function initScrollAnimations() {
    // Add the fade-in class to elements that should animate on scroll
    const animatedElements = document.querySelectorAll(
        '.mission-content, .mission-stats, .program-card, ' +
        '.event-card, .testimonial-content, .newsletter-content'
    );
    
    animatedElements.forEach(element => {
        element.classList.add('fade-in');
    });
    
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (!prefersReducedMotion) {
        // Observer for scroll animations
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target); // Stop observing once animated
                }
            });
        }, {
            threshold: 0.15, // Trigger when 15% of the element is visible
            rootMargin: '0px 0px -50px 0px' // Adjust trigger point
        });
        
        // Observe all animated elements
        animatedElements.forEach(element => {
            observer.observe(element);
        });
    } else {
        // If user prefers reduced motion, show all elements without animation
        animatedElements.forEach(element => {
            element.classList.add('visible');
        });
    }
    
    // Sticky header behavior
    const header = document.querySelector('header');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Add shadow and reduce padding when scrolling down
        if (scrollTop > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        // Hide header when scrolling down, show when scrolling up
        if (scrollTop > lastScrollTop && scrollTop > 200) {
            header.style.transform = 'translateY(-100%)';
        } else {
            header.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop;
    });
}

/**
 * Form Validation
 * Validates forms before submission and provides feedback
 */
function initFormValidation() {
    // Get all forms on the page
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        // Add novalidate attribute to handle validation with JavaScript
        form.setAttribute('novalidate', '');
        
        form.addEventListener('submit', function(event) {
            // Check if the form is valid
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
                
                // Add validation class to show validation styles
                form.classList.add('was-validated');
                
                // Show error messages for invalid fields
                const invalidFields = form.querySelectorAll(':invalid');
                invalidFields.forEach(field => {
                    // Create or update error message
                    let errorMessage = field.nextElementSibling;
                    if (!errorMessage || !errorMessage.classList.contains('error-message')) {
                        errorMessage = document.createElement('div');
                        errorMessage.className = 'error-message';
                        field.parentNode.insertBefore(errorMessage, field.nextSibling);
                    }
                    
                    // Set error message text based on validation type
                    if (field.validity.valueMissing) {
                        errorMessage.textContent = 'This field is required';
                    } else if (field.validity.typeMismatch) {
                        errorMessage.textContent = 'Please enter a valid format';
                    } else if (field.validity.patternMismatch) {
                        errorMessage.textContent = 'Please match the requested format';
                    } else if (field.validity.tooShort) {
                        errorMessage.textContent = `Please use at least ${field.minLength} characters`;
                    } else if (field.validity.tooLong) {
                        errorMessage.textContent = `Please use no more than ${field.maxLength} characters`;
                    } else {
                        errorMessage.textContent = 'Invalid input';
                    }
                    
                    // Focus the first invalid field
                    invalidFields[0].focus();
                });
            } else {
                // For the newsletter form, prevent default and show success message
                if (form.classList.contains('newsletter-form')) {
                    event.preventDefault();
                    handleNewsletterSubmit(form);
                }
                
                // For contact form, you might want to handle via AJAX
                if (form.classList.contains('contact-form')) {
                    event.preventDefault();
                    handleContactFormSubmit(form);
                }
            }
        });
        
        // Live validation feedback as user types
        const inputs = form.querySelectorAll('input, textarea, select');
        inputs.forEach(input => {
            input.addEventListener('blur', function() {
                validateField(input);
            });
            
            input.addEventListener('input', function() {
                if (input.classList.contains('is-invalid')) {
                    validateField(input);
                }
            });
        });
    });
    
    // Validate a single form field
    function validateField(field) {
        // Remove existing error message
        const existingError = field.nextElementSibling;
        if (existingError && existingError.classList.contains('error-message')) {
            existingError.remove();
        }
        
        // Check validity
        if (!field.validity.valid) {
            field.classList.add('is-invalid');
            field.classList.remove('is-valid');
            
            // Create error message
            const errorMessage = document.createElement('div');
            errorMessage.className = 'error-message';
            
            // Set error message text
            if (field.validity.valueMissing) {
                errorMessage.textContent = 'This field is required';
            } else if (field.validity.typeMismatch) {
                if (field.type === 'email') {
                    errorMessage.textContent = 'Please enter a valid email address';
                } else {
                    errorMessage.textContent = 'Please enter a valid format';
                }
            } else if (field.validity.patternMismatch) {
                errorMessage.textContent = 'Please match the requested format';
            } else if (field.validity.tooShort) {
                errorMessage.textContent = `Please use at least ${field.minLength} characters`;
            } else if (field.validity.tooLong) {
                errorMessage.textContent = `Please use no more than ${field.maxLength} characters`;
            } else {
                errorMessage.textContent = 'Invalid input';
            }
            
            // Add error message after the field
            field.parentNode.insertBefore(errorMessage, field.nextSibling);
        } else {
            field.classList.remove('is-invalid');
            field.classList.add('is-valid');
        }
    }
    
    // Handle newsletter form submission
    function handleNewsletterSubmit(form) {
        // Get the email input
        const emailInput = form.querySelector('input[type="email"]');
        const email = emailInput.value;
        
        // Create success message
        const formContainer = form.parentNode;
        form.style.display = 'none';
        
        const successMessage = document.createElement('div');
        successMessage.className = 'success-message';
        successMessage.innerHTML = `
            <i class="fas fa-check-circle"></i>
            <h3>Thank you for subscribing!</h3>
            <p>We've sent a confirmation email to <strong>${email}</strong>.</p>
        `;
        
        formContainer.appendChild(successMessage);
        
        // In a real application, you would send the data to your server here
        console.log('Newsletter subscription:', email);
    }
    
    // Handle contact form submission
    function handleContactFormSubmit(form) {
        // Get form data
        const formData = new FormData(form);
        const formValues = Object.fromEntries(formData.entries());
        
        // Create loading indicator
        form.classList.add('loading');
        const loadingIndicator = document.createElement('div');
        loadingIndicator.className = 'loading-indicator';
        loadingIndicator.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        form.appendChild(loadingIndicator);
        
        // Simulate form submission (replace with actual AJAX call)
        setTimeout(() => {
            // Remove loading indicator
            form.classList.remove('loading');
            loadingIndicator.remove();
            
            // Hide form and show success message
            form.style.display = 'none';
            
            const formContainer = form.parentNode;
            const successMessage = document.createElement('div');
            successMessage.className = 'success-message';
            successMessage.innerHTML = `
                <i class="fas fa-check-circle"></i>
                <h3>Message Sent Successfully!</h3>
                <p>Thank you for contacting us, ${formValues.name}. We'll get back to you shortly.</p>
                <button class="btn primary-btn mt-md" id="send-another">Send Another Message</button>
            `;
            
            formContainer.appendChild(successMessage);
            
            // Add event listener to "Send Another Message" button
            document.getElementById('send-another').addEventListener('click', function() {
                successMessage.remove();
                form.style.display = 'block';
                form.reset();
                form.classList.remove('was-validated');
                const validatedInputs = form.querySelectorAll('.is-valid, .is-invalid');
                validatedInputs.forEach(input => {
                    input.classList.remove('is-valid', 'is-invalid');
                });
            });
            
            // In a real application, you would send the data to your server here
            console.log('Contact form submission:', formValues);
        }, 1500);
    }
}

/**
 * Accessibility Enhancements
 * Improves website accessibility for all users
 */
function initAccessibility() {
    // Skip to content link
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.className = 'skip-link';
    skipLink.textContent = 'Skip to main content';
    document.body.prepend(skipLink);
    
    // Add ID to main content area
    const main = document.querySelector('main');
    if (main) {
        main.id = 'main-content';
        main.setAttribute('tabindex', '-1');
    }
    
    // Add appropriate ARIA attributes to interactive elements
    const buttons = document.querySelectorAll('button, .btn');
    buttons.forEach(button => {
        if (!button.getAttribute('aria-label') && !button.textContent.trim()) {
            button.setAttribute('aria-label', 'Button');
        }
    });
    
    // Make sure all images have alt text
    const images = document.querySelectorAll('img:not([alt])');
    images.forEach(img => {
        img.alt = ''; // Empty alt for decorative images
    });
    
    // Add focus styles that are also visible for mouse users
    document.head.insertAdjacentHTML('beforeend', `
        <style>
            :focus-visible {
                outline: 2px solid var(--primary-color);
                outline-offset: 2px;
            }
        </style>
    `);
    
    // Ensure proper heading hierarchy
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    let previousLevel = 0;
    
    headings.forEach(heading => {
        const level = parseInt(heading.tagName.charAt(1));
        
        // Log warning for skipped heading levels
        if (level - previousLevel > 1 && previousLevel !== 0) {
            console.warn('Accessibility: Heading level skipped from', previousLevel, 'to', level, 'at', heading);
        }
        
        previousLevel = level;
    });
}

/**
 * Utility Functions
 */

// Debounce function to limit how often a function can run
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle function to limit how often a function can run
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func(...args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Get viewport size
function getViewportSize() {
    return {
        width: window.innerWidth || document.documentElement.clientWidth,
        height: window.innerHeight || document.documentElement.clientHeight
    };
}

// Check if element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}