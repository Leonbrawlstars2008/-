// ===== 1. Гамбургер меню =====
const hamburger = document.querySelector('.hamburger');
const nav = document.getElementById('site-navigation');
hamburger.addEventListener('click', () => {
  nav.classList.toggle('open');
});

// ===== 2. Переключение темы =====
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  themeToggle.textContent = document.body.classList.contains('dark') ? '🌞' : '🌙';
});

// ===== 3. Алерт =====
document.getElementById('alert-btn').addEventListener('click', () => {
  alert('Привет! Рад видеть тебя на моём сайте 😎');
});

// ===== 4. Изменение текста =====
document.getElementById('change-text-btn').addEventListener('click', () => {
  document.getElementById('demo-text').textContent =
    'Я развиваюсь в веб-разработке и скоро стану профи! 🚀';
});

// ===== 5. Скрыть/показать текст =====
document.getElementById('hide-btn').addEventListener('click', () => {
  document.getElementById('demo-text').style.display = 'none';
});
document.getElementById('show-btn').addEventListener('click', () => {
  document.getElementById('demo-text').style.display = 'block';
});

// ===== 6. Счётчик =====
let count = 0;
document.getElementById('count-btn').addEventListener('click', () => {
  count++;
  alert(`Ты нажал ${count} раз!`);
});

// ===== 7. Кнопка "наверх" =====
const scrollTopBtn = document.getElementById('scroll-top-btn');
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollTopBtn.style.display = 'block';
  } else {
    scrollTopBtn.style.display = 'none';
  }
});

scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ===== 8. Случайный фон =====
document.getElementById('random-bg-btn').addEventListener('click', () => {
  const randomColor = `hsl(${Math.floor(Math.random() * 360)}, 70%, 80%)`;
  document.body.style.backgroundColor = randomColor;
});

  