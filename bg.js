const body = document.querySelector('body');

const IMG_NUMBER = 6;

function paintImage(imgNumber){
    
    console.log(imgNumber);
    const img = new Image();
    img.src = `images/i${imgNumber+1}.jpg`;
    img.classList.add("bgImage");
    body.appendChild(img);
}

function genRandom(){
    const number = Math.floor(Math.random()*6);
    return number;
}

function init(){
    
    const randomNumber = genRandom();
    paintImage(randomNumber);
}

init();