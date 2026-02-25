document.addEventListener('DOMContentLoaded', () => {

    // Navbar Scroll Effect
    const navbar = document.getElementById('navbar');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Close mobile menu when a link is clicked
    document.querySelectorAll('.nav-links li a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });

    // Scroll Reveal Animation (Intersection Observer)
    const reveals = document.querySelectorAll('.reveal');

    const revealOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // optional: only animate once
            }
        });
    }, {
        root: null,
        threshold: 0.15, // Trigger when 15% of the element is visible
        rootMargin: "0px 0px -50px 0px"
    });

    reveals.forEach(reveal => {
        revealOnScroll.observe(reveal);
    });

    // Active Link Highlighting
    const sections = document.querySelectorAll('section');
    const header = document.querySelector('header');
    const navItems = document.querySelectorAll('.nav-links li a');

    const allSections = [header, ...Array.from(sections)];

    window.addEventListener('scroll', () => {
        let current = '';
        allSections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - 150)) {
                current = section.getAttribute('id');
            }
        });

        navItems.forEach(li => {
            li.classList.remove('active');
            if (li.getAttribute('href').includes(current)) {
                li.classList.add('active');
            }
        });
    });

    // Fetch Experience Data
    const experienceContainer = document.getElementById('experience-container');
    if (experienceContainer) {
        // Fetch JSON data and dynamic create HTML
        fetch('assets/data/experience.json')
            .then(response => response.json())
            .then(data => {
                data.forEach((job) => {
                    const timelineItem = document.createElement('div');
                    timelineItem.className = 'timeline-item';

                    const achievementsList = job.achievements.map(ach => `<li>${ach}</li>`).join('');

                    timelineItem.innerHTML = `
                        <div class="timeline-dot"></div>
                        <div class="glass-card timeline-content">
                            <h3>${job.company} <span class="location">${job.location}</span></h3>
                            <h4 class="timeline-role">${job.role}</h4>
                            <span class="timeline-date">${job.date}</span>
                            <ul>
                                ${achievementsList}
                            </ul>
                        </div>
                    `;
                    experienceContainer.appendChild(timelineItem);
                });
            })
            .catch(error => console.error('Error loading experience data:', error));
    }

    // Trigger reveal immediately for elements already in view on load
    setTimeout(() => {
        reveals.forEach(reveal => {
            const windowHeight = window.innerHeight;
            const elementTop = reveal.getBoundingClientRect().top;
            if (elementTop < windowHeight - 50) {
                reveal.classList.add('active');
            }
        });
    }, 100);

});
