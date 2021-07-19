const landingViewArrow = document.querySelector('.landingView__arrow');
const trailersSection = document.querySelector('.trailersSection')

landingViewArrow.addEventListener('click', () => {
    trailersSection.scrollIntoView();
})

var landingTl = anime.timeline({
    easing: 'easeOutExpo',
});

landingTl
.add({
    targets: '.landingView__bg__text',
    opacity: [0, 1],
    duration: 700,
    delay: 300
})
.add({
    targets: '.landingView__text--main',
    translateY: [ -10 , 0],
    opacity: [0, 1],
    duration: 1000,
}, '-= 100')
.add({
    targets: '.landingView__text--main > h2 > svg',
    width: ['100', '100%'],
    duration: 500,
    easing: 'linear'
}, '-=700')
.add({
    targets: '.landingView__text--lastP',
    translateY: [500,0],
    opacity: 1,
    duration: 1000,
}, '-=1200')
.add({
    targets: '.landingView__arrow',
    translateY: [-200,0],
    opacity: 1,
    duration: 1000,
    easing: 'easeOutElastic(1, .6)'
}, '-=100')
