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


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
const navClickHandler = e => {
  e.preventDefault();
  console.log('e', e.target.textContent);
  const section = document.querySelector(`section[data-nav='${e.target.textContent}']`)
  const bcr = section.getBoundingClientRect();
  console.log('bcr', bcr);
  window.scrollTo({
    top: bcr.y,
    left: bcr.x,
    behavior: "smooth",
  });
}


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
const navBarList = document.querySelector('#navbar__list');
const df = document.createDocumentFragment();
for (let index = 1; index <= 4; index++) {
  const newLi = document.createElement('li');
  const newDiv = document.createElement('div');
  newDiv.innerHTML = `Section ${index}`;
  newDiv.className = "menu__link";
  newLi.appendChild(newDiv);
  df.appendChild(newLi);
}
navBarList.addEventListener('click', navClickHandler)
navBarList.appendChild(df);


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


