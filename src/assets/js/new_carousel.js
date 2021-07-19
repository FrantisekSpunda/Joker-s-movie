// trailer section carousel

const trailerCarousel = new Carousel({
    slider: '.trailerSection__slider',
    styles: {
        value: true,
        carousel: {
            height: window.innerWidth < 810 
                ? window.innerWidth < 550 
                    ? '50vw'
                    : '350px' 
                : '250px',
            maxWidth: '930px',
            borderRadius: '0',
            position: 'static',
        },
        slider: {
            gap: '48px',
        },
        slides: {
            borderRadius: '0',
            background: 'transparent',
            border: 'none',
            display: 'flex',
            flexFlow: 'column nowrap',
            height: '90%',
            position: 'relative',
            margin: window.innerWidth < 810 ?
                window.innerWidth < 750
                    ? window.innerWidth < 596
                        ? '0%'
                        : '1%'
                    : '2%' 
                : '0px',
        },
        arrowsContainer: {
            top: '55%',
            zIndex: '500',
            left: '-32px',
            width: 'calc(60% + 80px)',
        },
        arrows: {
            background: 'transparent',
            margin: '0 12px',
            cursor: 'pointer',
            width: '28px'
        },
        arrowImage: {
            height: '28px'
        },
        pagination: {
            flexFlow: 'column nowrap',
            top: '58%',
            transform: 'translate(0, -50%)',
            left: '1050px',
            width: 'auto',
            bottom: '0px',
            height: '60%'
        },
        paginator: {
            borderRadius: '0',
            height: '15%',
            width: '1px',
        },
        paginatorActive: {

        },
    },
    options: {
        startSlide: 1,
        perMove: 1,
        perPage: window.innerWidth < 810 ? 1 : 2,
        carouselClass: 'classForcarousel',
        arrowClass: 'classForArrows',
        arrowSrc: './images/arrow-v2.svg',
        paginatorClass: 'classPaginator'

    },
    controllers: {
        arrows: true,
        pagination: true,
    }
})

// if( window.innerWidth < 810 ) {
//     const trailerCarousel2 = new Carousel({
//         slider: '.trailerSection__slider',
//         styles: {
//             value: true,
//             carousel: {
//                 height: '250px',
//                 maxWidth: '930px',
//                 borderRadius: '0',
//                 position: 'static',
//             },
//             slider: {
//                 gap: '48px',
//             },
//             slides: {
//                 borderRadius: '0',
//                 background: 'transparent',
//                 border: 'none',
//                 display: 'flex',
//                 flexFlow: 'column nowrap',
//                 height: '90%',
//                 position: 'relative',
//             },
//             arrowsContainer: {
//                 top: '55%',
//                 zIndex: '500',
//                 left: '-32px',
//                 width: 'calc(60% + 80px)',
//             },
//             arrows: {
//                 background: 'transparent',
//                 margin: '0 12px',
//                 cursor: 'pointer',
//                 width: '28px'
//             },
//             arrowImage: {
//                 height: '28px'
//             },
//             pagination: {
//                 flexFlow: 'column nowrap',
//                 top: '58%',
//                 transform: 'translate(0, -50%)',
//                 left: '1050px',
//                 width: 'auto',
//                 bottom: '0px',
//                 height: '60%'
//             },
//             paginator: {
//                 borderRadius: '0',
//                 height: '15%',
//                 width: '1px',
//             },
//             paginatorActive: {

//             },
//         },
//         options: {
//             startSlide: 1,
//             perMove: 1,
//             perPage: 1,
//             carouselClass: 'classForcarousel',
//             arrowClass: 'classForArrows',
//             arrowSrc: './images/arrow-v2.svg',
//             paginatorClass: 'classPaginator'

//         },
//         controllers: {
//             arrows: true,
//             pagination: true,
//         }
//     })
// }

const awardCarousel_oscar = new Carousel({
    slider: '.awardSection__oscar-carousel',
    styles: {
        value: true,
        carousel: {
            height: '237px',
            width: '400px',
            borderRadius: '0',
            background: 'transparent',
            padding: '0',
        },
        slider: {
            gap: '200px',
        },
        slides: {
            borderRadius: '0',
            background: 'transparent',
            border: 'none',
            display: 'flex',
            flexFlow: 'column nowrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '100%',
            position: 'relative',
            padding: '100px 60px 20px',
        },
        arrowsContainer: {
            zIndex: '500',
            top: '60%',
        },
        arrows: {
            width: '28px',
            margin: '0 12px',
            cursor: 'pointer',
        },
        arrowImage: {
            height: '28px'
        },
        pagination: {
            bottom: '0',
            width: '15%',
        },
        paginator: {
            width: '3px',
            height: '3px',
        },
        paginatorActive: {

        },
    },
    options: {
        startSlide: 1,
        perMove: 1,
        perPage: 1,
        carouselClass: 'js-oscarCarousel',
        arrowClass: 'js-carousel__arrow',
        arrowSrc: './images/arrow-v2.svg',

    },
    controllers: {
        arrows: true,
        pagination: true,
    }
})

const awardCarousel_bafta = new Carousel({
    slider: '.awardSection__bafta-carousel',
    styles: {
        value: true,
        carousel: {
            height: '237px',
            width: '400px',
            borderRadius: '0',
            background: 'transparent',
            padding: '0',
        },
        slider: {
            gap: '200px',
        },
        slides: {
            borderRadius: '0',
            background: 'transparent',
            border: 'none',
            display: 'flex',
            flexFlow: 'column nowrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '100%',
            position: 'relative',
            padding: '100px 60px 20px',
        },
        arrowsContainer: {
            zIndex: '500',
            top: '60%',
        },
        arrows: {
            width: '28px',
            margin: '0 12px',
            cursor: 'pointer',
        },
        arrowImage: {
            height: '28px'
        },
        pagination: {
            bottom: '0',
            width: '15%',
        },
        paginator: {
            width: '3px',
            height: '3px',
        },
        paginatorActive: {

        },
    },
    options: {
        startSlide: 1,
        perMove: 1,
        perPage: 1,
        carouselClass: 'js-baftaCarousel',
        arrowClass: 'js-carousel__arrow',
        arrowSrc: './images/arrow-v2.svg',

    },
    controllers: {
        arrows: true,
        pagination: true,
    }
})