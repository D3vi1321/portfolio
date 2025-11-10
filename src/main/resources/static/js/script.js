// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    
    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });

    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        const navbar = document.getElementById('navbar');
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = 'none';
        }
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

    // Load skills data
    loadSkills();
    
    // Load projects data
    loadProjects();
    
    // Contact form handling
    setupContactForm();
    
    // Animate elements on scroll
    setupScrollAnimations();
});

// Load Skills from API
async function loadSkills() {
    try {
        const response = await fetch('/api/skills');
        const skills = await response.json();
        
        renderSkills('programming-skills', skills.programmingLanguages);
        renderSkills('framework-skills', skills.frameworks);
        renderSkills('tool-skills', skills.tools);
        
        // Animate skill bars when they come into view
        animateSkillBars();
    } catch (error) {
        console.error('Error loading skills:', error);
    }
}

// Render Skills
function renderSkills(containerId, skillsData) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    container.innerHTML = '';
    
    Object.entries(skillsData).forEach(([skill, percentage]) => {
        const skillItem = document.createElement('div');
        skillItem.className = 'skill-item';
        skillItem.innerHTML = `
            <div class="skill-header">
                <span class="skill-name">${skill}</span>
                <span class="skill-percentage">${percentage}%</span>
            </div>
            <div class="skill-bar">
                <div class="skill-progress" data-percentage="${percentage}"></div>
            </div>
        `;
        container.appendChild(skillItem);
    });
}

// Animate Skill Bars
function animateSkillBars() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const skillBars = entry.target.querySelectorAll('.skill-progress');
                skillBars.forEach(bar => {
                    const percentage = bar.dataset.percentage;
                    setTimeout(() => {
                        bar.style.width = percentage + '%';
                    }, 200);
                });
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    document.querySelectorAll('.skills-category').forEach(category => {
        observer.observe(category);
    });
}

// Load Projects from API
async function loadProjects() {
    try {
        const response = await fetch('/api/projects');
        const projects = await response.json();
        
        renderProjects(projects);
    } catch (error) {
        console.error('Error loading projects:', error);
    }
}

// Render Projects
function renderProjects(projects) {
    const container = document.getElementById('projects-grid');
    if (!container) return;
    
    container.innerHTML = '';
    
    Object.values(projects).forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        
        const technologiesHtml = project.technologies.map(tech => 
            `<span class="tech-tag">${tech}</span>`
        ).join('');
        
        const highlightsHtml = project.highlights.map(highlight => 
            `<li>${highlight}</li>`
        ).join('');
        
        projectCard.innerHTML = `
            <h3 class="project-title">${project.title}</h3>
            <p class="project-description">${project.description}</p>
            <div class="project-technologies">
                ${technologiesHtml}
            </div>
            <ul class="project-highlights">
                ${highlightsHtml}
            </ul>
        `;
        
        container.appendChild(projectCard);
    });
}

// Setup Contact Form
function setupContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;
    
    form.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const formData = new FormData(form);
        const contactData = {
            name: formData.get('name'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            subject: formData.get('subject'),
            message: formData.get('message')
        };
        
        // Show loading
        showLoading(true);
        
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(contactData)
            });
            
            const result = await response.json();
            
            if (response.ok && result.status === 'success') {
                showMessage(result.message, 'success');
                form.reset();
            } else {
                showMessage(result.message || 'An error occurred. Please try again.', 'error');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            showMessage('Network error. Please check your connection and try again.', 'error');
        } finally {
            showLoading(false);
        }
    });
}

// Show Loading Overlay
function showLoading(show) {
    const overlay = document.getElementById('loading-overlay');
    if (overlay) {
        overlay.style.display = show ? 'flex' : 'none';
    }
}

// Show Message
function showMessage(message, type) {
    const container = document.getElementById('message-container');
    if (!container) return;
    
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${type}`;
    messageDiv.textContent = message;
    
    container.appendChild(messageDiv);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (messageDiv.parentNode) {
            messageDiv.parentNode.removeChild(messageDiv);
        }
    }, 5000);
    
    // Remove on click
    messageDiv.addEventListener('click', () => {
        if (messageDiv.parentNode) {
            messageDiv.parentNode.removeChild(messageDiv);
        }
    });
}

// Setup Scroll Animations
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    document.querySelectorAll('.project-card, .timeline-item, .about-stats .stat').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Active Navigation Link Highlighting
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

// Update active nav link on scroll
window.addEventListener('scroll', updateActiveNavLink);

// Typing Animation for Hero Title
function typeWriter() {
    const text = "Java Full Stack Developer";
    const element = document.querySelector('.hero-subtitle');
    if (!element) return;
    
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, 100);
        }
    }
    
    // Start typing animation after a delay
    setTimeout(type, 1000);
}

// Initialize typing animation
window.addEventListener('load', typeWriter);

// Parallax Effect for Hero Section
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Form Validation
function validateForm(formData) {
    const errors = [];
    
    if (!formData.get('name') || formData.get('name').trim().length < 2) {
        errors.push('Name must be at least 2 characters long');
    }
    
    const email = formData.get('email');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
        errors.push('Please enter a valid email address');
    }
    
    if (!formData.get('subject') || formData.get('subject').trim().length < 5) {
        errors.push('Subject must be at least 5 characters long');
    }
    
    if (!formData.get('message') || formData.get('message').trim().length < 10) {
        errors.push('Message must be at least 10 characters long');
    }
    
    return errors;
}

// Add CSS class for active nav link
const style = document.createElement('style');
style.textContent = `
    .nav-link.active {
        color: #2563eb !important;
    }
    .nav-link.active::after {
        width: 100% !important;
    }
`;
document.head.appendChild(style);
