"use strict"
let navbar = document.getElementById('navbar');
let body = document.body;
console.log(navbar);


document.addEventListener('scroll' , function(){

    if(window.scrollY > 0){
        navbar.classList.add('scrolled');
        // document.getElementById('HomeIcon').getAttribute('src') = `url(images/bakery-color)`;
        document.getElementById('HomeIcon').setAttribute('src' ,'images/bakery-color.png' );
    }else{
        navbar.classList.remove('scrolled');
        document.getElementById('HomeIcon').setAttribute('src' ,'images/bakery-light-1.png' );

    }
})