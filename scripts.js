// Smooth Scroll
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form Validation
document.querySelector('form').addEventListener('submit', function(event) {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (!name || !email || !message) {
        alert('All fields are required!');
        event.preventDefault();
        return false;
    }

    if (!validateEmail(email)) {
        alert('Please enter a valid email address!');
        event.preventDefault();
        return false;
    }

    return true;
});

function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(String(email).toLowerCase());
}

// Dynamic Skill Bars
document.addEventListener('DOMContentLoaded', function() {
    const skillBars = document.querySelectorAll('.skills ul li');

    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY + window.innerHeight;
        skillBars.forEach(skill => {
            const skillPosition = skill.offsetTop;
            if (scrollPosition > skillPosition) {
                skill.style.width = skill.getAttribute('data-skill-level');
            }
        });
    });
});
