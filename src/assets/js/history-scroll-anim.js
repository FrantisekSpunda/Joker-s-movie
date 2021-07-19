const main = document.querySelector('main');

const theKillingJoker = document.querySelector('.the-killing-joker');
const batman1989 = document.querySelector('.batman-1989');
const theDarkKnight = document.querySelector('.the-dark-knight');
const suicideSquad = document.querySelector('.suicide-squad');
const theJoker = document.querySelector('.the-joker');

let animate = true;
let lastScrollTop = 0;
main.addEventListener("scroll", () => {
    let st = window.pageYOffset || main.scrollTop;

    if (st > lastScrollTop && animate === true && window.innerWidth > 1900){

        animateFilm(3300, 3330, theKillingJoker, '-420%', '-6vw', '-5vw');
        animateFilm(3700, 3730, batman1989, '320%', '6vw', '7vw');
        animateFilm(3900, 3930, theDarkKnight, '-370%', '27vw', '28vw');
        animateFilm(4200, 4230, suicideSquad, '260%', '40vw', '41vw');
        animateFilm(4500, 4530, theJoker, '-50%', '69vw', '70vw');

    } else {

    }
    lastScrollTop = st <= 0 ? 0 : st; // for mobile or negative scrolling
}, false);

const animateFilm = (scrollFrom, scrollTo, target, translateX, translateYFrom, translateYTo) => {
    if ((( window.pageYOffset > scrollFrom && window.pageYOffset < scrollTo ) || ( main.scrollTop > scrollFrom && main.scrollTop < scrollTo ))) {
        anime({
            targets: target,
            opacity: 1,
            translateX: [ translateX, translateX ],
            translateY: [ translateYFrom , translateYTo ],
            easing: 'easeInOutExpo',
        })
        animate = target === theJoker ? false : true;
    }
}