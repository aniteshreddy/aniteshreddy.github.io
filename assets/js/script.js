document.addEventListener('DOMContentLoaded', () => {

    // Fetch and populate portfolio data
    fetch('assets/data/portfolio.json')
        .then(response => response.json())
        .then(data => {
            populateHero(data.hero);
            populateAbout(data.about);
            populateSkills(data.skills);
            populateExperience(data.experience);
            populateEducation(data.education);
            populateProjects(data.projects);
            populateCommunity(data.community);
            populateFooter(data.footer, data.hero.links);

            // Initialize scroll animations after elements are dynamically injected
            initializeInteractions();
        })
        .catch(error => console.error('Error loading portfolio data:', error));

});

function populateHero(hero) {
    document.getElementById('hero-subtitle').textContent = hero.subtitle;

    // Parse name for the span highlight
    const titleHtml = `${hero.firstName} <span>${hero.lastName}</span>`;
    document.getElementById('hero-title').innerHTML = titleHtml;

    document.getElementById('hero-role').textContent = hero.role;
    document.getElementById('hero-summary').textContent = hero.summary;

    document.getElementById('hero-contact-btn').href = `mailto:${hero.links.email}`;
    document.getElementById('contact-btn').href = `mailto:${hero.links.email}`;

    const socialContainer = document.getElementById('hero-social');
    socialContainer.innerHTML = `
        <a href="${hero.links.linkedin}" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin-in"></i></a>
        <a href="${hero.links.github}" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i></a>
        <a href="mailto:${hero.links.email}"><i class="fas fa-envelope"></i></a>
    `;
}

function populateAbout(about) {
    const aboutContainer = document.getElementById('about-container');
    const paragraphs = about.paragraphs.map(p => `<p>${p}</p>`).join('');
    aboutContainer.innerHTML = `
        ${paragraphs}
        <p class="highlight-text mt-2"><i class="fas fa-map-marker-alt"></i> ${about.location}</p>
    `;
}

function populateSkills(skills) {
    const skillsContainer = document.getElementById('skills-container');
    skillsContainer.innerHTML = skills.map(skill => `
        <div class="glass-card skill-card ${skill.fullWidth ? 'full-width' : ''}">
            <h3><i class="${skill.icon}"></i> ${skill.title}</h3>
            <p>${skill.description}</p>
        </div>
    `).join('');
}

function populateExperience(experience) {
    const experienceContainer = document.getElementById('experience-container');
    experienceContainer.innerHTML = experience.map(job => {
        const achievementsList = job.achievements.map(ach => `<li>${ach}</li>`).join('');
        return `
            <div class="timeline-item">
                <div class="timeline-dot"></div>
                <div class="glass-card timeline-content">
                    <h3>${job.company} <span class="location">${job.location}</span></h3>
                    <h4 class="timeline-role">${job.role}</h4>
                    <span class="timeline-date">${job.date}</span>
                    <ul>${achievementsList}</ul>
                </div>
            </div>
        `;
    }).join('');
}

function populateEducation(education) {
    const educationContainer = document.getElementById('education-container');
    educationContainer.innerHTML = education.map(ed => `
        <div class="glass-card ed-card">
            <div class="ed-header">
                <h3>${ed.institution}</h3>
                <span class="ed-date">${ed.date}</span>
            </div>
            <h4 class="ed-degree">${ed.degree}</h4>
            <p class="ed-location"><i class="fas fa-map-marker-alt"></i> ${ed.location}</p>
            ${ed.notes ? `<p class="ed-notes mt-2">${ed.notes}</p>` : ''}
        </div>
    `).join('');
}

function populateProjects(projects) {
    const projectsContainer = document.getElementById('projects-container');
    projectsContainer.innerHTML = projects.map(proj => {
        const bullets = proj.bullets.map(b => `<li>${b}</li>`).join('');
        const linkHtml = proj.link
            ? `<a href="${proj.link}" target="_blank" class="project-link">View Repository <i class="fas fa-arrow-right"></i></a>`
            : '';

        return `
            <div class="glass-card project-card">
                <h3>${proj.title}</h3>
                <p class="project-meta">${proj.meta}</p>
                <ul>${bullets}</ul>
                ${linkHtml}
            </div>
        `;
    }).join('');
}

function populateCommunity(community) {
    const engagementList = document.getElementById('community-engagement');
    engagementList.innerHTML = community.engagement.map(item => `<li>${item}</li>`).join('');

    const certList = document.getElementById('community-certifications');
    certList.innerHTML = community.certifications.map(item => `<li>${item}</li>`).join('');
}

function populateFooter(footer, links) {
    document.getElementById('footer-year').textContent = footer.year;
    document.getElementById('footer-name').textContent = footer.name;

    const footerSocial = document.getElementById('footer-social');
    footerSocial.innerHTML = `
        <a href="${links.linkedin}" target="_blank"><i class="fab fa-linkedin"></i></a>
        <a href="${links.github}" target="_blank"><i class="fab fa-github"></i></a>
    `;
}

function initializeInteractions() {
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
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        // Close mobile menu when a link is clicked
        document.querySelectorAll('.nav-links li a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });
    }

    // Scroll Reveal Animation (Intersection Observer)
    const reveals = document.querySelectorAll('.reveal');
    const revealOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');

                // If it's a glass card, reset the inline styles to make it visible
                if (entry.target.classList.contains('glass-card')) {
                    entry.target.style.opacity = 1;
                    entry.target.style.transform = 'translateY(0)';
                }

                observer.unobserve(entry.target); // only animate once
            }
        });
    }, {
        root: null,
        threshold: 0.10,
        rootMargin: "0px 0px -50px 0px"
    });

    reveals.forEach(reveal => {
        revealOnScroll.observe(reveal);
    });

    // Sub-elements dynamic reveal setup (staggered)
    const cards = document.querySelectorAll('.glass-card');
    cards.forEach((card, index) => {
        card.style.opacity = 0;
        card.style.transform = 'translateY(20px)';
        card.style.transition = `all 0.3s ease-out ${index * 0.05}s`;
        revealOnScroll.observe(card);
    });


    // Active Link Highlighting
    const sections = document.querySelectorAll('section');
    const header = document.querySelector('header');
    const navItems = document.querySelectorAll('.nav-links li a');
    const allSections = [header, ...Array.from(sections)];

    window.addEventListener('scroll', () => {
        let current = '';
        allSections.forEach(section => {
            if (!section) return;
            const sectionTop = section.offsetTop;
            if (pageYOffset >= (sectionTop - 150)) {
                current = section.getAttribute('id');
            }
        });

        navItems.forEach(li => {
            li.classList.remove('active');
            if (li.getAttribute('href') && li.getAttribute('href').includes(current)) {
                li.classList.add('active');
            }
        });
    });

    // Trigger reveal immediately for elements already in view on load
    setTimeout(() => {
        const windowHeight = window.innerHeight;

        reveals.forEach(reveal => {
            const elementTop = reveal.getBoundingClientRect().top;
            if (elementTop < windowHeight - 50) {
                reveal.classList.add('active');
            }
        });

        cards.forEach(card => {
            const elementTop = card.getBoundingClientRect().top;
            if (elementTop < windowHeight - 50) {
                card.style.opacity = 1;
                card.style.transform = 'translateY(0)';
            }
        });
    }, 100);
}
