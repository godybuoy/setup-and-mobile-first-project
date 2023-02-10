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


const storeData = [

{
  name: 'Tonic',
  description: 'A daily selection of privately personalized reads; no accounts or sign- ups required',
  imagesrc: './image/Snapshoot Portfolio (1).svg" alt="content image',
  technologies: ['html', 'css', 'javaScript'],
  link: 'link_to_live_version.com',
},
{
  name: 'Multi-post',
  description: 'A daily selection of privately personalized reads; no accounts or sign- ups required',
  imagesrc: './image/Snapshoot Portfolio (2).svg',
  technologies: ['html', 'css', 'javaScript'],
  link: 'link_to_live_version.com',
},
{
  name: 'Multi-post',
  description: 'A daily selection of privately personalized reads; no accounts or sign- ups required',
  imagesrc: './image/Snapshoot Portfolio (3).svg" alt="content image',
  technologies: ['html', 'css', 'javaScript'],
  link: 'link_to_live_version.com',
},
{
  name: 'Tonic',
  description: 'A daily selection of privately personalized reads; no accounts or sign- ups required',
  imagesrc: './image/Snapshoot Portfolio (4).svg',
  technologies: ['html', 'css', 'javaScript'],
  link: 'link_to_live_version.com',
},
]
const description = document.querySelectorAll('.work-paragraph');
for (let i = 0; i < description.length; i += 2) {
  description[i].innerHTML = storeData[i].description;
  description[i + 1].innerHTML = storeData[i + 1].description;
}

const projectLanguagesHtmlText = document.querySelectorAll('.languages-html');
for (let i = 0; i < projectLanguagesHtmlText.length; i++) {
  projectLanguagesHtmlText[i].innerHTML = storeData[0].technologies[0];
}

const projectLanguagesText = document.querySelectorAll('.languages-');
for (let i = 0; i < projectLanguagesText.length; i += 2) {
  projectLanguagesText[i].innerHTML = storeData[0].technologies[1];
  projectLanguagesText[i + 1].innerHTML = storeData[0].technologies[2];
}

// ..............popups...................

const popups = document.querySelector('.popups');
const popupsProjectImage = document.querySelector('.popups-project-img');
const popupProjectTitle = document.querySelector('.popup-project-title');

function popupsDisappearButton() {
  popups.style.display = 'none';
}

const popupsBootstrapLanguageDiv = document.querySelector('.bootstrap-language');
const popupsRubyLanguageDiv = document.querySelector('.ruby-language');
const popupsProjectDesktop = document.querySelector('.popups-project-p-desktop');
const popupsProjectMobile = document.querySelector('.popups-project-p-mobile');
const seeliveaTag = document.querySelector('.see-live-aTag');

function projectViewButton1() {
  popups.style.display = 'flex';
  popupsProjectImage.src = storeData[0].imagesrc;
  popupProjectTitle.innerHTML = storeData[0].name;
  popupsProjectDesktop.innerHTML = storeData[0].aboutProjectDesktop;
  popupsProjectMobile.innerHTML = storeData[0].aboutProjectMobile;
  seeliveaTag.href = storeData[0].href;
  popupsBootstrapLanguageDiv.classList.remove('bootstrap-language-disappear');
  popupsRubyLanguageDiv.classList.remove('ruby-language-disappear');
}

function projectViewButton2() {
  popups.style.display = 'flex';
  popupsProjectImage.src = storeData[1].imagesrc;
  popupProjectTitle.innerHTML = storeData[1].name;
  popupsBootstrapLanguageDiv.classList.add('bootstrap-language-disappear');
  popupsRubyLanguageDiv.classList.add('ruby-language-disappear');
}

function projectViewButton3() {
  popups.style.display = 'flex';
  popupsProjectImage.src = storeData[2].imagesrc;
  popupProjectTitle.innerHTML = storeData[2].name;
  popupsBootstrapLanguageDiv.classList.remove('bootstrap-language-disappear');
  popupsRubyLanguageDiv.classList.remove('ruby-language-disappear');
}

function projectViewButton4() {
  popups.style.display = 'flex';
  popupsProjectImage.src = storeData[3].imagesrc;
  popupProjectTitle.innerHTML = storeData[3].name;
  popupsBootstrapLanguageDiv.classList.add('bootstrap-language-disappear');
  popupsRubyLanguageDiv.classList.add('ruby-language-disappear');
}

