
const menuBttn = document.getElementById('burger-menu');
const asideNav = document.getElementById('aside-nav');
const searchBar = document.getElementsByClassName('search-container');

const header = document.getElementsByTagName('header');
const breadcrumb = document.getElementsByClassName('breadcrumb-container');
const content = document.getElementsByClassName('content');

function displayAsideMenu(){

    // Change menu form cross-burger
    menuBttn.classList.toggle('changeMenuForm');

    // Slide in-out aside nav
    asideNav.classList.toggle('slide-out');

    // Change search-bar form
    searchBar[0].classList.toggle('search-menu-active');

    // Hidde breadcrumb & categories tags
    breadcrumb[0].classList.toggle('hidden');
    content[0].classList.toggle('hidden');
    header[0].classList.toggle('expand');

}
// Menu button on click animations
menuBttn.addEventListener('click', displayAsideMenu); 

// Searchbar onclick display aside menu
searchBar[0].addEventListener('click', displayAsideMenu); 

