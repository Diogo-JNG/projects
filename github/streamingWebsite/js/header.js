// Query Selectors || Media Queries

const searchIcon = document.querySelector('.normal__search');
const searchBar = document.querySelector('.header__searchBar');
const mainTitle = document.querySelector('.main__title');
const mainIcon = document.querySelector('.main__icon');
const mainMenu = document.querySelector('.main__menu');
const headerBack = document.querySelector('.header__back');
const mobileSearchIcon = document.querySelector('.mini__search');

var max700 = window.matchMedia("(max-width: 700px)");

// Add Event Listeners
headerBack.addEventListener('click', toggleSearchBar);
mobileSearchIcon.addEventListener('click', toggleSearchBar);

// Variables || Contants

let isToggled = false;

// Functions

 setInterval(updateSearchBar, 500);

function toggleSearchBar(){

    isToggled = !isToggled;

}

function updateSearchBar(){

    if((max700.matches && isToggled)){
        searchBar.style.display = 'flex';
        mainTitle.style.display = 'none';
        mainIcon.style.display = 'none';
        mainMenu.style.display = 'none';
        headerBack.style.display = 'flex';
        mobileSearchIcon.style.display = 'none';
    }else if((!max700.matches && isToggled) || (!max700.matches && !isToggled)){
        searchBar.style.display = 'flex';
        mainTitle.style.display = 'flex';
        mainIcon.style.display = 'flex';
        mainMenu.style.display = 'flex';
        headerBack.style.display = 'none';
        mobileSearchIcon.style.display = 'none';
    }else if(max700.matches && !isToggled){
        searchBar.style.display = 'none';
        mainTitle.style.display = 'flex';
        mainIcon.style.display = 'flex';
        mainMenu.style.display = 'flex';
        headerBack.style.display = 'none';
        mobileSearchIcon.style.display = 'flex';
    }

}