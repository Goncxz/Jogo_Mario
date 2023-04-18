const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {

        mario.classList.remove('jump')
    }, 500);
}

const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft; 
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '')
    console.log(pipePosition)

    if (pipePosition <= 80 && pipePosition > 0 && marioPosition < 65) {

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`

        let p = document.getElementById("texto");
        p.innerHTML = "Pressione F5 para continuar.";

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`

        mario.src = 'img/marioMorto.jpg';
        clearInterval(loop);
    }
}, 10);


document.addEventListener('keydown', jump)