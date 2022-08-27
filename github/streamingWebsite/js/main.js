const burguerMenu = document.querySelector('.main__menu');
const aside = document.getElementById('aside');
const main = document.getElementById('main');
let videoThumb = document.querySelectorAll('.video__pre');

// videoThumb.addEventListener('mouseover', () => {
//    videoThumb.play();
//});
videoThumb.forEach((e) => {
    e.addEventListener('mouseenter', () => {
        e.play();
    } );
  });

  videoThumb.forEach((e) => {
    e.addEventListener('mouseout', () => {
        e.currentTime = 0;
        e.pause();
    } );
  });

burguerMenu.addEventListener('click', menuToggle);

function menuToggle(){
    main.classList.toggle('main__solo');
    aside.classList.toggle('aside__hidden');
}
