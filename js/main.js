// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

// Navbar scroll effect
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu functionality
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

if (menuBtn && navLinks) {
    menuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        // Animate menu button
        const spans = menuBtn.querySelectorAll('span');
        spans.forEach(span => span.classList.toggle('active'));
    });
}

// Testimonial Navigation
const testimonialNavItems = document.querySelectorAll('.testimonial-nav-item');
const quoteText = document.getElementById('quote-text');
const quoteAuthor = document.getElementById('quote-author');

if (testimonialNavItems.length > 0) {
    testimonialNavItems.forEach(item => {
        item.addEventListener('click', () => {
            // Remove active class from all items
            testimonialNavItems.forEach(nav => nav.classList.remove('active'));
            
            // Add active class to clicked item
            item.classList.add('active');
            
            // Update quote and author with fade effect
            const quote = item.getAttribute('data-quote');
            const author = item.getAttribute('data-author');
            const title = item.getAttribute('data-title');

            // Fade out
            quoteText.style.opacity = '0';
            quoteAuthor.style.opacity = '0';

            setTimeout(() => {
                quoteText.textContent = `"${quote}"`;
                quoteAuthor.innerHTML = `${author}<div class="author-title">${title}</div>`;
                
                // Fade in
                quoteText.style.opacity = '1';
                quoteAuthor.style.opacity = '1';
            }, 300);
        });
    });

    // Auto-rotate testimonials every 5 seconds
    let currentTestimonial = 0;
    setInterval(() => {
        currentTestimonial = (currentTestimonial + 1) % testimonialNavItems.length;
        testimonialNavItems[currentTestimonial].click();
    }, 5000);
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Close mobile menu if open
            if (navLinks) {
                navLinks.classList.remove('active');
            }
        }
    });
});

// Form submission handling
const forms = document.querySelectorAll('form');
forms.forEach(form => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        // Here you would typically send the form data to a server
        // For now, we'll just show a success message
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Sent Successfully!';
        submitBtn.style.backgroundColor = '#27ae60';
        
        // Reset button after 3 seconds
        setTimeout(() => {
            submitBtn.textContent = originalText;
            submitBtn.style.backgroundColor = '';
            form.reset();
        }, 3000);
    });
});

// Add intersection observer for reveal animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});