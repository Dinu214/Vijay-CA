document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    const messageInput = document.getElementById('message');
    const currentCount = document.getElementById('currentCount');
    const MAX_LENGTH = 300;

    // Character count update
    messageInput.addEventListener('input', (e) => {
        const length = e.target.value.length;
        currentCount.textContent = length;
        
        if (length > MAX_LENGTH) {
            e.target.value = e.target.value.slice(0, MAX_LENGTH);
            currentCount.textContent = MAX_LENGTH;
        }
    });

    // Phone number formatting
    const phoneInput = document.getElementById('phone');
    phoneInput.addEventListener('input', (e) => {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length > 0) {
            if (value.length <= 3) {
                value = `+44 (${value}`;
            } else if (value.length <= 6) {
                value = `+44 (${value.slice(0, 3)}) ${value.slice(3)}`;
            } else {
                value = `+44 (${value.slice(0, 3)}) ${value.slice(3, 6)}-${value.slice(6, 10)}`;
            }
        }
        e.target.value = value;
    });

    // Form submission with animation and email sending
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // Validate form
        let isValid = true;
        const inputs = form.querySelectorAll('input[required], textarea[required]');
        
        inputs.forEach(input => {
            if (!input.value.trim()) {
                isValid = false;
                input.parentElement.classList.add('error', 'shake');
                setTimeout(() => {
                    input.parentElement.classList.remove('shake');
                }, 500);
            } else {
                input.parentElement.classList.remove('error');
                input.parentElement.classList.add('success');
            }
        });

        if (!isValid) return;

        // Collect form data
        const formData = {
            firstName: form.firstName.value,
            lastName: form.lastName.value,
            email: form.email.value,
            phone: form.phone.value,
            message: form.message.value
        };

        // Submit button animation
        const submitBtn = form.querySelector('.submit-btn');
        submitBtn.innerHTML = '<span>Sending...</span>';
        submitBtn.classList.add('loading');
        submitBtn.disabled = true;

        try {
            // Email sending simulation (replace with your actual email sending logic)
            const emailData = {
                to: 'your-email@example.com', // Replace with your email
                subject: 'New Contact Form Submission',
                html: `
                    <h2>New Contact Form Submission</h2>
                    <p><strong>Name:</strong> ${formData.firstName} ${formData.lastName}</p>
                    <p><strong>Email:</strong> ${formData.email}</p>
                    <p><strong>Phone:</strong> ${formData.phone}</p>
                    <p><strong>Message:</strong></p>
                    <p>${formData.message}</p>
                `
            };

            // Here you would typically send the email using your backend service
            // For demonstration, we'll use a timeout to simulate an API call
            await new Promise(resolve => setTimeout(resolve, 1500));
            
            // Success animation
            submitBtn.innerHTML = '<span>Sent Successfully!</span>';
            submitBtn.classList.remove('loading');
            submitBtn.style.backgroundColor = '#10B981';
            
            // Reset form after delay
            setTimeout(() => {
                form.reset();
                submitBtn.innerHTML = `
                    <span>Submit Form</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                `;
                submitBtn.disabled = false;
                submitBtn.style.backgroundColor = '';
                submitBtn.classList.remove('loading');
                
                // Reset success states
                document.querySelectorAll('.input-group').forEach(group => {
                    group.classList.remove('success');
                });
            }, 2000);

        } catch (error) {
            // Error animation
            submitBtn.innerHTML = '<span>Error! Try Again</span>';
            submitBtn.classList.remove('loading');
            submitBtn.style.backgroundColor = '#EF4444';
            
            setTimeout(() => {
                submitBtn.innerHTML = `
                    <span>Submit Form</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                `;
                submitBtn.disabled = false;
                submitBtn.style.backgroundColor = '';
                submitBtn.classList.remove('loading');
            }, 2000);
        }
    });

    // Input focus animations
    const inputs = form.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        input.addEventListener('focus', () => {
            input.parentElement.style.transform = 'scale(1.02)';
        });

        input.addEventListener('blur', () => {
            input.parentElement.style.transform = 'scale(1)';
        });
    });
});