/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
const navBarList = document.querySelector('#navbar__list');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
function elementInViewport(el) {
  const bcr = el.getBoundingClientRect();
  return bcr.top < 150 && bcr.bottom > 150;
}


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
const menus = buildMenus();
navBarList.appendChild(menus);


// Add class 'active' to section when near top of viewport
document.addEventListener('scroll', setSectionsAsActive)


// Scroll to anchor ID using scrollTO event
navBarList.addEventListener('click', linkClickHandler)


/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu 
function buildMenus() {
  df = document.createDocumentFragment();
  for (let index = 1; index <= 4; index++) {
    const newLi = document.createElement('li');
    const newDiv = document.createElement('div');
    newDiv.innerHTML = `Section ${index}`;
    newDiv.classList.add('menu__link');
    newLi.appendChild(newDiv);
    df.appendChild(newLi);
  }
  return df;
}

// Scroll to section on link click and set menu link as active
function linkClickHandler(e) {
  const section = document.querySelector(`section[data-nav='${e.target.textContent}']`)
  section.scrollIntoView({ behavior: "smooth" });

  const menuList = document.getElementsByClassName('menu__link');

  for (const menu of menuList) {
    if (menu.textContent == e.target.textContent) {
      menu.classList.add('active');
    } else {
      menu.classList.remove('active');
    }
  }
}

// Set sections as active
function setSectionsAsActive(e) {
  const sections = document.querySelectorAll('section');
  const menuList = document.getElementsByClassName('menu__link');
  for (const section of sections) {
    if (elementInViewport(section)) {
      section.classList.add('active');
      for (const menu of menuList) {
        if (menu.textContent == section.dataset.nav) {
          menu.classList.add('active');
        } else {
          menu.classList.remove('active');
        }
      }
    } else {
      section.classList.remove('active');
      for (const menu of menuList) {
        if (menu.textContent == section.dataset.nav) {
          menu.classList.remove('active');
        }
      }
    }
  }
}

