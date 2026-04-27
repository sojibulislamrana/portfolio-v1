// Component Templates - Embedded to avoid CORS issues
const ComponentTemplates = {
  navbar: `<nav id="desktop-nav">
    <div class="logo" onclick="location.href='#'">Sojibul Islam</div>
    <div class="nav-right">
        <ul class="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
        <div class="theme-switcher" onclick="toggleTheme()">
            <div class="theme-toggle-switch">
                <div class="theme-toggle-slider">
                    <span class="theme-icon">🌙</span>
                </div>
            </div>
        </div>
    </div>
</nav>
<nav id="hamburger-nav">
    <div class="logo" onclick="location.href='#'">Sojibul Islam</div>
    <div class="hamburger-menu">
        <div class="theme-switcher mobile" onclick="toggleTheme()">
            <div class="theme-toggle-switch">
                <div class="theme-toggle-slider">
                    <span class="theme-icon">🌙</span>
                </div>
            </div>
        </div>
        <div class="hamburger-icon" onclick="toggleMenu()">
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div class="menu-links">
            <li><a href="#about" onclick="toggleMenu()">About</a></li>
            <li><a href="#experience" onclick="toggleMenu()">Experience</a></li>
            <li><a href="#projects" onclick="toggleMenu()">Projects</a></li>
            <li><a href="#contact" onclick="toggleMenu()">Contact</a></li>
        </div>
    </div>
</nav>`,

  hero: `<section id="profile">
    <div class="section_pic-container">
        <img src="./assets/RanaBW.png" alt="Profile pic">
    </div>
    <div class="section_text">
        <p class="section_text_p1">Hello, I'm</p>
        <h1 class="title">Sojibul Islam Rana</h1>
        <p class="section_text_p2">Full Stack Developer</p>
        <div class="btn-container">
            <button class="btn btn-color-2" onclick="window.open('./assets/resume-example.pdf')">Download CV</button>
            <button class="btn btn-color-1" onclick="location.href='#contact'">Contact Info</button>
        </div>
    </div>
</section>`,

  about: `<section id="about">
    <p class="section_text_p1">Get To Know More</p>
    <h1 class="title">About Me</h1>
    
    <div class="about-wrapper">
        <div class="about-main-text">
            <h2 class="about-subtitle">Passionate Full Stack Developer</h2>
            <p class="about-description">
                I'm a dedicated Full Stack Developer with a passion for creating innovative web solutions. 
                With expertise spanning both frontend and backend technologies, I bring ideas to life through 
                clean, efficient code and thoughtful user experiences. My journey in web development has been 
                driven by curiosity, continuous learning, and a commitment to excellence.
            </p>
        </div>
        
        <div class="about-containers">
            <div class="details-container">
                <img src="./assets/experience.png" alt="Experience icon" class="icon">
                <h3>Experience</h3>
                <p>3+ years <br>Full Stack Development</p>
            </div>
            <div class="details-container">
                <img src="./assets/education.png" alt="Education icon" class="icon">
                <h3>Education</h3>
                <p>B.Sc. Computer Science<br>Software Engineering</p>
            </div>
            <div class="details-container">
                <img src="./assets/checkmark.png" alt="Projects icon" class="icon">
                <h3>Projects</h3>
                <p>50+ Projects<br>Completed</p>
            </div>
            <div class="details-container">
                <img src="./assets/checkmark.png" alt="Technologies icon" class="icon">
                <h3>Technologies</h3>
                <p>15+ Technologies<br>Mastered</p>
            </div>
        </div>

        <div class="about-highlights-section">
            <div class="details-container highlight-container">
                <img src="./assets/checkmark.png" alt="Mission icon" class="icon">
                <h3>Mission</h3>
                <p>Creating digital solutions that make a difference</p>
            </div>
            <div class="details-container highlight-container">
                <img src="./assets/checkmark.png" alt="Vision icon" class="icon">
                <h3>Vision</h3>
                <p>Building the future of web technology</p>
            </div>
            <div class="details-container highlight-container">
                <img src="./assets/checkmark.png" alt="Approach icon" class="icon">
                <h3>Approach</h3>
                <p>Fast, scalable, and user-centered development</p>
            </div>
        </div>

    </div>
    
    <img src="./assets/arrow.png" alt="Arrow icon" class="icon arrow" onclick="location.href='#experience'">
</section>`,

  experience: `<section id="experience">
    <p class="section_text_p1">Explore My</p>
    <h1 class="title">Experience</h1>
    
    <!-- Skills Section -->
    <div class="experience-details-container">
        <div class="about-containers">
            <div class="details-container">
                <h2 class="experience-sub-title">Frontend Development</h2>
                <div class="article-container">
                    <article>
                        <img src="./assets/checkmark.png" alt="Experience icon" class="icon">
                        <div>
                            <h3>HTML</h3>
                            <p>Experienced</p>
                        </div>
                    </article>
                    <article>
                        <img src="./assets/checkmark.png" alt="Experience icon" class="icon">
                        <div>
                            <h3>CSS</h3>
                            <p>Experienced</p>
                        </div>
                    </article>
                    <article>
                        <img src="./assets/checkmark.png" alt="Experience icon" class="icon">
                        <div>
                            <h3>JavaScript</h3>
                            <p>Experienced</p>
                        </div>
                    </article>
                    <article>
                        <img src="./assets/checkmark.png" alt="Experience icon" class="icon">
                        <div>
                            <h3>React</h3>
                            <p>Experienced</p>
                        </div>
                    </article>
                    <article>
                        <img src="./assets/checkmark.png" alt="Experience icon" class="icon">
                        <div>
                            <h3>TypeScript</h3>
                            <p>Intermediate</p>
                        </div>
                    </article>
                    <article>
                        <img src="./assets/checkmark.png" alt="Experience icon" class="icon">
                        <div>
                            <h3>Tailwind CSS</h3>
                            <p>Experienced</p>
                        </div>
                    </article>
                </div>
            </div>
            <div class="details-container">
                <h2 class="experience-sub-title">Backend Development</h2>
                <div class="article-container">
                    <article>
                        <img src="./assets/checkmark.png" alt="Experience icon" class="icon">
                        <div>
                            <h3>Node.js</h3>
                            <p>Experienced</p>
                        </div>
                    </article>
                    <article>
                        <img src="./assets/checkmark.png" alt="Experience icon" class="icon">
                        <div>
                            <h3>Express.js</h3>
                            <p>Experienced</p>
                        </div>
                    </article>
                    <article>
                        <img src="./assets/checkmark.png" alt="Experience icon" class="icon">
                        <div>
                            <h3>MongoDB</h3>
                            <p>Experienced</p>
                        </div>
                    </article>
                    <article>
                        <img src="./assets/checkmark.png" alt="Experience icon" class="icon">
                        <div>
                            <h3>PostgreSQL</h3>
                            <p>Intermediate</p>
                        </div>
                    </article>
                    <article>
                        <img src="./assets/checkmark.png" alt="Experience icon" class="icon">
                        <div>
                            <h3>Python</h3>
                            <p>Intermediate</p>
                        </div>
                    </article>
                    <article>
                        <img src="./assets/checkmark.png" alt="Experience icon" class="icon">
                        <div>
                            <h3>Git</h3>
                            <p>Experienced</p>
                        </div>
                    </article>
                </div>
            </div>
        </div>
    </div>

    <!-- Work Experience Timeline -->
    <div class="timeline-section">
        <h2 class="timeline-title">Professional Journey</h2>
        <div class="cv-timeline">
            <div class="cv-timeline-item">
                <div class="cv-timeline-date">
                    <span class="date-range">12-2024 / 12-2025</span>
                    <span class="duration">1 year</span>
                </div>
                <div class="cv-timeline-content">
                    <div class="cv-job-header">
                        <h3 class="cv-job-title">Full Stack Developer</h3>
                        <div class="cv-company-info">
                            <span class="cv-company">Soft Engine Lab</span>
                            <span class="cv-location">Rohomotput, Mymensingh</span>
                        </div>
                    </div>
                    <div class="cv-job-description">
                        <ul>
                            <li>Worked as a Full Stack Developer, building and maintaining web applications using React,
                                Node.js, and MongoDB
                            </li>
                            <li>Developed responsive front-end interfaces and integrated them with backend APIs</li>
                            <li>Contributed to backend development, including API design, database handling, and
                                server-side logic</li>
                            <li>Deployed and managed applications on production environments, handling basic DevOps
                                tasks</li>
                            <li>Collaborated with team members to debug issues, improve performance, and deliver
                                features on time</li>
                        </ul>
                    </div>
                    <div class="cv-technologies">
                        <span class="tech-tag">React</span>
                        <span class="tech-tag">Next.js</span>
                        <span class="tech-tag">Node.js</span>
                        <span class="tech-tag">MongoDB</span>
                        <span class="tech-tag">AWS</span>
                    </div>
                </div>
            </div>

            <div class="cv-timeline-item">
                <div class="cv-timeline-date">
                    <span class="date-range">05-2024 / 09-2024</span>
                    <span class="duration">5 months</span>
                </div>
                <div class="cv-timeline-content">
                    <div class="cv-job-header">
                        <h3 class="cv-job-title">Opensource Contribution</h3>
                        <div class="cv-company-info">
                            <span class="cv-company">Kubernetes</span>
                            <span class="cv-location">Opensource</span>
                        </div>
                    </div>
                    <div class="cv-job-description">
                    <ul>
                        <li>Contributed to Kubernetes by implementing localization updates and resolving minor issues in the codebase</li>
                        <li>Enhanced documentation and usability for broader accessibility through localization efforts</li>
                        <li>Participated in issue tracking, pull requests, and community discussions on GitHub</li>
                        <li>Worked within established contribution guidelines, improving familiarity with large-scale open-source workflows</li>
                        <li>Developed practical experience in debugging, version control, and collaborative software development</li>
                    </ul>
                    </div>
                    <div class="cv-technologies">
                        <span class="tech-tag">Git & GitHub</span>
                        <span class="tech-tag">JavaScript</span>
                        <span class="tech-tag">Markdown</span>
                        <span class="tech-tag">Node.js</span>
                        
                    </div>
                </div>
            </div>

            <div class="cv-timeline-item">
                <div class="cv-timeline-date">
                    <span class="date-range">10-2022 / 12-2023</span>
                    <span class="duration">1 year</span>
                </div>
                <div class="cv-timeline-content">
                    <div class="cv-job-header">
                        <h3 class="cv-job-title">Flutter Developer</h3>
                        <div class="cv-company-info">
                            <span class="cv-company">Tutora Academy</span>
                            <span class="cv-location">Ghunti, Mymensingh</span>
                        </div>
                    </div>
                    <div class="cv-job-description">
                    <ul>
                        <li>Developed and maintained cross-platform mobile and web applications using Flutter</li>
                         <li>Designed and implemented a server-side admin dashboard to manage application data and workflows</li>
                        <li>Built responsive UI components and improved user experience across multiple platforms</li>
                        <li>Created custom UI assets, including icons and animated visuals, to enhance branding and usability</li>
                    </ul>
                    </div>
                    <div class="cv-technologies">
                        <span class="tech-tag">Dart</span>
                        <span class="tech-tag">Flutter</span>
                        <span class="tech-tag">Riverpod</span>
                        <span class="tech-tag">Firebase</span>
                        <span class="tech-tag">Git</span>
                    </div>
                </div>
            </div>
            <div class="cv-timeline-item">
                <div class="cv-timeline-date">
                    <span class="date-range">03-2023 / 03-2024</span>
                    <span class="duration">1 year</span>
                </div>
                <div class="cv-timeline-content">
                    <div class="cv-job-header">
                        <h3 class="cv-job-title">Programmer</h3>
                        <div class="cv-company-info">
                            <span class="cv-company">DhumketuX</span>
                            <span class="cv-location">Kathgola, Mymensingh</span>
                        </div>
                    </div>
                    <div class="cv-job-description">
                    <ul>
                        <li>Worked as a junior programmer intern on research-driven projects at DhumketuX</li>
                        <li>Contributed to software development efforts during the Putimach-01 rocket initiative</li>
                        <li>Implemented image processing techniques for obstacle detection in experimental systems</li>
                        <li>Applied basic machine learning concepts to improve detection accuracy and system behavior</li>
                        <li>Collaborated with a multidisciplinary team in a fast-paced research environment</li>
                    </ul>
                    </div>
                    <div class="cv-technologies">
                        <span class="tech-tag">Python</span>
                        <span class="tech-tag">YOLO</span>
                        <span class="tech-tag">AI/ML</span>
                        <span class="tech-tag">Keras</span>
                        <span class="tech-tag">Git</span>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Tools & Technologies -->
    <div class="tools-section">
        <h2 class="tools-title">Tools & Technologies I Use</h2>
        <div class="tools-grid">
            <div class="tool-category">
                <h3>Development</h3>
                <div class="tool-tags">
                    <span class="tool-tag">Git</span>
                    <span class="tool-tag">Postman</span>
                    <span class="tool-tag">MongoDB</span>
                    <span class="tool-tag">MySQL</span>
                    <span class="tool-tag">AI/ML</span>

                </div>
            </div>
            <div class="tool-category">
                <h3>Framework</h3>
                <div class="tool-tags">
                    <span class="tool-tag">React</span>
                    <span class="tool-tag">Next.js</span>
                    <span class="tool-tag">Express.js</span>
                    <span class="tool-tag">Flutter</span>
                    <span class="tool-tag">SwiftUI</span>
                </div>
            </div>
            <div class="tool-category">
                <h3>Cloud & DevOps</h3>
                <div class="tool-tags">
                    <span class="tool-tag">AWS</span>
                    <span class="tool-tag">Vercel</span>
                    <span class="tool-tag">Netlify</span>
                    <span class="tool-tag">Firebase</span>
                    <span class="tool-tag">Docker</span>
                    <span class="tool-tag">Kubernetes</span>
                    <span class="tool-tag">CI/CD</span>

                </div>
            </div>
            <div class="tool-category">
                <h3>Testing</h3>
                <div class="tool-tags">
                    <span class="tool-tag">Jest</span>
                    <span class="tool-tag">Vitest</span>
                    <span class="tool-tag">Playwright</span>
                    <span class="tool-tag">Unit Testing</span>
                </div>
            </div>
            <div class="tool-category">
                <h3>Language</h3>
                <div class="tool-tags">
                    <span class="tool-tag">C/C++</span>
                    <span class="tool-tag">JavaScript</span>
                    <span class="tool-tag">TypeScript</span>
                    <span class="tool-tag">Elixir</span>
                    <span class="tool-tag">Python</span>
                    <span class="tool-tag">Dart</span>
                </div>
            </div>
            <div class="tool-category">
                <h3>IDE & DevTools</h3>
                <div class="tool-tags">
                    <span class="tool-tag">Linux</span>
                    <span class="tool-tag">Neovim</span>
                    <span class="tool-tag">Emacs</span>
                    <span class="tool-tag">Bash Scripting</span>
                </div>
            </div>
        </div>
    </div>
    
    <img src="./assets/arrow.png" alt="Arrow icon" class="icon arrow" onclick="location.href='#projects'">
</section>`,

  projects: `<section id="projects">
    <p class="section_text_p1">Browse My Recent</p>
    <h1 class="title">Projects</h1>
    <div class="projects-container">
        <div class="projects-grid">
            <div class="project-card">
                <div class="project-image-wrapper">
                    <img src="./assets/project-1.png" alt="Social Event Platform" class="project-img">
                    <div class="project-overlay">
                        <div class="project-links">
                            <a href="https://github.com/sojibulislamrana/social-events-client" class="project-link" target="_blank" rel="noopener noreferrer">
                                <img src="./assets/github.png" alt="GitHub" class="project-link-icon">
                            </a>
                            <a href="https://social-events-platform-1fe94.web.app/upcoming-events" class="project-link" target="_blank" rel="noopener noreferrer">
                                <span>🔗</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="project-content">
                    <h2 class="project-title">Social Event Platform</h2>
                    <p class="project-description">A comprehensive social events platform for discovering, creating, and managing events with real-time updates and social features.</p>
                    <div class="project-tech">
                        <span class="tech-badge">React</span>
                        <span class="tech-badge">Firebase</span>
                        <span class="tech-badge">Node.js</span>
                    </div>
                    <button class="btn btn-color-1 project-details-btn" onclick="openProjectDetails('social-events')">View Details</button>
                </div>
            </div>
            
            <div class="project-card">
                <div class="project-image-wrapper">
                    <img src="./assets/project-2.png" alt="hero.io" class="project-img">
                    <div class="project-overlay">
                        <div class="project-links">
                            <a href="https://github.com/sojibulislamrana/hero.io" class="project-link" target="_blank" rel="noopener noreferrer">
                                <img src="./assets/github.png" alt="GitHub" class="project-link-icon">
                            </a>
                            <a href="https://github.com/sojibulislamrana/cardio" class="project-link" target="_blank" rel="noopener noreferrer">
                                <span>🔗</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="project-content">
                    <h2 class="project-title">hero.io</h2>
                    <p class="project-description">An interactive hero-based application with dynamic features and engaging user interface for enhanced user experience.</p>
                    <div class="project-tech">
                        <span class="tech-badge">JavaScript</span>
                        <span class="tech-badge">HTML5</span>
                        <span class="tech-badge">CSS3</span>
                    </div>
                    <button class="btn btn-color-1 project-details-btn" onclick="openProjectDetails('hero-io')">View Details</button>
                </div>
            </div>
            
            <div class="project-card">
                <div class="project-image-wrapper">
                    <img src="./assets/project-3.png" alt="StyleDecor" class="project-img">
                    <div class="project-overlay">
                        <div class="project-links">
                            <a href="https://github.com/sojibulislamrana/styleDecor-C.git" class="project-link" target="_blank" rel="noopener noreferrer">
                                <img src="./assets/github.png" alt="GitHub" class="project-link-icon">
                            </a>
                            <a href="https://style-decor-532c3.web.app/" class="project-link" target="_blank" rel="noopener noreferrer">
                                <span>🔗</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="project-content">
                    <h2 class="project-title">StyleDecor</h2>
                    <p class="project-description">An elegant interior design and decoration platform showcasing beautiful home styling solutions and design inspirations.</p>
                    <div class="project-tech">
                        <span class="tech-badge">React</span>
                        <span class="tech-badge">Firebase</span>
                        <span class="tech-badge">CSS3</span>
                    </div>
                    <button class="btn btn-color-1 project-details-btn" onclick="openProjectDetails('style-decor')">View Details</button>
                </div>
            </div>
        </div>
    </div>
    <img src="./assets/arrow.png" alt="Arrow icon" class="icon arrow" onclick="location.href='#contact'">
</section>`,

  contact: `<section id="contact">
    <p class="section_text_p1">Get in Touch</p>
    <h1 class="title">Contact Me</h1>
    
    <div class="contact-main-container">
        <div class="contact-info-section">
            <div class="contact-intro">
                <h3>Let's Work Together</h3>
                <p>I'm always interested in new opportunities and exciting projects. Whether you have a question, want to collaborate, or just want to say hello, feel free to reach out!</p>
            </div>
            
            <div class="contact-methods">
                <div class="contact-method">
                    <div class="contact-icon-wrapper">
                        <img src="./assets/email.png" alt="Email icon" class="icon contact-icon">
                    </div>
                    <div class="contact-details">
                        <h4>Email</h4>
                        <p><a href="mailto:sojibulislamrana.dev@gmail.com">sojibulislamrana.dev@gmail.com</a></p>
                        <span class="contact-note">Best for detailed discussions</span>
                    </div>
                </div>
                
                <div class="contact-method">
                    <div class="contact-icon-wrapper">
                        <span class="contact-icon-text">📱</span>
                    </div>
                    <div class="contact-details">
                        <h4>Phone</h4>
                        <p><a href="tel:+8801960629911">+880 196 062 9911</a></p>
                        <span class="contact-note">Available 9 AM - 6 PM (GMT+6)</span>
                    </div>
                </div>
                
                <div class="contact-method">
                    <div class="contact-icon-wrapper">
                        <img src="./assets/linkedin.png" alt="LinkedIn icon" class="icon contact-icon">
                    </div>
                    <div class="contact-details">
                        <h4>LinkedIn</h4>
                        <p><a href="https://www.linkedin.com/in/sojibulislamrana/">Connect with me</a></p>
                        <span class="contact-note">Professional networking</span>
                    </div>
                </div>
                
                <div class="contact-method">
                    <div class="contact-icon-wrapper">
                        <img src="./assets/github.png" alt="GitHub icon" class="icon contact-icon">
                    </div>
                    <div class="contact-details">
                        <h4>GitHub</h4>
                        <p><a href="https://github.com/sojibulislamrana">View my code</a></p>
                        <span class="contact-note">Check out my projects</span>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="contact-form-section">
            <h3>Send me a message</h3>
            <form class="contact-form" id="contactForm">
                <div class="form-group">
                    <input type="text" id="name" name="name" placeholder="Your Name" required>
                </div>
                <div class="form-group">
                    <input type="email" id="email" name="email" placeholder="Your Email" required>
                </div>
                <div class="form-group">
                    <input type="text" id="subject" name="subject" placeholder="Subject" required>
                </div>
                <div class="form-group">
                    <textarea id="message" name="message" placeholder="Your Message" rows="5" required></textarea>
                </div>
                <button type="submit" class="btn btn-color-1 form-submit-btn">
                    <span class="btn-text">Send Message</span>
                    <span class="btn-loading" style="display: none;">Sending...</span>
                </button>
            </form>
        </div>
    </div>
    
    <div class="contact-availability">
        <div class="availability-item">
            <span class="availability-status">🟢</span>
            <span>Available for freelance projects</span>
        </div>
        <div class="availability-item">
            <span class="availability-status">⚡</span>
            <span>Usually responds within 24 hours</span>
        </div>
    </div>
</section>`,

  footer: `<footer>
    <div class="footer-wrapper">
        <div class="footer-content-new">
            <div class="footer-brand-new">
                <div class="footer-logo-new">Sojibul Islam Rana</div>
                <p class="footer-tagline-new">Full Stack Developer</p>
                <p class="footer-description-new">
                    Creating innovative web solutions with modern technologies. 
                    Let's build something amazing together.
                </p>
                <div class="footer-social-new">
                    <a href="https://www.linkedin.com/in/sojibulislamrana/" class="social-link-new" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                        <img src="./assets/linkedin.png" alt="LinkedIn">
                    </a>
                    <a href="https://github.com/sojibulislamrana" class="social-link-new" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
                        <img src="./assets/github.png" alt="GitHub">
                    </a>
                    <a href="mailto:sojibulislamrana.dev@gmail.com" class="social-link-new" aria-label="Email">
                        <img src="./assets/email.png" alt="Email">
                    </a>
                    <a href="tel:+8801960629911" class="social-link-new" aria-label="Phone">
                        <span class="social-icon-text">📱</span>
                    </a>
                </div>
            </div>
            
            <div class="footer-links-new">
                <div class="footer-column-new">
                    <h4 class="footer-heading-new">Quick Links</h4>
                    <ul class="footer-links-list">
                        <li><a href="#about">About</a></li>
                        <li><a href="#experience">Experience</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
                
                <div class="footer-column-new">
                    <h4 class="footer-heading-new">Services</h4>
                    <ul class="footer-links-list">
                        <li><a href="#projects">Web Development</a></li>
                        <li><a href="#projects">UI/UX Design</a></li>
                        <li><a href="#projects">API Development</a></li>
                        <li><a href="#contact">Consulting</a></li>
                    </ul>
                </div>
            </div>
        </div>
        
        <div class="footer-bottom-new">
            <p>&copy; 2024 Sojibul Islam Rana. All Rights Reserved.</p>
        </div>
    </div>
</footer>`,
};

