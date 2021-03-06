/********************************* 
    ↓↓↓ POOP LIBRARY CAROUSEL ↓↓↓
**********************************/

class Carousel {
    constructor ({slider, options, styles, controllers = {}}) {
        this.slider = slider;
        this.options = options;
        this.styles = styles;
        this.controllers = controllers;
        this.init();
    }

    //      ↓↓↓ set elements of Carousel ↓↓↓
    initSlider() {
        this.carousel = document.querySelector(this.slider);
        this.carousel_cont = document.querySelector(this.slider + '> *');
        this.carousel_cont_slides = Array.prototype.slice.call( this.carousel_cont.children );
    }

    //      ↓↓↓ subtraction perMove to currentSlide and then evocation func changeSlide ↓↓↓
    nextSlide() {
        if (this.currentSlide >= this.sliderLen - this.perPage + 1) {
            console.log('');
            this.currentSlide = 1;
        } else {
            console.log('');
            this.currentSlide = this.sliderLen - (this.currentSlide + this.perMove) < this.perPage
                ? this.currentSlide = this.sliderLen - this.perPage + 1
                : this.currentSlide + this.perMove;
        }
        
        this.changeSlide(this.currentSlide);
        this.changePagination(this.currentSlide);
    }

    //      ↓↓↓ addition perMove to currentSlide and then evocation func changeSlide ↓↓↓
    prevSlide() {
        if (this.currentSlide <= 1) {
            console.log('');
            this.currentSlide = this.sliderLen - this.perPage + 1;
        } else {
            console.log('');
            this.currentSlide = this.currentSlide - this.perMove <= 1
                ? 1
                : this.currentSlide - this.perMove;
        }
        
        this.changeSlide(this.currentSlide);
        this.changePagination(this.currentSlide);
    }

    //      ↓↓↓ change transform of carousel for change slide ↓↓↓
    changeSlide(index = this.currentSlide) {
        this.currentSlide = index;
        this.apparentTransform = 100 / this.carousel_cont_slides.length * (this.currentSlide - 1);
        this.deductionGap = this.styles.slider.gap.replace('px', '') / this.carousel_cont_slides.length * (this.currentSlide - 1);
        this.carousel_cont.style.transform = `translateX(calc(-${this.apparentTransform}% - ${this.deductionGap}px)`;
    }

    changePagination(value) {
        const allPaginators = this.paginationContainer.querySelectorAll(`.${this.options.paginatorClass}`);

        allPaginators.forEach(pagination => {
            pagination.classList.remove('active')
        })

        for (let i = 0; i < this.perPage; i++) {
            allPaginators[value - 1 + i].classList.add('active');
        }
    }

    renderArrows() {
        const arrowContainer = document.createElement('div');
        arrowContainer.classList.add('js-arrow_container');

        arrowContainer.innerHTML = `
            <div class="js-slider-prev ${this.options.arrowClass}">
                <img src='${ this.options.arrowSrc }'>
            </div>
            <div class="js-slider-next ${this.options.arrowClass}">
                <img src='${ this.options.arrowSrc }'>
            </div>
        `
        const arrows = arrowContainer.querySelectorAll(`.${this.options.arrowClass}`)
        arrows.forEach(arrow => {
            arrow.addEventListener("click", () => {
                if(arrow.classList.contains("js-slider-prev")){
                    this.prevSlide();
                    console.log('prev');
                } else if(arrow.classList.contains("js-slider-next")){
                    this.nextSlide()
                    console.log('next');
                }
            })
        })

        this.carousel.appendChild(arrowContainer);
    }

    renderPagination() {
        this.paginationContainer = document.createElement("div");
        this.paginationContainer.classList.add("js-pagination__container");

        for(let i = 1; i <= this.sliderLen; i++){
            const paginator = document.createElement('div')
            paginator.classList.add(this.options.paginatorClass)
            paginator.value = i
            this.paginationContainer.append(paginator)

            paginator.addEventListener('click', () => {
                this.currentSlide = paginator.value >= this.sliderLen - this.perPage + 1 ? this.sliderLen - this.perPage + 1 : paginator.value;
                this.changePagination(this.currentSlide)
                this.changeSlide(this.currentSlide)
            })
        }

        this.carousel.appendChild(this.paginationContainer);
        this.changePagination(this.currentSlide);
    }

