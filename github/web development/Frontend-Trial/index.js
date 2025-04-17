const burgerTrigger = document.querySelector(".header__nav__links i");
const burgerMenu = document.querySelector(".mobile__menu");
const scrollBack = document.querySelector(".scrollBack");

burgerTrigger.addEventListener('click',(e)=>{
    if(burgerMenu.classList.contains('menu__hidden')){
        burgerMenu.classList.remove('menu__hidden');
        burgerTrigger.classList.add('rotated');
    }else{
        burgerMenu.classList.add('menu__hidden');
        burgerTrigger.classList.remove('rotated');
    }
})

window.addEventListener("scroll", (e) => {
    let scroll = this.scrollY;
    if (scroll > 100){
        scrollBack.classList.remove('hidden');
    }else{
        scrollBack.classList.add('hidden');
    }
});

scrollBack.addEventListener('click',(e)=>{
    window.scroll(0,0);
})