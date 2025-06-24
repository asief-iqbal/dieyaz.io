// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', () => {
  /* Preloader */
  const preloader = document.querySelector('.preloader');
  window.addEventListener('load', () => {
    document.body.classList.remove('loading');
    preloader.style.display = 'none';
  });

  /* Custom Cursor */
  const cursor = document.querySelector('.cursor');
  const cursorFollower = document.querySelector('.cursor-follower');
  
  if (cursor && cursorFollower) {
    document.addEventListener('mousemove', (e) => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
      cursorFollower.style.left = e.clientX + 'px';
      cursorFollower.style.top = e.clientY + 'px';
      
      // Show cursors after first movement
      if (cursor.style.opacity === '0') {
        cursor.style.opacity = '1';
        cursorFollower.style.opacity = '1';
      }
    });
    
    // Cursor effects on links and buttons
    const links = document.querySelectorAll('a, button, .social-icon, .project-item');
    links.forEach(link => {
      link.addEventListener('mouseenter', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
        cursorFollower.style.transform = 'translate(-50%, -50%) scale(1.5)';
        cursorFollower.style.background = 'rgba(67, 97, 238, 0.1)';
      });
      
      link.addEventListener('mouseleave', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(1)';
        cursorFollower.style.transform = 'translate(-50%, -50%) scale(1)';
        cursorFollower.style.background = 'rgba(67, 97, 238, 0.2)';
      });
    });
  }

  /* Initialize AOS (Animate on Scroll) */
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }

  /* Sticky Header */
  const header = document.querySelector('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      header.classList.add('sticky');
    } else {
      header.classList.remove('sticky');
    }
  });

  /* Hamburger Menu Toggle */
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.querySelector('.nav-links');
  
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    
    // Animate hamburger to X
    const spans = hamburger.querySelectorAll('span');
    spans.forEach(span => span.classList.toggle('active'));
  });

  /* Smooth Scrolling */
  document.querySelectorAll('a.nav-item, .back-to-top, a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        navLinks.classList.remove('active'); // Close mobile menu if open
        
        window.scrollTo({
          top: target.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    });
  });

  /* Typewriter Effect in Hero Section */
  const typewriterSpan = document.querySelector('.typewriter-roles');
  const roles = [
    'AI Engineer',
    'Data Scientist',
    'Full Stack Developer',
    'AI Agent Specialist'
  ];
  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 100;

  function typeRole() {
    const currentRole = roles[roleIndex];
    if (isDeleting) {
      typewriterSpan.textContent = currentRole.substring(0, charIndex - 1);
      charIndex--;
      typingSpeed = 50;
    } else {
      typewriterSpan.textContent = currentRole.substring(0, charIndex + 1);
      charIndex++;
      typingSpeed = 120;
    }
    if (!isDeleting && charIndex === currentRole.length) {
      isDeleting = true;
      typingSpeed = 1800;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      typingSpeed = 600;
    }
    setTimeout(typeRole, typingSpeed);
  }
  if (typewriterSpan) {
    setTimeout(typeRole, 1000);
  }

  /* Floating CV Button Scroll */
  const floatingCVBtn = document.querySelector('.floating-cv-btn');
  if (floatingCVBtn) {
    floatingCVBtn.addEventListener('click', function(e) {
      e.preventDefault();
      const aboutSection = document.getElementById('about');
      if (aboutSection) {
        window.scrollTo({
          top: aboutSection.offsetTop - 60,
          behavior: 'smooth'
        });
      }
    });
  }

  /* Initialize Skill Bars */
  function initSkillBars() {
    const skillBars = document.querySelectorAll('.skill-bar');
    skillBars.forEach(bar => {
      const level = bar.getAttribute('data-level');
      setTimeout(() => {
        bar.style.width = level;
      }, 300);
    });
  }

  /* Tabs for Skills Section */
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');
  
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.getAttribute('data-tab');
      
      // Remove active class from all buttons and contents
      tabBtns.forEach(btn => btn.classList.remove('active'));
      tabContents.forEach(content => content.classList.remove('active'));
      
      // Add active class to current button and content
      btn.classList.add('active');
      document.getElementById(target).classList.add('active');
      
      // Reinitialize skill bars
      initSkillBars();
    });
  });

  /* Project Filtering */
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectItems = document.querySelectorAll('.project-item');
  
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.getAttribute('data-filter');
      
      // Remove active class from all buttons
      filterBtns.forEach(btn => btn.classList.remove('active'));
      
      // Add active class to current button
      btn.classList.add('active');
      
      // Filter projects
      projectItems.forEach(item => {
        const category = item.getAttribute('data-category');
        
        if (filter === 'all' || filter === category) {
          item.style.display = 'block';
          setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
          }, 100);
        } else {
          item.style.opacity = '0';
          item.style.transform = 'translateY(20px)';
          setTimeout(() => {
            item.style.display = 'none';
          }, 300);
        }
      });
    });
  });

  /* Contact Form Submission */
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form values (would normally send to a server)
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;
      
      // Simulate form submission - in a real app, you'd send data to server
      const button = contactForm.querySelector('button');
      const originalText = button.innerHTML;
      
      button.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
      button.disabled = true;
      
      // Simulate a network request
      setTimeout(() => {
        // Success message
        contactForm.innerHTML = `
          <div class="success-message">
            <i class="fas fa-check-circle"></i>
            <h3>Message Sent Successfully!</h3>
            <p>Thank you for reaching out, ${name}. I'll get back to you soon.</p>
          </div>
        `;
      }, 2000);
    });
  }

  /* Initialize Elements */
  initSkillBars();
});

/* Reveal animations when scrolling */
window.addEventListener('scroll', () => {
  const elements = document.querySelectorAll('.fade-up:not(.visible)');
  
  elements.forEach(element => {
    if (isInViewport(element)) {
      element.classList.add('visible');
    }
  });
});

/* Helper function to check if element is in viewport */
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.85 &&
    rect.bottom >= 0
  );
}

