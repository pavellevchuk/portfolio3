let backward = document.querySelector('.recipes-buttons-backward'),
forward = document.querySelector('.recipes-buttons-forward'),
strip = document.querySelector('.recipes-slider-strip'),
left = 0;

backward.addEventListener('click',moveSlide);
forward.addEventListener('click',moveSlide);

function moveSlide(e){
  left = e.currentTarget == forward ? left - 330 : left + 330;
  strip.style.left = `${left}px`;
}

window.addEventListener('resize',e => console.log(window.innerWidth));
