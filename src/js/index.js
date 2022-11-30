const menuBttn = document.getElementsByClassName('burger-menu');
const iconBttn = menuBttn[0].children.item(0);
const asideNav = document.getElementById('aside-nav');
const h1Hero = document.getElementsByClassName('title-container');
const svgHero = document.getElementsByClassName('illustration-box');

// Fade out title h1 && illustration
// function fadeOut(){

//     var intervalID = setInterval(() => {
        
//         console.log(!h1Hero[0].style.opacity, !svgHero[0].style.opacity)

//         if((h1Hero[0].style.opacity = 0) && (svgHero[0].style.opacity = 0)){
//             clearInterval(intervalID);
//         }

//         if((h1Hero[0].style.opacity && svgHero[0].style.opacity) > 0){
//             h1Hero[0].style.opacity -= 0.1;
//             svgHero[0].style.opacity -= 0.1;
//         }

//     }, 30);
// }

menuBttn[0].addEventListener('click', () => {

    // Change menu icon
    if(asideNav.classList.contains('slide-out')){
        iconBttn.classList.replace('fa-bars', 'fa-times');
        asideNav.classList.replace('slide-out','slide-in');

    }
    else{
        iconBttn.classList.replace('fa-times', 'fa-bars');
        asideNav.classList.replace('slide-in', 'slide-out');
    }
    
    // fadeOut();
    
    // Hidden title & illustration
    h1Hero[0].classList.toggle('hidden');
    svgHero[0].classList.toggle('hidden');
})