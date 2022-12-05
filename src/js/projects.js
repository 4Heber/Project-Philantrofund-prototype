
const menuBttn = document.getElementById('burger-menu');
const asideNav = document.getElementById('aside-nav');
const searchBar = document.getElementsByClassName('search-container');

const breadcrumb = document.getElementsByClassName('breadcrumb-container');
const cTags = document.getElementsByClassName('categories-tags');
const svg = document.getElementsByClassName('illustration-container');


function displayAsideMenu(){

    // Change menu form cross-burger
    menuBttn.classList.toggle('changeMenuForm');

    // Slide in-out aside nav
    asideNav.classList.toggle('slide-out');

    // Change search-bar form
    searchBar[0].classList.toggle('search-menu-active');

    // Hidde breadcrumb & categories tags
    breadcrumb[0].classList.toggle('hidden');
    cTags[0].classList.toggle('hidden');
    svg[0].classList.toggle('hidden');

}
// Menu button on click animations
menuBttn.addEventListener('click', displayAsideMenu); 

// Searchbar onclick display aside menu
searchBar[0].addEventListener('click', displayAsideMenu); 


// Go top button function
let goTopBttn = document.getElementById('goTopBttn')

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