// PERSONAL DETAILS:
const SITE = {
  email: 'akakpobediako@gmail.com',
  linkedin: 'http://www.linkedin.com/in/akakpo-derrick-bediako-819aa9249',
  cv: 'YOUR_CV_URL'
};

document.querySelector('#year').textContent = new Date().getFullYear();

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('is-visible'); });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

document.querySelectorAll('.reveal-click').forEach(card => {
  const toggle = () => card.classList.toggle('active');
  card.addEventListener('click', toggle);
  card.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(); } });
});

document.querySelectorAll('a[href="#"]').forEach(a => a.addEventListener('click', e => e.preventDefault()));

const emailLink = document.querySelector('a[href^="mailto:"]');
if (emailLink && SITE.email && !SITE.email.startsWith('YOUR_')) {
  emailLink.href = `mailto:${SITE.email}`;
}
const linkedIn = document.querySelector('a[href="YOUR_LINKEDIN_URL"]');
if (linkedIn && SITE.linkedin && !SITE.linkedin.startsWith('YOUR_')) linkedIn.href = SITE.linkedin;

document.querySelector('#cvButton').addEventListener('click', () => {
  if (SITE.cv && !SITE.cv.startsWith('YOUR_')) window.open(SITE.cv, '_blank', 'noopener');

});
