const dh = document.getElementById('dh');
const hamb = document.getElementById('hamb');
const close = document.getElementById('close');
const portfolio = document.getElementById('portfolio');
const about = document.getElementById('about');
const contact = document.getElementById('contact');

close.addEventListener('click', () => {
  dh.classList.toggle('open');
});

hamb.addEventListener('click', () => {
  dh.classList.toggle('open');
});
portfolio.addEventListener('click', () => {
  dh.classList.toggle('open');
});
about.addEventListener('click', () => {
  dh.classList.toggle('open');
});
contact.addEventListener('click', () => {
  dh.classList.toggle('open');
});