// document.querySelectorAll('.container__image').addEventListener('click', onImageClick) - For Single Elements
document.querySelectorAll('.container__image').forEach((element) => {
    element.addEventListener('click', onImageClick);
});


function onImageClick(){
    console.log('here');
    const fullscreen = document.querySelector('.container__fullscreen');
    fullscreen.style.left = 0;
}