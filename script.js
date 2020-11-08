conts menuToggle = document.querySelector('menu-toggle .input');
conts nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', function () {
    nav.classList.toggle('slide');
});
