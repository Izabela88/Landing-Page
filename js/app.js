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


const navList = document.querySelector("#navbar__list");
const sections = document.querySelectorAll("section");
const navbarLinks = [];
const navbar = document.querySelector(".navbar__menu");

// Add event on scroll and call functions
document.addEventListener("scroll", function () {
  makeActive();
  hideNavbar();
});

// Create navbar 
for (let i = 0; i < sections.length; i++) {
  // Create elements and put in variables
  let sectionName = document.querySelectorAll("section")[i].getAttribute("data-nav");
  let textNode = document.createTextNode(sectionName);
  let liNav = document.createElement("li");
  let aNav = document.createElement("a");
  let attribute = document.createAttribute("href");
  let sectionId = document.querySelectorAll("section")[i].getAttribute("id");
  attribute.value = "#" + sectionId;
  aNav.setAttributeNode(attribute);
  // Append created elements inside this vars
  aNav.appendChild(textNode);
  liNav.appendChild(aNav);
  navList.appendChild(liNav);
  // Navbar links append to list
  navbarLinks.push(aNav);
  // Add class to navbar links
  aNav.className += "menu__link";
}

// Create elements-smooth scrolling
navbarLinks.forEach(elem => elem.addEventListener("click", smoothScroll));

// Smooth scrolling
function smoothScroll(e) {
  e.preventDefault();
  const targetId = e.currentTarget.getAttribute("href");
  let position = document.querySelector(targetId).offsetTop - 150;
  // console.log(sc)
  window.scrollTo({
    top: position,
    behavior: "smooth"
  });
}

//

function makeActive() {
  for (const [i, section] of sections.entries()) {
    const box = section.getBoundingClientRect();
    if (box.top <= 200 && box.bottom >= 200) {
      section.classList.add("your-active-class");
      navbarLinks[i].classList.add("active");
    } else {
      section.classList.remove("your-active-class");
      navbarLinks[i].classList.remove("active");
    }
  }
}

// Check page coords if != show navbar else hide after 4s
var prevScrollpos = window.pageYOffset;

function hideNavbar() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos != currentScrollPos) {
    navbar.style.top = "0";
  } else {
    setInterval(navTimeOut, 4000);
  }
}

// Hide navbar
function navTimeOut() {
  navbarHeight = navbar.offsetHeight;
  navbar.style.top = `-${navbarHeight}px`;
}






// build the nav

// Add class 'active' to section when near top of viewport

// Scroll to anchor ID using scrollTO event

// Build menu

// Scroll to section on link click

// Set sections as active
