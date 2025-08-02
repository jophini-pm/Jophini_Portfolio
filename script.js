(function() {
    emailjs.init("u95SsKhQwgRU98jXu"); // Your public key
})();

// Contact form
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();

    emailjs.send("service_cu4w9co", "template_u717vx2", {
        name: document.getElementById("name").value,       // match template
        email: document.getElementById("email").value,     // match template
        message: document.getElementById("message").value, // match template
    }).then(function(response) {
        console.log("SUCCESS!", response);
        alert("✅ Message sent successfully!");
    }, function(error) {
        console.error("FAILED...", error);
        alert("❌ Failed to send: " + JSON.stringify(error));
    });
});
        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });


        // Add scroll effect to navigation
        window.addEventListener('scroll', function() {
            const nav = document.querySelector('nav');
            if (window.scrollY > 100) {
                nav.style.background = 'rgba(255, 255, 255, 0.98)';
                nav.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
            } else {
                nav.style.background = 'rgba(255, 255, 255, 0.95)';
                nav.style.boxShadow = 'none';
            }
        });

        // Animate elements on scroll
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Observe all cards and sections
        document.querySelectorAll('.skill-card, .project-card, .section-title').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(el);
        });
    // Dark mode toggle
const toggleBtn = document.getElementById('darkModeToggle');
toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    toggleBtn.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
});

