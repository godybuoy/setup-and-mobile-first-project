const nav = document.getElementById('nav');
const dh = document.getElementById('dh');
const close = document.getElementById('close');

close.addEventListener('click', () => {
  dh.classList.toggle('open');
});

hamburger.addEventListener('click', () => {
  dh.classList.toggle('open');
});