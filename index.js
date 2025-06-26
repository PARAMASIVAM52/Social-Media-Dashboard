const themeToggle = document.getElementById('theme-toggle');
const themeBoxes = document.querySelectorAll('.social-media, .views');
const Mode_data=document.querySelectorAll('.Mode');


themeToggle.addEventListener('change', () => {
  document.body.classList.toggle('dark-theme');
  const isDark = document.body.classList.contains('dark-theme');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
  themeBoxes.forEach(box => {
    box.style.backgroundColor = isDark ? 'hsl(229, 30.30%, 17.50%)' : '#f0f0f0';
    box.style.color = isDark ? '#ffffff' : '#000000';
  });
});

window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  const isDark = savedTheme === 'dark';

  if (isDark) {
    document.body.classList.add('dark-theme');
    themeToggle.checked = true;
    themeToggle.style.backgroundColor='hsl(230, 72.40%, 17.10%) ';
  }

  themeBoxes.forEach(box => {
    box.style.backgroundColor = isDark ? 'hsl(228, 30.20%, 16.90%)' : '#f0f0f0';
    box.style.color = isDark ? '#ffffff' : '#000000';
  });
});
