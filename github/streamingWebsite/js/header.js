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
    updateSearchBar();

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

// Search Input

setInterval(() => {
    let value = document.querySelector('.header__searchBar').value.toLowerCase();
    let otherContainers = document.querySelectorAll('.video__container');
  
    otherContainers.forEach(e => {
      if (e.attributes != `data-type="${value}"` && value != ''){
        e.classList.add('hidden');
      }else{
        e.classList.remove('hidden');
      }
    })
  
    if (value != ''){
      let searchTarget = document.querySelectorAll(`[data-type=${value}]`);
    
      searchTarget.forEach((e) => {
        e.classList.toggle('hidden');
      })
    }
  }, 500);

  // MENUS

let notificationMenu = false;
let profileMenu = false;

const burguerMenu = document.querySelector('.main__menu');
const headerIcon = document.querySelector('.header__profile');
const asideProfile = document.querySelector('.aside__profile');
const asideNotification = document.querySelector('.aside__notification');
const headerNotification = document.querySelector('.header__notification');

burguerMenu.addEventListener('click', menuToggle);
headerIcon.addEventListener('click', profileToggle);
headerNotification.addEventListener('click', notificationToggle);

function menuToggle() {
  main.classList.toggle('main__solo');
  aside.classList.toggle('aside__hidden');
}

function profileToggle() {
  profileMenu = !profileMenu;
  asideProfile.classList.toggle('aside__profile__visible');
  checkMenuPosition();
}

function notificationToggle() {
  notificationMenu = !notificationMenu;
  asideNotification.classList.toggle('aside__notification__visible');
  checkMenuPosition();
}

// Menu Position Adjustment

setInterval(checkMenuPosition, 500);

function checkMenuPosition() {
  if (profileMenu) {
    asideNotification.style.top = '200px';
  } else {
    asideNotification.style.top = '0px';
  }
}

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
  menuToggle();
}