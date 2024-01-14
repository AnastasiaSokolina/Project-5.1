window.addEventListener("DOMContentLoaded", () => {
    const resizableSwiper = (
      breakpoint,
      swiperClass,
      swiperSettings,
      callback
    ) => {
      let swiper;
  
      breakpoint = window.matchMedia(breakpoint);
  
      const enableSwiper = function (className, settings) {
        swiper = new Swiper(className, settings);
  
        if (callback) {
          callback(swiper);
        }
      };
  
      const checker = function () {
        if (breakpoint.matches) {
          return enableSwiper(swiperClass, swiperSettings);
        } else {
          if (swiper !== undefined) swiper.destroy(true, true);
          return;
        }
      };
  
      breakpoint.addEventListener("change", checker);
      checker();
    };
  
    resizableSwiper("(max-width: 767px)", ".slider-1", {
      loop: false,
      spaceBetween: 16,
      slidesPerView: 1.3,
      pagination: {
        el: ".content__swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        340: {
          slidesPerView: 1.3,
        },
        360: {
           slidesPerView: 1.5 
          },
        450:{ slidesPerView: 2,},
        550:{ slidesPerView: 2.3,},
        570:{ slidesPerView: 2 },
        650:{ slidesPerView: 2.8,},
        700:{ slidesPerView: 4,}
      },
    });
  });
  
 let btn = document.querySelector('.content__brands-button');
 let swiper = document.querySelector('.swiper');
 let txt = document.querySelector('.brands-button-text');
 let expand = document.querySelector('.expand');
 let isHiden = true;

//  btn.addEventListener('click', function () { 
//     // swiper.classList.add('swiper--hidden');
//     // txt.textContent = 'Скрыть';
//     txt.innerHTML = (txt.innerHTML === 'Показать всё') ? txt.innerHTML = 'Скрыть' : txt.innerHTML = 'Показать всё' ;

//     expand.classList.add('expand-close');
//  })

 let open = () => {
  swiper.classList.add('swiper--hidden');
  txt.textContent = 'Скрыть';
  expand.classList.add('expand-close');
  isHiden = false;
 }

 let close = () => {
  swiper.classList.remove('swiper--hidden');
  txt.textContent = 'Показать всё';
  expand.classList.remove('expand-close');
  isHiden = true;
 }

 btn.addEventListener('click', () => {
  if (isHiden) {
    open ();
  } else {
    close();
  }
 })