const keys = Array.from(document.querySelectorAll('.key'));
const sounds = document.querySelectorAll('audio');
function hit(e) {
    const noise = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if(!noise){
        return;
    }
    noise.currentTime = 0;
    noise.play();
}
window.addEventListener('keydown', hit);