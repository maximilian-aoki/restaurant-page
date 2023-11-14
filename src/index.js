// import css
import './static/reset.css';
import './static/style.css';

// import modules
import { getHome } from './assets/home.js';
import { getMenu } from './assets/menu.js';
import { getContact } from './assets/contact.js';

// app code
const container = document.querySelector('#content');

(function() {
  const homeButton = document.createElement('button');
  homeButton.innerText = 'Home';
  const menuButton = document.createElement('button');
  menuButton.innerText = 'Menu';
  const contactButton = document.createElement('button');
  contactButton.innerText = 'Contact';
  const content = document.createElement('div');
  content.classList.add('inner-content');

  container.appendChild(homeButton);
  container.appendChild(menuButton);
  container.appendChild(contactButton);
  container.appendChild(content);

  homeButton.addEventListener('click', renderHome);
  menuButton.addEventListener('click', renderMenu);
  contactButton.addEventListener('click', renderContact);

  renderHome();
})();

function renderHome() {
  const innerContent = document.querySelector('.inner-content');
  clearContent(innerContent);
  innerContent.appendChild(getHome());
  innerContent.classList.add('home');
  innerContent.classList.remove('menu');
  innerContent.classList.remove('contact');
}

function renderMenu() {
  const innerContent = document.querySelector('.inner-content');
  clearContent(innerContent);
  innerContent.appendChild(getMenu());
  innerContent.classList.add('menu');
  innerContent.classList.remove('home');
  innerContent.classList.remove('contact');
}

function renderContact() {
  const innerContent = document.querySelector('.inner-content');
  clearContent(innerContent);
  innerContent.appendChild(getContact());
  innerContent.classList.add('contact');
  innerContent.classList.remove('menu');
  innerContent.classList.remove('home');
}

function clearContent(element) {
  let childArr = Array.from(element.children);
  for (let child of childArr) {
    element.removeChild(child);
  }
}