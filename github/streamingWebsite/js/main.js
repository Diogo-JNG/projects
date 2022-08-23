const burguerMenu = document.querySelector('.main__menu');
const aside = document.getElementById('aside');
const main = document.getElementById('main');
console.log(burguerMenu);

burguerMenu.addEventListener('click', menuToggle);

function menuToggle(){
    main.classList.toggle('main__solo');
    aside.classList.toggle('aside__hidden');
}