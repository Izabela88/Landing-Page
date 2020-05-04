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
const backToTopButton = document.querySelector("#back-to-top-btn");

// Add event scroll and call functions
window.addEventListener("scroll", function () {
  makeActive();
  scrollFunction();
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
  window.scrollTo({
    top: position,
    behavior: "smooth"
  });
}

// When clicking an item from the navigation menu, the link scroll to the appropriate section
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

// Hide navigation bar while not scrolling
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    navbar.style.top = "0";
  } else {
    navbar.style.top = "-200px";
  }
  prevScrollpos = currentScrollPos;
}

// Scroll to top button
function scrollFunction() {
  if (window.pageYOffset > 400) {
    // Show backToTopButton
    if (!backToTopButton.classList.contains("btnEntrance")) {
      backToTopButton.classList.add("btnEntrance");
      backToTopButton.style.display = "block";
    }
  } else {
    // Hide backToTopButton
    if (backToTopButton.classList.contains("btnEntrance")) {
      backToTopButton.classList.remove("btnEntrance");
      setTimeout(function () {
        backToTopButton.style.display = "none";
      }, 300);
    }
  }
}

backToTopButton.addEventListener("click", backToTop);

function backToTop() {
  window.scroll(0, 0);
}

