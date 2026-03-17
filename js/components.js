// Shared nav HTML — injected by each page
const NAV_HTML = `
<nav id="nav">
  <a href="/index.html" class="nav-logo"><span>Concierge Bar</span></a>
  <ul class="nav-links">
    <li><a href="/gift-boxes.html">Gift Boxes</a></li>
    <li><a href="/services.html">Services</a></li>
    <li><a href="/about.html">About</a></li>
    <li><a href="/blog.html">The Edit</a></li>
  </ul>
  <a href="/contact.html" class="nav-cta">Enquire</a>
  <button class="hamburger" id="hamburger" aria-label="Menu">
    <span></span><span></span><span></span>
  </button>
</nav>
<div class="mobile-menu" id="mobileMenu">
  <a href="/gift-boxes.html">Gift Boxes</a>
  <a href="/services.html">Services</a>
  <a href="/about.html">About</a>
  <a href="/blog.html">The Edit</a>
  <a href="/contact.html" class="mob-cta">Enquire</a>
</div>
`;

const FOOTER_HTML = `
<div class="marquee-strip">
  <div class="marquee-track">
    <span class="marquee-item">Lifestyle Management <span>·</span></span>
    <span class="marquee-item">Personal Shopping <span>·</span></span>
    <span class="marquee-item">Gift Curation <span>·</span></span>
    <span class="marquee-item">Shipping Across Europe <span>·</span></span>
    <span class="marquee-item">Lifestyle Management <span>·</span></span>
    <span class="marquee-item">Personal Shopping <span>·</span></span>
    <span class="marquee-item">Gift Curation <span>·</span></span>
    <span class="marquee-item">Shipping Across Europe <span>·</span></span>
  </div>
</div>
<footer>
  <div class="footer-top">
    <div>
      <div class="footer-brand-name">Concierge Bar</div>
      <span class="footer-brand-tag">Lisbon, Portugal</span>
      <p class="footer-tagline">Curated gift boxes and concierge services for those who care about the detail.</p>
    </div>
    <div>
      <div class="footer-col-title">Services</div>
      <ul class="footer-links">
        <li><a href="/services.html">Gift Curation</a></li>
        <li><a href="/services.html">Personal Shopping</a></li>
        <li><a href="/services.html">Lifestyle Management</a></li>
      </ul>
    </div>
    <div>
      <div class="footer-col-title">Company</div>
      <ul class="footer-links">
        <li><a href="/about.html">About</a></li>
        <li><a href="/blog.html">The Edit</a></li>
        <li><a href="/contact.html">Enquire</a></li>
        <li><a href="https://instagram.com" target="_blank">Instagram</a></li>
      </ul>
    </div>
  </div>
  <div class="footer-bottom">
    <span class="footer-legal">© 2025 Concierge Bar. All rights reserved.</span>
    <span class="footer-made">Made with <span>♥</span> in Lisbon</span>
  </div>
</footer>
`;

// Inject on load
document.addEventListener('DOMContentLoaded', () => {
  // Nav
  const navMount = document.getElementById('nav-mount');
  if (navMount) navMount.innerHTML = NAV_HTML;

  // Footer
  const footerMount = document.getElementById('footer-mount');
  if (footerMount) footerMount.innerHTML = FOOTER_HTML;

  // Mark active nav link
  const links = document.querySelectorAll('.nav-links a');
  links.forEach(link => {
    if (link.getAttribute('href') === '/' + location.pathname.split('/').pop()) {
      link.classList.add('active');
    }
  });

  // Nav scroll
  const nav = document.getElementById('nav');
  if (nav) {
    if (document.querySelector('.page-hero')) {
      nav.classList.add('navy-hero');
    }
    window.addEventListener('scroll', () => {
      nav.classList.toggle('scrolled', window.scrollY > 60);
    });
  }

  // Scroll reveal
  const reveals = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.12 });
  reveals.forEach(el => revealObserver.observe(el));

  // Mobile menu
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.contains('open');
      mobileMenu.classList.toggle('open', !isOpen);
      hamburger.classList.toggle('open', !isOpen);
      document.body.style.overflow = isOpen ? '' : 'hidden';
    });
    mobileMenu.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
        hamburger.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }
});
