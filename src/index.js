// import css
import './static/reset.css';
import './static/style.css';

// import modules
import { getHome } from './assets/home.js';
import { getMenu } from './assets/menu.js';
import { getContact } from './assets/contact.js';

// initialize HTML structure and event listeners
const Base = (function() {
  const container = document.querySelector('.content');
  container.innerHTML = 
    `
    <div class="header">
      <h1>THE A.I.CE CREAMERY</h1>
    </div>
    <div class="nav">
      <button type="button" class="home">--home</button>
      <button type="button" class="menu">--menu</button>
      <button type="button" class="contact">--contact</button>
    </div>
    <div class="inner-content"></div>
    <div class="footer">
      <p>2023 Copyright: maximilian_aoki</p>
    </div>
    `
  ;
  const innerContent = document.querySelector('.inner-content');

  const homeButton = document.querySelector('.home');
  const menuButton = document.querySelector('.menu');
  const contactButton = document.querySelector('.contact');

  const allButtons = [homeButton, menuButton, contactButton];
  for (let button of allButtons) {
    button.addEventListener('click', render);
  }

  return { innerContent, homeButton, allButtons };
})();

// // render contents
function render(e) {
  buttonDisabled(e.target);
  clearContent();

  const target = e.target.textContent;
  if (target === '--home') {
    Base.innerContent.appendChild(getHome());
  } else if (target === '--menu') {
    Base.innerContent.appendChild(getMenu());
  } else if (target === '--contact') {
    Base.innerContent.appendChild(getContact());
  }
}

// // delete inner content in preparation for refresh
function clearContent() {
  let childArr = Array.from(Base.innerContent.children);
  for (let child of childArr) {
    Base.innerContent.removeChild(child);
  }
}

// // toggle which nav button is disabled
function buttonDisabled(targetButton) {
  for (let button of Base.allButtons) {
    button.removeAttribute('disabled');
  }
  targetButton.setAttribute('disabled', true);
}

// // init 'home'
Base.homeButton.click();
