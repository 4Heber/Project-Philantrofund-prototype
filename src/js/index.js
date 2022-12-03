
const menuBttn = document.getElementById('burger-menu');
const asideNav = document.getElementById('aside-nav');
const h1Hero = document.getElementsByClassName('title-container');
const svgHero = document.getElementsByClassName('illustration-box');
const searchBar = document.getElementsByClassName('search-container');

// Menu button on click animations
menuBttn.addEventListener('click', () => {

    // Change menu form cross-burger
    menuBttn.classList.toggle('changeMenuForm');
    
    // Hidden title & illustration
    h1Hero[0].classList.toggle('hidden');
    svgHero[0].classList.toggle('hidden');

    // Slide in-out aside nav
    asideNav.classList.toggle('slide-out');

    // Change search-bar form
    searchBar[0].classList.toggle('search-menu-active');

})


// Main title with Typed.js animation
var typed = new Typed('.typed',{

    stringsElement: '#typed-strings',
    typeSpeed: 75,
    startDelay: 300,
    backSpeed: 75,
    smartBackspace: true,
    shuffle: false,
    backDelay: 1500,
    loop: true,
    loopCount: false,
    showCursor: true,
    cursorChar: '|',
    contetType: 'html'
});


// Go top button function
let goTopBttn = document.getElementById('goTopBttn');

window.onscroll = ()=>{
    scrollFunction()
};

function scrollFunction(){
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        goTopBttn.style.display = 'block';

    }else{
        goTopBttn.style.display = 'none';
    }
};

function goTopFunction(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}