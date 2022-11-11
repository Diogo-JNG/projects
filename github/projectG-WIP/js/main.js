const char = document.querySelector('.char');
const charSprite = document.querySelector('.char').firstChild;
const container = document.querySelector('.container');
//let x = Math.floor(Math.random() * 100) + 1; 
let x = 10;
charPos = x + "px";
loop();

document.addEventListener( 'keydown', moveChar);

function moveChar(e){
    char.style.left = x + "px";
    if(e.key == 'a'){
        x = x - 10;
        charSprite.src = 'assets/char_left.png';
    } else if (e.key == 'd'){
        x = x + 10;
        charSprite.src = 'assets/char_right.png';
    } else if (e.key == 's'){
        charSprite.src = 'assets/char_idle.png';
    }
    
}

function loop(){
    setTimeout(function() {
            const bolt = document.createElement('img');
            bolt.alt = "Bolt";
            bolt.src = "assets/Goldbolt-1-0.png";
            bolt.classList.add('bolt');
            bolt.style.left = Math.floor(Math.random() * 1850) + 1 +"px";
            container.append(bolt);
    loop();
}, 1000);
}

function gravity(){
    setTimeout(function() {
            const bolt = document.createElement('img');
            bolt.alt = "Bolt";
            bolt.src = "assets/Goldbolt-1-0.png";
            bolt.classList.add('bolt');
            bolt.style.left = Math.floor(Math.random() * 1850) + 1 +"px";
            container.append(bolt);
    gravity();
}, 1000);
}