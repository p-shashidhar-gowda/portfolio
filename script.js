// Subtle blue glow on hover for navigation links in light mode
document.querySelectorAll('nav ul li a').forEach(link => {
  link.addEventListener('mouseover', () => {
    link.style.boxShadow = "0 2px 9px #60a5fadc";
  });
  link.addEventListener('mouseout', () => {
    link.style.boxShadow = "none";
  });
});
