function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");

    if (menu && icon) {
        menu.classList.toggle("open");
        icon.classList.toggle("open");
    }
}

function openProjectDetails(projectId) {
    const projectPages = {
        'live-docs': 'project-live-docs.html',
        'unishop': 'project-unishop.html',
        'hallufix': 'project-hallufix.html',
        'onething': 'project-onething.html',
        'cli-taskmgr': 'project-cli-taskmgr.html',
        'raylib-game': 'project-raylib-game.html',
        'social-events': 'project-social-events.html',
        'hero-io': 'project-hero-io.html',
        'style-decor': 'project-style-decor.html'
    };
    
    if (projectPages[projectId]) {
        window.location.href = projectPages[projectId];
    }
}

function filterProjects(category, buttonElement) {
    const cards = document.querySelectorAll('.project-card');
    const buttons = document.querySelectorAll('.filter-btn');

    // Update active button state
    if (buttons && buttonElement) {
        buttons.forEach(btn => btn.classList.remove('active'));
        buttonElement.classList.add('active');
    }

    // Filter cards
    cards.forEach(card => {
        const cardCat = card.getAttribute('data-category');
        if (category === 'all' || cardCat === category) {
            card.style.display = 'flex';
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, 50);
        } else {
            card.style.opacity = '0';
            card.style.transform = 'translateY(10px)';
            setTimeout(() => {
                card.style.display = 'none';
            }, 250);
        }
    });
}

function toggleTheme() {
    const body = document.body;
    const themeIcons = document.querySelectorAll('.theme-icon');
    
    if (body.getAttribute('data-theme') === 'dark') {
        body.removeAttribute('data-theme');
        themeIcons.forEach(icon => icon.textContent = '🌙');
        localStorage.setItem('theme', 'light');
    } else {
        body.setAttribute('data-theme', 'dark');
        themeIcons.forEach(icon => icon.textContent = '☀️');
        localStorage.setItem('theme', 'dark');
    }
}

// Navbar scroll effect
function handleNavbarScroll() {
    const desktopNav = document.getElementById('desktop-nav');
    const hamburgerNav = document.getElementById('hamburger-nav');
    const scrollY = window.scrollY;
    
    if (desktopNav && hamburgerNav) {
        if (scrollY > 60) {
            desktopNav.classList.add('scrolled');
            hamburgerNav.classList.add('scrolled');
        } else {
            desktopNav.classList.remove('scrolled');
            hamburgerNav.classList.remove('scrolled');
        }
    }
}

// Toast notification function
function showToast(message, type = 'success') {
    // Remove existing toast if any
    const existingToast = document.querySelector('.toast');
    if (existingToast) {
        existingToast.remove();
    }

    // Create toast element
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    
    const icon = type === 'success' ? '✅' : '❌';
    
    toast.innerHTML = `
        <span class="toast-icon">${icon}</span>
        <span class="toast-message">${message}</span>
        <button class="toast-close" onclick="this.parentElement.remove()">×</button>
    `;
    
    document.body.appendChild(toast);
    
    // Show toast
    setTimeout(() => toast.classList.add('show'), 100);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (toast.parentElement) {
            toast.classList.remove('show');
            setTimeout(() => toast.remove(), 300);
        }
    }, 5000);
}

// Contact form handler
function handleContactForm(event) {
    event.preventDefault();
    
    const form = event.target;
    const submitBtn = form.querySelector('.form-submit-btn');
    const btnText = submitBtn.querySelector('.btn-text');
    const btnLoading = submitBtn.querySelector('.btn-loading');
    
    // Get form data
    const formData = new FormData(form);
    const name = formData.get('name');
    const email = formData.get('email');
    const subject = formData.get('subject');
    const message = formData.get('message');
    
    // Validate form
    if (!name || !email || !subject || !message) {
        showToast('Please fill in all fields', 'error');
        return;
    }
    
    // Show loading state
    submitBtn.disabled = true;
    btnText.style.display = 'none';
    btnLoading.style.display = 'inline';
    
    // Simulate form submission
    setTimeout(() => {
        // Reset button state
        submitBtn.disabled = false;
        btnText.style.display = 'inline';
        btnLoading.style.display = 'none';
        
        // Show success message
        showToast(`Thank you ${name}! Your message has been sent successfully. I'll get back to you soon.`, 'success');
        
        // Reset form
        form.reset();
    }, 1200);
}

// Load saved theme on page load
document.addEventListener('DOMContentLoaded', function() {
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme === 'dark') {
        document.body.setAttribute('data-theme', 'dark');
    }
    
    // Initialize theme icons after components load
    setTimeout(() => {
        const themeIcons = document.querySelectorAll('.theme-icon');
        if (savedTheme === 'dark') {
            themeIcons.forEach(icon => icon.textContent = '☀️');
        } else {
            themeIcons.forEach(icon => icon.textContent = '🌙');
        }
    }, 300);
    
    // Add contact form event listener after components load
    setTimeout(() => {
        const contactForm = document.getElementById('contactForm');
        if (contactForm) {
            contactForm.addEventListener('submit', handleContactForm);
        }
    }, 300);
    
    // Add scroll event listener for navbar
    window.addEventListener('scroll', handleNavbarScroll);
    
    // Initial check for navbar state after components load
    setTimeout(() => {
        handleNavbarScroll();
    }, 300);
});
