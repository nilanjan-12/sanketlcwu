/**
 * SANKET NGO Website - Carousel Functionality
 * Implements image carousels that change automatically every second or by clicking next
 */

class Carousel {
    constructor(carouselSelector, options = {}) {
        // Select the carousel element
        this.carousel = document.querySelector(carouselSelector);
        if (!this.carousel) return;
        
        // Default options
        this.options = {
            interval: options.interval || 5000, // Default to 5 seconds
            autoplay: options.autoplay !== undefined ? options.autoplay : true,
            pauseOnHover: options.pauseOnHover !== undefined ? options.pauseOnHover : true,
            swipe: options.swipe !== undefined ? options.swipe : true,
            keyboard: options.keyboard !== undefined ? options.keyboard : true,
            indicators: options.indicators !== undefined ? options.indicators : true,
        };
        
        // Select carousel elements
        this.slides = this.carousel.querySelectorAll('.carousel-slide');
        this.dotsContainer = this.carousel.querySelector('.carousel-dots');
        this.prevBtn = this.carousel.querySelector('.prev-btn');
        this.nextBtn = this.carousel.querySelector('.next-btn');
        
        // Set initial state
        this.currentSlide = 0;
        this.slideCount = this.slides.length;
        this.isPlaying = this.options.autoplay;
        this.interval = null;
        
        // Initialize the carousel
        this.init();
    }
    
    init() {
        // Create indicators/dots if enabled
        if (this.options.indicators && this.dotsContainer) {
            this.createIndicators();
        }
        
        // Set up event listeners
        this.setupEventListeners();
        
        // Start autoplay if enabled
        if (this.options.autoplay) {
            this.startAutoplay();
        }
        
        // Show the first slide
        this.showSlide(this.currentSlide);
        
        // Add initialized class
        this.carousel.classList.add('carousel-initialized');
    }
    
    createIndicators() {
        // Create a dot for each slide
        for (let i = 0; i < this.slideCount; i++) {
            const dot = document.createElement('div');
            dot.classList.add('carousel-dot');
            if (i === this.currentSlide) {
                dot.classList.add('active');
            }
            dot.setAttribute('data-slide', i);
            dot.addEventListener('click', () => {
                this.goToSlide(i);
            });
            this.dotsContainer.appendChild(dot);
        }
    }
    
    setupEventListeners() {
        // Previous and next button click events
        if (this.prevBtn) {
            this.prevBtn.addEventListener('click', () => {
                this.prevSlide();
            });
        }
        
        if (this.nextBtn) {
            this.nextBtn.addEventListener('click', () => {
                this.nextSlide();
            });
        }
        
        // Pause on hover if enabled
        if (this.options.pauseOnHover) {
            this.carousel.addEventListener('mouseenter', () => {
                this.pauseAutoplay();
            });
            
            this.carousel.addEventListener('mouseleave', () => {
                if (this.isPlaying) {
                    this.startAutoplay();
                }
            });
        }
        
        // Keyboard navigation if enabled
        if (this.options.keyboard) {
            document.addEventListener('keydown', (e) => {
                if (e.key === 'ArrowLeft') {
                    this.prevSlide();
                } else if (e.key === 'ArrowRight') {
                    this.nextSlide();
                }
            });
        }
        
        // Touch swipe functionality if enabled
        if (this.options.swipe) {
            this.setupSwipeEvents();
        }
        
        // Accessibility
        this.setupAccessibility();
    }
    