    //      ↓↓↓ translate JS object to CSS styles ↓↓↓
    initStylesFor(object) {
        let stringStyle = '';
        for (const [key, value] of Object.entries(object)) {
            let myKey = key.match(/[A-Z]*[^A-Z]+/g).map(word => word.toLowerCase()).join('-');
            stringStyle += (`${myKey}: ${value};`);
        }
        return stringStyle;
    }

    //      ↓↓↓ setting styles for Carousel ↓↓↓
    initStyles(style) {

        if (style.value != false) {

            //          ↓↓↓ Defalut styles ↓↓↓ ❤
            style.carousel.maxWidth = (style.carousel.maxWidth || style.carousel.width || style.carousel.minWidth) ? style.carousel.maxWidth : '500px';
            style.carousel.height = style.carousel.height ? style.carousel.height : '300px';
            style.carousel.background = (style.carousel.background || style.carousel.backgroundColor || style.carousel.backgroundImage) ? style.carousel.background : 'transparent';
            style.slider.transition = style.slider.transition ? style.slider.transition : 'transform 1s';
            style.slider.gap = style.slider.gap ? style.slider.gap : '50px';
            style.slides.background = (style.slides.background || style.slides.backgroundColor || style.slides.backgroundImage) ? style.slides.background : '#ffffff';
            style.slider.alignItems = style.slider.alignItems ? style.slider.alignItems : 'center';
            style.slides.height = style.slides.height ? style.slides.height: '100%';
            style.slides.margin = style.slides.margin ? style.slides.margin: '1px';
            style.slides.borderRadius = style.slides.borderRadius ? style.slides.borderRadius: '10px';
            style.slides.border = style.slides.border ? style.slides.border: '1px solid #333333';
            style.arrowsContainer.top = style.arrowsContainer.top ? style.arrowsContainer.top : '50%';
            style.arrowsContainer.width = style.arrowsContainer.width ? style.arrowsContainer.width : '100%';
            style.arrowsContainer.left = style.arrowsContainer.left ? style.arrowsContainer.left : '0';
            style.arrowsContainer.transform = style.arrowsContainer.transform ? style.arrowsContainer.transform : 'translate(0,-50%)';
            style.arrowsContainer.display = style.arrowsContainer.display ? style.arrowsContainer.display : 'flex';
            style.arrowsContainer.justifyContent = style.arrowsContainer.justifyContent ? style.arrowsContainer.justifyContent : 'space-between';
            style.arrowsContainer.flexFlow = style.arrowsContainer.flexFlow ? style.arrowsContainer.flexFlow : 'row nowrap';
            style.arrows.display = style.arrows.display ? style.arrows.display : 'flex';
            style.arrows.justifyContent = style.arrows.justifyContent ? style.arrows.justifyContent : 'center';
            style.arrows.alignItems = style.arrows.alignItems ? style.arrows.alignItems : 'center';
            style.arrowImage.height = style.arrowImage.height ? style.arrowImage.height : '50px';
            style.pagination.width = style.pagination.width ? style.pagination.width : '60%';
            style.pagination.display = style.pagination.display ? style.pagination.display : 'flex';
            style.pagination.flexFlow = style.pagination.flexFlow ? style.pagination.flexFlow : 'row nowrap';
            style.pagination.justifyContent = style.pagination.justifyContent ? style.pagination.justifyContent : 'space-between';
            style.pagination.alignItems = style.pagination.alignItems ? style.pagination.alignItems : 'center';
            style.pagination.position = style.pagination.position ? style.pagination.position : 'absolute';
            style.pagination.bottom = style.pagination.bottom ? style.pagination.bottom : '5%';
            style.pagination.left = style.pagination.left ? style.pagination.left : '50%';
            style.pagination.transform = style.pagination.transform ? style.pagination.transform : 'translate(-50%,0)';
            style.paginator.width = style.paginator.width ? style.paginator.width : '7px';
            style.paginator.height = style.paginator.height ? style.paginator.height : '7px';
            style.paginator.borderRadius = style.paginator.borderRadius ? style.paginator.borderRadius : '50%';
            style.paginator.background = style.paginator.background ? style.paginator.background : '#777777';
            style.paginator.cursor = style.paginator.cursor ? style.paginator.cursor : 'pointer';
            style.paginatorActive.background = style.paginatorActive.background ? style.paginatorActive.background : '#BE4A4E';

            //          ↑↑↑ Defalut styles ↑↑↑ ❤

            this.carousel.classList.add(this.options.carouselClass);
            const styleElement = document.createElement('style');

            styleElement.innerHTML = 
            `
            .${this.options.carouselClass} {
                position: relative;
                ${ this.initStylesFor(style.carousel)}
                overflow: hidden;
            }
            .${this.options.carouselClass} > *:nth-child(1) {
                ${ this.initStylesFor(style.slider)}
                width: calc((${this.carousel_cont_slides.length * 100}% + ${style.slider.gap}*${this.sliderLen - this.perPage})/${this.perPage});
                height: 100%;
                display: flex;
                flex-flow: row nowrap;
            }
            .${this.options.carouselClass} > *:nth-child(1) > * {
                margin: 0px;
                ${this.initStylesFor(style.slides)}
                height: calc(${style.slides.height} - ${style.slides.margin}*2);
                width: 100%;
            }

            .${this.options.carouselClass} .js-arrow_container {
                ${ this.initStylesFor(style.arrowsContainer) }
                position: absolute;
            }
            .${this.options.carouselClass} .js-arrow_container > .${this.options.arrowClass} {
                ${ this.initStylesFor(style.arrows) }
            }
            .${this.options.carouselClass} .js-arrow_container > .${this.options.arrowClass}:nth-child(2) {
                transform: rotate(180deg);
            }
            .${this.options.carouselClass} .js-arrow_container > .${this.options.arrowClass} > img {
                ${ this.initStylesFor(style.arrowImage) }
            }

            .${this.options.carouselClass} .js-pagination__container {
                ${ this.initStylesFor(style.pagination) }
            }
            .${this.options.carouselClass} .js-pagination__container > .${this.options.paginatorClass} {
                ${ this.initStylesFor(style.paginator) }
            }
            .${this.options.carouselClass} .js-pagination__container > .${this.options.paginatorClass}.active {
                ${ this.initStylesFor(style.paginatorActive )}
            }
            `
            document.body.appendChild(styleElement)
        }
    }