// Component Loader Script
class ComponentLoader {
  constructor() {
    this.components = ComponentTemplates;
  }

  loadComponent(componentName) {
    return this.components[componentName] || "";
  }

  renderComponent(componentName, targetSelector) {
    const html = this.loadComponent(componentName);
    const target = document.querySelector(targetSelector);
    if (target) {
      target.innerHTML = html;
      this.initializeComponent(componentName);
    } else {
      console.warn(
        `Target selector ${targetSelector} not found for component ${componentName}`,
      );
    }
  }

  initializeComponent(componentName) {
    // Re-initialize theme icons if navbar is loaded
    if (componentName === "navbar") {
      setTimeout(() => {
        const savedTheme = localStorage.getItem("theme");
        const themeIcons = document.querySelectorAll(".theme-icon");
        if (savedTheme === "dark") {
          themeIcons.forEach((icon) => (icon.textContent = "☀️"));
        } else {
          themeIcons.forEach((icon) => (icon.textContent = "🌙"));
        }
      }, 100);
    }
  }

  renderAll() {
    // Load all components in order
    this.renderComponent("navbar", "#navbar-container");
    this.renderComponent("hero", "#hero-container");
    this.renderComponent("about", "#about-container");
    this.renderComponent("experience", "#experience-container");
    this.renderComponent("projects", "#projects-container");
    this.renderComponent("contact", "#contact-container");
    this.renderComponent("footer", "#footer-container");

    // Initialize scripts after all components are loaded
    setTimeout(() => {
      if (typeof handleNavbarScroll === "function") {
        window.addEventListener("scroll", handleNavbarScroll);
        handleNavbarScroll();
      }

      // Re-attach contact form handler if it exists
      const contactForm = document.getElementById("contactForm");
      if (contactForm && typeof handleContactForm === "function") {
        contactForm.addEventListener("submit", handleContactForm);
      }
    }, 200);
  }
}

// Initialize component loader when DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  const loader = new ComponentLoader();
  loader.renderAll();
});
