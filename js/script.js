
"use strict";


document.addEventListener('DOMContentLoaded', () => {

    /*! WOW wow.js - v1.3.0 - 2016-10-04
* https://wowjs.uk
* Copyright (c) 2016 Thomas Grainger; Licensed MIT */!function(a,b){if("function"==typeof define&&define.amd)define(["module","exports"],b);else if("undefined"!=typeof exports)b(module,exports);else{var c={exports:{}};b(c,c.exports),a.WOW=c.exports}}(this,function(a,b){"use strict";function c(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function d(a,b){return b.indexOf(a)>=0}function e(a,b){for(var c in b)if(null==a[c]){var d=b[c];a[c]=d}return a}function f(a){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(a)}function g(a){var b=arguments.length<=1||void 0===arguments[1]?!1:arguments[1],c=arguments.length<=2||void 0===arguments[2]?!1:arguments[2],d=arguments.length<=3||void 0===arguments[3]?null:arguments[3],e=void 0;return null!=document.createEvent?(e=document.createEvent("CustomEvent"),e.initCustomEvent(a,b,c,d)):null!=document.createEventObject?(e=document.createEventObject(),e.eventType=a):e.eventName=a,e}function h(a,b){null!=a.dispatchEvent?a.dispatchEvent(b):b in(null!=a)?a[b]():"on"+b in(null!=a)&&a["on"+b]()}function i(a,b,c){null!=a.addEventListener?a.addEventListener(b,c,!1):null!=a.attachEvent?a.attachEvent("on"+b,c):a[b]=c}function j(a,b,c){null!=a.removeEventListener?a.removeEventListener(b,c,!1):null!=a.detachEvent?a.detachEvent("on"+b,c):delete a[b]}function k(){return"innerHeight"in window?window.innerHeight:document.documentElement.clientHeight}Object.defineProperty(b,"__esModule",{value:!0});var l,m,n=function(){function a(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),o=window.WeakMap||window.MozWeakMap||function(){function a(){c(this,a),this.keys=[],this.values=[]}return n(a,[{key:"get",value:function(a){for(var b=0;b<this.keys.length;b++){var c=this.keys[b];if(c===a)return this.values[b]}}},{key:"set",value:function(a,b){for(var c=0;c<this.keys.length;c++){var d=this.keys[c];if(d===a)return this.values[c]=b,this}return this.keys.push(a),this.values.push(b),this}}]),a}(),p=window.MutationObserver||window.WebkitMutationObserver||window.MozMutationObserver||(m=l=function(){function a(){c(this,a),"undefined"!=typeof console&&null!==console&&(console.warn("MutationObserver is not supported by your browser."),console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content."))}return n(a,[{key:"observe",value:function(){}}]),a}(),l.notSupported=!0,m),q=window.getComputedStyle||function(a){var b=/(\-([a-z]){1})/g;return{getPropertyValue:function(c){"float"===c&&(c="styleFloat"),b.test(c)&&c.replace(b,function(a,b){return b.toUpperCase()});var d=a.currentStyle;return(null!=d?d[c]:void 0)||null}}},r=function(){function a(){var b=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];c(this,a),this.defaults={boxClass:"wow",animateClass:"animated",offset:0,mobile:!0,live:!0,callback:null,scrollContainer:null,resetAnimation:!0},this.animate=function(){return"requestAnimationFrame"in window?function(a){return window.requestAnimationFrame(a)}:function(a){return a()}}(),this.vendors=["moz","webkit"],this.start=this.start.bind(this),this.resetAnimation=this.resetAnimation.bind(this),this.scrollHandler=this.scrollHandler.bind(this),this.scrollCallback=this.scrollCallback.bind(this),this.scrolled=!0,this.config=e(b,this.defaults),null!=b.scrollContainer&&(this.config.scrollContainer=document.querySelector(b.scrollContainer)),this.animationNameCache=new o,this.wowEvent=g(this.config.boxClass)}return n(a,[{key:"init",value:function(){this.element=window.document.documentElement,d(document.readyState,["interactive","complete"])?this.start():i(document,"DOMContentLoaded",this.start),this.finished=[]}},{key:"start",value:function(){var a=this;if(this.stopped=!1,this.boxes=[].slice.call(this.element.querySelectorAll("."+this.config.boxClass)),this.all=this.boxes.slice(0),this.boxes.length)if(this.disabled())this.resetStyle();else for(var b=0;b<this.boxes.length;b++){var c=this.boxes[b];this.applyStyle(c,!0)}if(this.disabled()||(i(this.config.scrollContainer||window,"scroll",this.scrollHandler),i(window,"resize",this.scrollHandler),this.interval=setInterval(this.scrollCallback,50)),this.config.live){var d=new p(function(b){for(var c=0;c<b.length;c++)for(var d=b[c],e=0;e<d.addedNodes.length;e++){var f=d.addedNodes[e];a.doSync(f)}});d.observe(document.body,{childList:!0,subtree:!0})}}},{key:"stop",value:function(){this.stopped=!0,j(this.config.scrollContainer||window,"scroll",this.scrollHandler),j(window,"resize",this.scrollHandler),null!=this.interval&&clearInterval(this.interval)}},{key:"sync",value:function(){p.notSupported&&this.doSync(this.element)}},{key:"doSync",value:function(a){if("undefined"!=typeof a&&null!==a||(a=this.element),1===a.nodeType){a=a.parentNode||a;for(var b=a.querySelectorAll("."+this.config.boxClass),c=0;c<b.length;c++){var e=b[c];d(e,this.all)||(this.boxes.push(e),this.all.push(e),this.stopped||this.disabled()?this.resetStyle():this.applyStyle(e,!0),this.scrolled=!0)}}}},{key:"show",value:function(a){return this.applyStyle(a),a.className=a.className+" "+this.config.animateClass,null!=this.config.callback&&this.config.callback(a),h(a,this.wowEvent),this.config.resetAnimation&&(i(a,"animationend",this.resetAnimation),i(a,"oanimationend",this.resetAnimation),i(a,"webkitAnimationEnd",this.resetAnimation),i(a,"MSAnimationEnd",this.resetAnimation)),a}},{key:"applyStyle",value:function(a,b){var c=this,d=a.getAttribute("data-wow-duration"),e=a.getAttribute("data-wow-delay"),f=a.getAttribute("data-wow-iteration");return this.animate(function(){return c.customStyle(a,b,d,e,f)})}},{key:"resetStyle",value:function(){for(var a=0;a<this.boxes.length;a++){var b=this.boxes[a];b.style.visibility="visible"}}},{key:"resetAnimation",value:function(a){if(a.type.toLowerCase().indexOf("animationend")>=0){var b=a.target||a.srcElement;b.className=b.className.replace(this.config.animateClass,"").trim()}}},{key:"customStyle",value:function(a,b,c,d,e){return b&&this.cacheAnimationName(a),a.style.visibility=b?"hidden":"visible",c&&this.vendorSet(a.style,{animationDuration:c}),d&&this.vendorSet(a.style,{animationDelay:d}),e&&this.vendorSet(a.style,{animationIterationCount:e}),this.vendorSet(a.style,{animationName:b?"none":this.cachedAnimationName(a)}),a}},{key:"vendorSet",value:function(a,b){for(var c in b)if(b.hasOwnProperty(c)){var d=b[c];a[""+c]=d;for(var e=0;e<this.vendors.length;e++){var f=this.vendors[e];a[""+f+c.charAt(0).toUpperCase()+c.substr(1)]=d}}}},{key:"vendorCSS",value:function(a,b){for(var c=q(a),d=c.getPropertyCSSValue(b),e=0;e<this.vendors.length;e++){var f=this.vendors[e];d=d||c.getPropertyCSSValue("-"+f+"-"+b)}return d}},{key:"animationName",value:function(a){var b=void 0;try{b=this.vendorCSS(a,"animation-name").cssText}catch(c){b=q(a).getPropertyValue("animation-name")}return"none"===b?"":b}},{key:"cacheAnimationName",value:function(a){return this.animationNameCache.set(a,this.animationName(a))}},{key:"cachedAnimationName",value:function(a){return this.animationNameCache.get(a)}},{key:"scrollHandler",value:function(){this.scrolled=!0}},{key:"scrollCallback",value:function(){if(this.scrolled){this.scrolled=!1;for(var a=[],b=0;b<this.boxes.length;b++){var c=this.boxes[b];if(c){if(this.isVisible(c)){this.show(c);continue}a.push(c)}}this.boxes=a,this.boxes.length||this.config.live||this.stop()}}},{key:"offsetTop",value:function(a){for(;void 0===a.offsetTop;)a=a.parentNode;for(var b=a.offsetTop;a.offsetParent;)a=a.offsetParent,b+=a.offsetTop;return b}},{key:"isVisible",value:function(a){var b=a.getAttribute("data-wow-offset")||this.config.offset,c=this.config.scrollContainer&&this.config.scrollContainer.scrollTop||window.pageYOffset,d=c+Math.min(this.element.clientHeight,k())-b,e=this.offsetTop(a),f=e+a.clientHeight;return d>=e&&f>=c}},{key:"disabled",value:function(){return!this.config.mobile&&f(navigator.userAgent)}}]),a}();b["default"]=r,a.exports=b["default"]});
    new WOW().init();


    // Slider Main

    function slideSwiper() {
        const offerIndex = document.querySelector('.offer-main__slider');
        const offerProject = document.querySelector('.project-main__slider');
        const services = document.querySelector('.body-content-services-single__slider');

        if (offerIndex) {
            const swiperIndex = new Swiper(offerIndex, {
                loop: true,
                slidesPerView: 1,
                autoplay: {
                    delay: 7000,
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            });
            swiperIndex.on('transitionStart', function () {
                for (let index = 0; index < swiperIndex.slides.length; index++) {
                    const element = swiperIndex.slides[index];

                    if (element.classList.contains('swiper-slide-active')) {
                        if (element.classList.contains('offer-main__slider-slide-1')) {
                            RemofferAnimetInnit();
                            fistSlideImgActive();
                            slideImgRemove();
                            firstAddofferAnimetInnit();
                            setTimeout(() => {
                                AddofferAnimetInnit();
                                slideImgActive();
                            }, 200);
                        }
                        if (element.classList.contains('offer-main__slider-slide-2')) {
                            RemofferAnimetInnit();
                            creatElementSlide2ARemove();
                            removeAnimSlide2Img2();
                            setTimeout(() => {
                                AddofferAnimetInnit();
                                creatElementSlide2Active();
                                addAnimSlide2Img2();
                            }, 200);
                        }
                        if (element.classList.contains('offer-main__slider-slide-3')) {
                            RemofferAnimetInnit();
                            slideImgRemove();
                            setTimeout(() => {
                                AddofferAnimetInnit();
                                slideImgActive();
                            }, 200);
                        }
                    }
                }
            });
        }
        if (offerProject) {
            const swiperProject = new Swiper(offerProject, {
                loop: true,
                slidesPerView: 4,
                spaceBetween: 30,
                autoplay: {
                    delay: 7000,
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                breakpoints: {
                    // when window width is >= 320px
                    320: {
                        slidesPerView: 1,
                        //   spaceBetween: 20
                    },
                    // when window width is >= 480px
                    480: {
                        slidesPerView: 2,
                        //   spaceBetween: 30
                    },
                    // when window width is >= 640px
                    700: {
                        slidesPerView: 3,
                        //   spaceBetween: 40
                    },
                    900: {
                        slidesPerView: 4,
                    }
                }
            });
        }
        if (services) {
            const swiperServices = new Swiper(services, {
                loop: true,
                slidesPerView: 1,
                spaceBetween: 30,
                autoplay: {
                    delay: 7000,
                },
                pagination: {
                    el: '.swiper-pagination',
                    type: 'bullets',
                },
            });
        }
    }

    slideSwiper();

    function addAnimSlide2Img2() {
        const animateItem = document.querySelector('.offer-main__slider-imgtwo');
        animateItem.style = 'opacity:1';
        animateItem.classList.add('wow');
        animateItem.classList.add('animate__animated');
        animateItem.classList.add('animate__zoomIn');
    }
    function removeAnimSlide2Img2() {
        const animateItem = document.querySelector('.offer-main__slider-imgtwo');
        animateItem.style = 'opacity:0';
        animateItem.classList.remove('wow');
        animateItem.classList.remove('animate__animated');
        animateItem.classList.remove('animate__zoomIn');
    }

    function AddofferAnimetInnit() {
        const animateItem = document.querySelectorAll('._animateItem');

        for (let index = 0; index < animateItem.length; index++) {
            const element = animateItem[index];
            element.style = 'opacity:1';
            element.classList.add('wow');
            element.classList.add('animate__animated');
            element.classList.add('animate__fadeInUp');
        }
    }
    AddofferAnimetInnit();

    function firstAddofferAnimetInnit() {
        const animateItem = document.querySelectorAll('._animateItem');

        for (let index = 0; index < animateItem.length; index++) {
            const element = animateItem[index];
            element.classList.add('slide-2');
        }
    }

    function RemofferAnimetInnit() {
        const animateItem = document.querySelectorAll('._animateItem');

        for (let index = 0; index < animateItem.length; index++) {
            const element = animateItem[index];
            element.style = '';
            element.classList.remove('wow');
            element.classList.remove('animate__animated');
            element.classList.remove('animate__fadeInUp');
        }
    }

    function fistSlideImgActive() {
        const animateItem = document.querySelectorAll('.slide-img-1');

        for (let index = 0; index < animateItem.length; index++) {
            const element = animateItem[index];
            element.classList.add('slide-img-1-rem');
        }
    }

    function slideImgActive() {
        const animateItem = document.querySelectorAll('.slide-img-1');

        for (let index = 0; index < animateItem.length; index++) {
            const element = animateItem[index];
            element.style = 'opacity:1';
            element.classList.add('wow');
            element.classList.add('animate__animated');
            element.classList.add('animate__fadeIn');
        }
    }
    slideImgActive();

    function slideImgRemove() {
        const animateItem = document.querySelectorAll('.slide-img-1');

        for (let index = 0; index < animateItem.length; index++) {
            const element = animateItem[index];
            element.style = '';
            element.classList.remove('wow');
            element.classList.remove('animate__animated');
            element.classList.remove('animate__fadeIn');
        }
    }

    function creatElementSlide2() {
        const slideImg = document.querySelector('.slide-img-2 img');
        const slideparent = document.querySelector('.slide-img-2');

        if (slideImg) {
            const src = slideImg.src;
            const div1 = document.createElement('div');
            const div2 = document.createElement('div');
            const div3 = document.createElement('div');
            const div4 = document.createElement('div');
            const div5 = document.createElement('div');

            div1.classList.add('slide-active-img');
            div2.classList.add('slide-active-img');
            div3.classList.add('slide-active-img');
            div4.classList.add('slide-active-img');
            div5.classList.add('slide-active-img');

            //     slideImg.style = `
            //     transition-delay: 2s;
            // transition: all 0.8s ease;
            //     `;

            div1.style = `
                background-position: 20% 42%;
                right: 80%;
                width:20%;
                left: auto;
            `;
            div2.style = `
                background-position: 40% 40%;
                right: 60%;
                width:20%;
                left: auto;
            `;
            div3.style = `
                background-position: 60% 60%;
                right: 40%;
                width:20%;
                left: auto;
            `;
            div4.style = `
                background-position: 80% 80%;
                right: 20%;
                width:20%;
                left: auto;
            `;
            div5.style = `
                background-position: 100% 100%;
                right: 0;
                width:20%;
                left: auto;
            `;

            slideparent.appendChild(div1);
            slideparent.appendChild(div2);
            slideparent.appendChild(div3);
            slideparent.appendChild(div4);
            slideparent.appendChild(div5);
            creatElementSlide2img(src);
        }
    }

    creatElementSlide2();

    function creatElementSlide2img(src) {
        const itemParent = document.querySelectorAll('.slide-active-img');
        for (let index = 0; index < itemParent.length; index++) {
            const el = itemParent[index];
            const img = document.createElement('img');
            img.src = src;
            el.appendChild(img);
        }
    }

    function creatElementSlide2Active() {
        const img = document.querySelectorAll('.slide-active-img');
        for (let index = 0; index < img.length; index++) {
            const el = img[index];
            el.classList.add('_active');
        }
    }

    function creatElementSlide2ARemove() {
        const img = document.querySelectorAll('.slide-active-img');
        for (let index = 0; index < img.length; index++) {
            const el = img[index];
            el.classList.remove('_active');
        }
    }


    //======================================================================================================

    //Language

    function languageClick() {
        const header = document.querySelector('.header');
        const languageHead = document.querySelector('.language-top-menu-header__header');
        const languageHeadText = document.querySelector('.language-top-menu-header__text');
        const languageBody = document.querySelector('.language-top-menu-header__body');
        const languageItems = document.querySelectorAll('.language-top-menu-header__body a');
        const body = document.body;

        const div = document.createElement('div');
        div.classList.add('div-click');

        if (languageHead) {
            languageHead.addEventListener('click', () => {
                languageBody.classList.toggle('_active');
                if (languageBody.classList.contains('_active')) {
                    body.appendChild(div);
                } else {
                    div.remove();
                }
            });

            div.addEventListener('click', () => {
                languageBody.classList.remove('_active');
                div.remove();
            });

            for (let index = 0; index < languageItems.length; index++) {
                const element = languageItems[index];
                if (element.closest('.current-lang')) {
                    languageHeadText.textContent = element.textContent;
                }
                // element.addEventListener('click', () => {
                //     languageBody.classList.remove('_active');
                //     languageHeadText.textContent = element.textContent;
                //     div.remove();
                // });
            }
        }
    }

    languageClick();



    //=========================================================


    // Burger

    function burgerClick() {
        const burger = document.querySelector('.header__burger');
        const header = document.querySelector('.header');
        const headerTopWrapper = document.querySelector('.top-menu-header__wrapper');
        const headerBottomWrapper = document.querySelector('.bottom-menu-header__wrapper');
        const headerTopMenu = document.querySelector('.top-menu-header');
        const menu = document.querySelector('.bottom-menu-header');
        const language = document.querySelector('.language-top-menu-header');
        const phone = document.querySelector('.top-menu-header__item-phone');
        const btn = document.querySelector('.bottom-menu-header__btn');
        const mail = document.querySelector('.top-menu-header__item-mail');
        const logo = document.querySelector('.header__logo');
        const body = document.body;

        const menuMobile = document.createElement('div');
        menuMobile.classList.add('menu-mobile');

        const topHead = document.createElement('div');
        topHead.classList.add('topHead');

        if (burger) {
            burger.addEventListener('click', () => {
                burger.classList.toggle('_active');
                body.classList.toggle('_active');
                header.classList.toggle('_active');
                menuMobile.classList.toggle('_active');
            });

            window.addEventListener('resize', () => {
                if (document.documentElement.clientWidth <= 854) {
                    burger.insertAdjacentElement('afterend', menuMobile);
                    logo.insertAdjacentElement('afterend', language);
                    logo.insertAdjacentElement('afterend', btn);
                    logo.insertAdjacentElement('afterend', mail);
                    logo.insertAdjacentElement('afterend', phone);
                    menuMobile.insertAdjacentElement('beforeend', menu);
                } else {
                    headerTopWrapper.insertAdjacentElement('afterbegin', phone);
                    headerTopWrapper.insertAdjacentElement('afterbegin', mail);
                    headerTopWrapper.insertAdjacentElement('beforeend', language);
                    headerTopMenu.insertAdjacentElement('afterend', menu);
                    headerBottomWrapper.insertAdjacentElement('beforeend', btn);
                }

                if (document.documentElement.clientWidth <= 789) {
                    header.insertAdjacentElement('afterbegin', topHead);
                    topHead.insertAdjacentElement('beforeend', phone);
                    topHead.insertAdjacentElement('beforeend', mail);
                }
            });

            if (document.documentElement.clientWidth <= 854) {
                burger.insertAdjacentElement('afterend', menuMobile);
                logo.insertAdjacentElement('afterend', language);
                logo.insertAdjacentElement('afterend', btn);
                logo.insertAdjacentElement('afterend', mail);
                logo.insertAdjacentElement('afterend', phone);
                menuMobile.insertAdjacentElement('beforeend', menu);
            }

            if (document.documentElement.clientWidth <= 789) {
                header.insertAdjacentElement('afterbegin', topHead);
                topHead.insertAdjacentElement('beforeend', phone);
                topHead.insertAdjacentElement('beforeend', mail);
            }
        }
    }

    burgerClick();



    //============================================================================================



    // Menu click


    function clickMenu() {
        const menuLi = document.querySelectorAll('.bottom-menu-header__nav ul li');
        if (menuLi.length > 0) {
            for (let index = 0; index < menuLi.length; index++) {
                const element = menuLi[index];
                element.addEventListener('click', (e) => {
                    if (!e.target.closest('.bottom-menu-header__second')) {
                        element.classList.toggle('_active');
                    }
                });
            }
        }
    }

    clickMenu();


    //=====================================================================================================



    // Number Index

    function numberIndex(selectorItem, stop = false) {
        const numberItem = document.querySelectorAll(selectorItem);

        if (numberItem.length > 0) {
            if (stop === false) {
                for (let index = 0; index < numberItem.length; index++) {
                    const element = numberItem[index];
                    const dataNum = Number(element.dataset.number);
                    const dataNumProcent = Math.round(dataNum * 0.75);
                    let i = dataNumProcent;
                    console.log(dataNumProcent);

                    let timer = setInterval(() => {
                        if (i <= dataNum) {
                            element.textContent = i++;
                        }
                        if (i === (dataNum + 1)) {
                            clearInterval(timer);
                        }
                    }, 0.1);
                }
            }
        }
    }

    function animatedNumbersIndex() {
        const realize = document.querySelector('.in-numbers-main');

        if (realize) {
            const elementPositionRealize = realize.offsetTop;
            const windowHeight = document.documentElement.clientHeight;
            let number = windowHeight / 100 * 20;

            window.addEventListener('scroll', () => {

                if (window.pageYOffset + number >= elementPositionRealize) {
                    if (!realize.classList.contains('_stop')) {
                        numberIndex('.in-numbers-main__number span');
                    }
                    realize.classList.add('_stop');
                } else {
                    realize.classList.remove('_stop');
                }
            });
        }
    }

    animatedNumbersIndex();

    //===============================================================================================================




    //Header Fixed

    function headerFixed() {
        let lastScroll = 0;
        const defaulScroll = 400;
        const header = document.querySelector('.header');

        window.addEventListener('scroll', (e) => {
            if (document.documentElement.clientWidth >= 854) {
                if (window.pageYOffset > lastScroll) {
                    header.classList.remove('_fixed');
                } else {
                    if (window.pageYOffset >= defaulScroll) {
                        header.classList.add('_fixed');
                    } else {
                        header.classList.remove('_fixed');
                    }
                }
                lastScroll = window.pageYOffset;
            }
        });

        window.addEventListener('resize', () => {
            if (document.documentElement.clientWidth <= 854) {
                header.classList.remove('_fixed');
            }
        });
    }

    headerFixed();


    //==================================================================================================



    // Linck Header Services preventDefault

    function servicesLinkPreventDefault() {
        const links = document.querySelectorAll('.bottom-menu-header__second');

        for (let index = 0; index < links.length; index++) {
            const link = links[index];
            link.previousElementSibling.addEventListener('click', (e) => {
                e.preventDefault();
            });
            // window.addEventListener('resize', () => {
            //     link.previousElementSibling.addEventListener('click', (e) => {
            //         e.preventDefault();
            //     });
            // });
        }
    }

    servicesLinkPreventDefault();

    //================================================================================================



    // Click arrow dowm


    function clickArrowDown() {
        const arrow = document.querySelector('.offer-main__arrowdown-around');
        const nextElement = document.querySelector('.about-us-main');

        if (arrow) {
            arrow.addEventListener('click', () => {
                const position = nextElement.getBoundingClientRect().top;
                window.scrollBy({
                    top: position,
                    behavior: "smooth",
                });
            });
        }
    }

    clickArrowDown();

    //====================================================================================================



    // Modal

    function modalShow() {
        const modal = document.querySelector('.modal');
        const modalBtn = document.querySelectorAll('[data-modal-callback]');
        const closeBtn = document.querySelectorAll('.modal__close');
        const body = document.body;

        for (let index = 0; index < closeBtn.length; index++) {
            const element = closeBtn[index];
            element.addEventListener('click', () => {
                if (element.closest('.modal')) {
                    if (element.closest('.modal').classList.contains('_active')) {
                        element.closest('.modal').classList.remove('_active');
                        body.classList.remove('_active');
                    }
                }
            });
        }

        for (let index = 0; index < modalBtn.length; index++) {
            const element = modalBtn[index];

            element.addEventListener('click', (e) => {
                e.preventDefault();
                modal.classList.add('_active');
                body.classList.add('_active');
            });
        }
    }

    modalShow();


    //=========================================================================================================




    // services tab

    function clickTabHidden(tab, content) {
        for (let index = 0; index < tab.length; index++) {
            const element = tab[index];
            element.classList.remove('_active');
            content[index].classList.remove('_active');
        }
    }

    function clickTab() {
        const tab = document.querySelectorAll('.body-content-services-single__tab');
        const content = document.querySelectorAll('.body-content-services-single__tabs-item');

        if (tab.length > 0) {
            tab[0].classList.add('_active');
            content[0].classList.add('_active');

            for (let index = 0; index < tab.length; index++) {
                const element = tab[index];
                element.addEventListener('click', () => {
                    clickTabHidden(tab, content);
                    element.classList.add('_active');
                    content[index].classList.add('_active');
                });
            }
        }
    }

    clickTab();

    //========================================================================================================







});