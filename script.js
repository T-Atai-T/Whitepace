const burgerBtn = document.getElementById('burger-btn');
const navMenu = document.getElementById('nav-menu');
const loginBtn = document.querySelector('.login-btn');
const tryBtn = document.querySelector('.try-btn');

loginBtn.classList.add('hidden');
tryBtn.classList.add('hidden');

burgerBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    loginBtn.classList.toggle('hidden');
    tryBtn.classList.toggle('hidden');
});
