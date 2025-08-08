// Neon hover effect for navigation links
document.querySelectorAll('nav ul li a').forEach(link => {
  link.addEventListener('mouseover', () => {
    link.style.textShadow = "0 0 8px #FF0099, 0 0 16px #00FF85";
  });
  link.addEventListener('mouseout', () => {
    link.style.textShadow = "none";
  });
});
