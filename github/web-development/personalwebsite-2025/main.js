// Header And Main containers
const headerContainer = document.querySelector('.header-container');
const mainContainer = document.querySelector('.container');


// Header Menu Boolean
let menu = true;

// Find the menu element
const menuElement = headerContainer.querySelector('.header-menu');
const navElement = headerContainer.querySelector('.header-nav');

// Burger Menu Click
const burgerMenu = headerContainer.querySelector('.js-menu');
console.log(burgerMenu);

burgerMenu.addEventListener('click',(e)=>{
    headerContainer.style.opacity = "1";
    menuToggler();

})

// Menu items Click
let menuItem = document.querySelectorAll('.menu-item');

menuItem.forEach((e) => {
  e.addEventListener('click', () => {
    menuToggler();
  });
});

        // MOBILE CHECK ---------------------------------

        if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){

          // true for mobile device
          burgerMenu.style.display = "flex";
        }else{

          // false for not mobile device
          burgerMenu.style.display = "none";
        }

// Main function
function menuToggler(){



        //If true
        if (menu){
          document.getElementsByTagName('body')[0].style.overflow = 'hidden'; // lock scroll bar
            menuElement.classList.remove("close");
            menuElement.classList.add("open");
            burgerMenu.classList.add("clicked");
        }
        //If false
        else{
            document.getElementsByTagName('body')[0].style.overflow = 'visible' // unlock scroll bar
            burgerMenu.classList.remove("clicked");
            menuElement.classList.remove("open");
            menuElement.classList.add("close");
            menuElement.style.animationDuration = "1s";
        }

        // Menu toggle
         menu = !menu;
}

// Scroll events

window.addEventListener('scroll', function(event) {
  if ( this.scrollY >= 100) {
    headerContainer.style.opacity = "0.8";
  }
  else if ( this.scrollY < 100){
    headerContainer.style.opacity = "1";
  }
 });
