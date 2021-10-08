// const btn = document.querySelector('.boton') 
// btn.onclick = function() {
//     btn.classList.add("playing")
// }



function playSound(e){
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
    
    if(!audio) return
    audio.currentTime = 0;
    audio.play();
    
    key.classList.add("playing")
}

function removeTransicion(e){
    if(e.propertyName !== 'transform') return;
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key')
keys.forEach(key => key.addEventListener('transitionend',removeTransicion))

window.addEventListener('keydown', playSound);