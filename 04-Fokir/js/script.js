"use strict";

// variables
const navLink = document.querySelectorAll('.nav-link');
const hiddenElements = document.querySelectorAll('.hidden');
const navbar = document.querySelector('.navbar');
const lines = document.querySelectorAll('.line');
const services = document.querySelectorAll('.service');
const categories = document.querySelectorAll('.categories button');
const headerLines = document.querySelectorAll('.line');
const stats_content = document.querySelectorAll('.stats-content');
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


// Observer for hidden elements
const hiddenObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
});
hiddenElements.forEach((el) => hiddenObserver.observe(el));

// Header Lines Animation
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

// Services Animation
const serviceObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('Sshow');
    } else {
      entry.target.classList.remove('Sshow');
    }
  });
});

services.forEach(service => serviceObserver.observe(service));

// Categories Active Buttons

categories.forEach(buttons =>{
  buttons.addEventListener('click',function(){
    categories.forEach(l => {
      l.classList.remove('active');
    })
    buttons.classList.add('active');
    
  })
})

// Counter Animation



const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('showStats');
    } else {
      entry.target.classList.remove('showStats');
    }
  });
});

stats_content.forEach(stats => statsObserver.observe(stats));


document.querySelector('form').addEventListener('submit', function(e) {
  e.preventDefault();

});