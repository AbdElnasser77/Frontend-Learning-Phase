"use strict";

// variables
const navLink = document.querySelectorAll('.nav-link');
const hiddenElements = document.querySelectorAll('.hidden');
// Typed JS 
var typed = new Typed('#typed', {
  strings: ["Web Developer", "UI/UX Designer", "Freelancer"],
  typeSpeed: 50,
  backSpeed: 30,
  backDelay: 1500,
  startDelay: 500,
  loop: true
});

// Navbar Active
navLink.forEach(link => {
  link.addEventListener('click', function(){
    navLink.forEach(l => l.classList.remove('active'));
    this.classList.add('active');
  });
});

// animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add('show');
      }else{
        entry.target.classList.remove('show');
      }
  });
})
hiddenElements.forEach((el) => observer.observe(el));

