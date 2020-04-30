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
 * Define Global Variables
 *
 */

const navList = document.querySelector("#navbar__list");
const sections = document.querySelectorAll("section");

for (let i = 0; i < sections.length; i++) {
  // Create elements and put in variables
  let sectionName = document.querySelectorAll("section")[i].getAttribute("data-nav");
  let textNode = document.createTextNode(sectionName);
  let liNav = document.createElement("li");
  let aNav = document.createElement("a");
  let attribute = document.createAttribute("href");
  let sectionId = document.querySelectorAll('section')[i].getAttribute("id");
  attribute.value = "#" + sectionId;
  aNav.setAttributeNode(attribute);
  console.log(aNav);
  // Append created elements inside this vars
  aNav.appendChild(textNode);
  liNav.appendChild(aNav);
  navList.appendChild(liNav);
}

// console.log(navList);
// console.log(sections);

// create elements-smooth scrolling
const navbarLinks = document.querySelectorAll("a");
navbarLinks.forEach(elem => elem.addEventListener("click", smoothScroll));

// Smooth scrolling
function smoothScroll(e) {
  e.preventDefault();
  const targetId = e.currentTarget.getAttribute("href");
  window.scrollTo({
    top: document.querySelector(targetId).offsetTop,
    behavior: "smooth"
  });
}





/**
 * End Global Variables
 * Start Helper Functions
 *
 */

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav

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
