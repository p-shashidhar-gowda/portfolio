// mobile nav
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');
hamburger?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  hamburger.setAttribute('aria-expanded', String(open));
});

// year
document.getElementById('year').textContent = new Date().getFullYear();

// smooth scroll (no jank)
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    nav.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
  });
});

// typewriter subtitle (polite to reduced-motion)
const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const typedEl = document.getElementById('typed');
const full = typedEl?.textContent?.trim() || '';
if (!prefersReduced && full) {
  typedEl.textContent = '';
  let i = 0;
  (function typeStep(){
    if (i < full.length){
      typedEl.textContent += full.charAt(i++);
      setTimeout(typeStep, 45);
    }
  })();
}

// scroll spy (highlight current section in nav)
const links = [...document.querySelectorAll('header .nav a')].filter(l=>l.hash);
const sections = links.map(l => document.querySelector(l.hash)).filter(Boolean);

const obs = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    const id = '#' + entry.target.id;
    const link = links.find(l => l.hash === id);
    if (link){
      link.classList.toggle('active', entry.isIntersecting);
    }
  });
}, { rootMargin: '-40% 0px -55% 0px', threshold: 0 });

sections.forEach(sec => obs.observe(sec));
