const links = document.querySelectorAll('.menuActive__slider__links__link')
const blocks = document.querySelectorAll('.menuActive_block')
const closeButtons = document.querySelectorAll('.menuActive__block__closeButton')

const renderMenuBlocks = (one_block) => {
    blocks.forEach(block => {
        anime({
            targets: block,
            translateY: ['-50%','-52%','-50%'],
            translateX: ['-50%','-50%'],
            opacity: [1,0,1],
            duration: 700,
            easing: 'easeOutExpo'
        })

        setTimeout(() => {
            block.style.display = 'none'
        }, 450)
    });

    setTimeout(() => {
        blocks[one_block].style.display = 'block'
    }, 450)
}

const closeMenuBlocks = (button) => {
    button.addEventListener('click', () => {
        blocks.forEach(block => {
            anime({
                targets: block,
                translateY: ['-50%','-52%'],
                translateX: ['-50%','-50%'],
                opacity: [1,0],
                duration: 700,
                easing: 'easeOutExpo'
            })
    
            setTimeout(() => {
                block.style.display = 'none'
            }, 450)
        });
    })
}

closeButtons.forEach(closeButton => {
    closeMenuBlocks(closeButton)
});



for (let i = 0; i < links.length; i++) {
    if(links[i]) {
        links[i].addEventListener('click', async () => {
            renderMenuBlocks(i);
        })  
    }
}