    //      ↓↓↓ setup default options of Carousel ↓↓↓
    initControllers() {
        if(this.controllers.pagination === true){
            this.renderPagination()
        }
        
        if(this.controllers.arrows === true){
            this.renderArrows()
        }

        // if(this.controllers["draggable"] === true) {
        //     this.initDraggable()
        // }
    }

    initOptions() {
        this.options.carouselClass = this.options.carouselClass ? this.options.carouselClass : 'js-carousel';
        this.options.arrowClass = this.options.arrowClass ? this.options.arrowClass : 'js-carousel-arrows';
        this.options.paginatorClass = this.options.paginatorClass ? this.options.arrowClass : 'js-paginator';
        this.currentSlide = this.options.startSlide ? this.options.startSlide : 1;
        this.perPage = this.options.perPage ? this.options.perPage : 1;
        this.perMove = this.options.perMove ? this.options.perMove : 1;
        this.sliderLen = this.carousel_cont_slides.length
        this.styles ? this.initStyles(this.styles): null;
    }
    
    //      ↓↓↓ PRIMARY FUNCTIONS ↓↓↓
    init() {
        this.initSlider();
        this.initOptions();
        this.initControllers();
        this.currentSlide = this.currentSlide >= this.sliderLen - this.perPage + 1 
            ? this.sliderLen - this.perPage + 1
            : this.currentSlide;
        this.changeSlide();
    }
}