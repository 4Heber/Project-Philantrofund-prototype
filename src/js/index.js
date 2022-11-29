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
    if(asideNav.classList.contains('hidden')){
        iconBttn.classList.replace('fa-bars', 'fa-times');
    }
    else{
        iconBttn.classList.replace('fa-times', 'fa-bars');
    }
    
    // fadeOut();
    
    // Hidden title & illustration
    h1Hero[0].classList.toggle('hidden');
    svgHero[0].classList.toggle('hidden');
    
    asideNav.style.setProperty('margin-left','0');
    asideNav.style.setProperty('margin-left','100%');

    var rs = getComputedStyle(asideNav);

    if(rs.getPropertyValue('margin-left') == '100%'){
        
    }
    // asideNav.classList.toggle('hidden');
    console.log(getComputedStyle(asideNav,'margin-left'));
    


})