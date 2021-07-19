const closeButton = document.querySelector('.closeButton');
const menuButton = document.querySelector('#menuButton');
const menuActive = document.querySelector('.menuActive');

const tl = anime.timeline({
    duration: 750,
    autoplay: false
  });

tl
.add({
    targets: '.menuActive',
    opacity: [0, 1],
    duration: 750,
    easing: 'easeOutExpo'
}, 0)
.add({
    targets: '.menuActive__slider',
    translateX: ['-100%', 0],
    duration: 750,
    easing: 'easeInOutExpo'
}, 0)

tl.reverse()

menuButton.addEventListener('click', () => {
    menuActive.style.display = 'flex';
    tl.reverse()
    tl.play()
});

const handleClick = () => {
    tl.reverse()
    tl.play()
    setTimeout(() => {
        menuActive.style.display = 'none';
    },750)
}
closeButton.addEventListener("click", handleClick)
closeMenuBlocks(closeButton)