    setupSwipeEvents() {
        let touchStartX = 0;
        let touchEndX = 0;
        
        this.carousel.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        }, { passive: true });
        
        this.carousel.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            this.handleSwipe(touchStartX, touchEndX);
        }, { passive: true });
    }
    
    handleSwipe(startX, endX) {
        const threshold = 50; // Minimum distance required for swipe
        const diff = startX - endX;
        
        if (Math.abs(diff) >= threshold) {
            if (diff > 0) {
                // Swipe left, go to next slide
                this.nextSlide();
            } else {
                // Swipe right, go to previous slide
                this.prevSlide();
            }
        }
    }
    
    setupAccessibility() {
        // Add appropriate ARIA attributes
        this.carousel.setAttribute('aria-roledescription', 'carousel');
        this.carousel.setAttribute('aria-label', 'Image Slideshow');
        
        // Make slides accessible
        this.slides.forEach((slide, index) => {
            slide.setAttribute('role', 'group');
            slide.setAttribute('aria-roledescription', 'slide');
            slide.setAttribute('aria-label', `Slide ${index + 1} of ${this.slideCount}`);
        });
        
        // Make controls accessible
        if (this.prevBtn) {
            this.prevBtn.setAttribute('aria-label', 'Previous slide');
        }
        
        if (this.nextBtn) {
            this.nextBtn.setAttribute('aria-label', 'Next slide');
        }
    }
    
    startAutoplay() {
        // Clear any existing interval
        this.pauseAutoplay();
        
        // Set a new interval
        this.interval = setInterval(() => {
            this.nextSlide();
        }, this.options.interval);
        
        this.isPlaying = true;
    }
    
    pauseAutoplay() {
        if (this.interval) {
            clearInterval(this.interval);
            this.interval = null;
        }
    }
    
    goToSlide(index) {
        // Reset autoplay to prevent immediate transition after manual navigation
        if (this.options.autoplay && this.isPlaying) {
            this.pauseAutoplay();
            this.startAutoplay();
        }
        
        this.showSlide(index);
    }
    
    nextSlide() {
        const newIndex = (this.currentSlide + 1) % this.slideCount;
        this.goToSlide(newIndex);
    }
    
    prevSlide() {
        const newIndex = (this.currentSlide - 1 + this.slideCount) % this.slideCount;
        this.goToSlide(newIndex);
    }
    
    showSlide(index) {
        // Validate index
        if (index < 0 || index >= this.slideCount) return;
        
        // Remove active class from current slide and dot
        this.slides[this.currentSlide].classList.remove('active');
        
        const dots = this.dotsContainer ? this.dotsContainer.querySelectorAll('.carousel-dot') : [];
        if (dots.length > 0) {
            dots[this.currentSlide].classList.remove('active');
        }
        
        // Update current slide index
        this.currentSlide = index;
        
        // Add active class to new current slide and dot
        this.slides[this.currentSlide].classList.add('active');
        
        if (dots.length > 0) {
            dots[this.currentSlide].classList.add('active');
        }
        
        // Announce slide change for screen readers
        this.announceSlideChange();
    }
    
    announceSlideChange() {
        // Create or update a live region for screen reader announcements
        let liveRegion = this.carousel.querySelector('.carousel-liveregion');
        
        if (!liveRegion) {
            liveRegion = document.createElement('div');
            liveRegion.className = 'carousel-liveregion sr-only';
            liveRegion.setAttribute('aria-live', 'polite');
            liveRegion.setAttribute('aria-atomic', 'true');
            this.carousel.appendChild(liveRegion);
        }
        
        liveRegion.textContent = `Slide ${this.currentSlide + 1} of ${this.slideCount}`;
    }
}

// Initialize all carousels when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Hero carousel
    const heroCarousel = new Carousel('.hero .image-carousel', {
        interval: 5000, // 5 seconds
        autoplay: true,
        pauseOnHover: true
    });
    
    // Testimonial carousel
    const testimonialCarousel = new Carousel('.testimonials .testimonial-carousel', {
        interval: 8000, // 8 seconds
        autoplay: true,
        pauseOnHover: true
    });
    
    // Initialize any other carousels on the page
    document.querySelectorAll('.image-carousel:not(.carousel-initialized)').forEach(carousel => {
        new Carousel(carousel, {
            interval: 3000, // 3 seconds
            autoplay: true
        });
    });
});