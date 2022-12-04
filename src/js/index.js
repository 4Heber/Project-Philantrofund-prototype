
const menuBttn = document.getElementById('burger-menu');
const asideNav = document.getElementById('aside-nav');
const h1Hero = document.getElementsByClassName('title-container');
const svgHero = document.getElementsByClassName('illustration-box');
const searchBar = document.getElementsByClassName('search-container');


function displayAsideMenu(){

    // Change menu form cross-burger
    menuBttn.classList.toggle('changeMenuForm');
    
    // Hidden title & illustration
    h1Hero[0].classList.toggle('hidden');
    svgHero[0].classList.toggle('hidden');

    // Slide in-out aside nav
    asideNav.classList.toggle('slide-out');

    // Change search-bar form
    searchBar[0].classList.toggle('search-menu-active');

}
// Menu button on click animations
menuBttn.addEventListener('click', displayAsideMenu); 

// Searchbar onclick display aside menu
searchBar[0].addEventListener('click', displayAsideMenu); 


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


// Waves svg with parallax scroll effect
window.addEventListener('scroll', (e) => {

    const target = document.querySelectorAll('.wave');

    for(let i=0; i < target.length; i++){

        if(window.scrollY < 258){
            var position = window.scrollY * target[i].dataset.rate;

            target[i].style.transform = 'translate3d(0px, '+ position +'px, 0px) scale(2,2.5)';
        }
    }
})


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


// Cards progress bar status
const projectFundStatus = document.querySelectorAll('.funded');
const cardProgressBar = document.querySelectorAll('.progress-bar');

for(let i=0; i < projectFundStatus.length; i++){
    
    var fundProgress = (projectFundStatus[i].innerText).substring(0,2);
    
    cardProgressBar[i].style.width = fundProgress+'%';
}
