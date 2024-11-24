// Contact Form Validation
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission

    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Simple Validation
    if (name === '') {
        alert('Name is required.');
        return;
    }

    if (email === '' || !validateEmail(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    if (message === '' || message.length < 10) {
        alert('Message must be at least 10 characters long.');
        return;
    }

    // Success message
    alert('Thank you for reaching out! We will get back to you soon.');
    document.getElementById('contactForm').reset(); // Clear the form
});

// Email Validation Function
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Interactive Social Icons
document.querySelectorAll('.social-icons a').forEach(icon => {
    icon.addEventListener('mouseenter', () => icon.style.color = '#4facfe');
    icon.addEventListener('mouseleave', () => icon.style.color = '#444');
});
