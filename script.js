// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', () => {
  /* Hamburger Menu Toggle */
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.querySelector('.nav-links');
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

  /* Smooth Scrolling */
  document.querySelectorAll('a.nav-item').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      navLinks.classList.remove('active'); // Close mobile menu if open
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  /* Typewriter Effect in Hero Section */
  const typewriter = document.getElementById('typewriter');
  const messages = ['Web Developer.', 'Designer.', 'Creator.'];
  let messageIndex = 0;
  let charIndex = 0;
  function type() {
    if (charIndex < messages[messageIndex].length) {
      typewriter.textContent += messages[messageIndex].charAt(charIndex);
      charIndex++;
      setTimeout(type, 150);
    } else {
      setTimeout(erase, 2000);
    }
  }
  function erase() {
    if (charIndex > 0) {
      typewriter.textContent = messages[messageIndex].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(erase, 100);
    } else {
      messageIndex = (messageIndex + 1) % messages.length;
      setTimeout(type, 500);
    }
  }
  type();

  /* Animate Progress Bars on Scroll */
  const progressBars = document.querySelectorAll('.progress');
  function animateProgress() {
    progressBars.forEach(bar => {
      const targetWidth = bar.style.width;
      bar.style.width = '0';
      setTimeout(() => {
        bar.style.width = targetWidth;
      }, 300);
    });
  }
  // Trigger once when the skills section is in view
  const skillsSection = document.getElementById('skills');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateProgress();
        observer.unobserve(skillsSection);
      }
    });
  }, { threshold: 0.5 });
  observer.observe(skillsSection);

  /* Modal Popup for Projects */
  const modal = document.getElementById('modal');
  const modalTitle = document.getElementById('modal-title');
  const modalDescription = document.getElementById('modal-description');
  const modalClose = document.getElementById('modal-close');
  
  document.querySelectorAll('.project-item').forEach(item => {
    item.addEventListener('click', () => {
      modalTitle.textContent = item.dataset.title;
      modalDescription.textContent = item.dataset.description;
      modal.style.display = 'flex';
    });
  });
  
  modalClose.addEventListener('click', () => {
    modal.style.display = 'none';
  });
  
  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });

  /* Theme Toggle */
  const themeToggle = document.getElementById('theme-toggle');
  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
  });
});

