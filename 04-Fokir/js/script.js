"use strict";

// variables
const navLink = document.querySelectorAll('.nav-link');
const hiddenElements = document.querySelectorAll('.hidden');
const navbar = document.querySelector('.navbar');
const lines = document.querySelectorAll('.line');


// Typed JS 
var typed = new Typed('#typed', {
  strings: ["Web Developer", "UI/UX Designer", "Freelancer"],
  typeSpeed: 50,
  backSpeed: 30,
  backDelay: 1500,
  startDelay: 500,
  loop: true
});

// Navbar Hide Animation

let lastScroll = 0;

window.addEventListener('scroll', function(){
  let currentScroll = this.window.pageYOffset;
  
  if(currentScroll > lastScroll) 
    navbar.classList.add('hide');
  else
    navbar.classList.remove('hide');

  lastScroll = currentScroll <= 0 ? 0 : currentScroll;
});

// Navbar Active
navLink.forEach(link => {
  link.addEventListener('click', function () {
    navLink.forEach(l => l.classList.remove('active'));
    this.classList.add('active');
  });
});

// animation


const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      
    } else {
      entry.target.classList.remove('show');
    }
  });
})
hiddenElements.forEach((el) => observer.observe(el));


// Header Animation

const headerLines = document.querySelectorAll('.line');

const lineObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-lines');
    } else {
      entry.target.classList.remove('animate-lines');
    }
  });
});

headerLines.forEach(line => lineObserver.observe(line));