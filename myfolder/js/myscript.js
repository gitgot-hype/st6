/*
  myscript.js
  - Swiper 초기화와 play/pause 토글 기능을 분리한 외부 스크립트
  - Cafe24 Smart Design 환경에서도 DOM 준비 후 안전하게 실행되도록 작성
  - jQuery에 의존하지 않는 순수 JavaScript
*/
(function(document) {
  'use strict';

  /**
   * DOM 준비 여부를 확인하고 콜백을 실행합니다.
   * Cafe24의 <!--@js(url)--> 등에서 defer 없이 로드될 때도 안전하게 동작합니다.
   * @param {Function} callback
   */
  function onReady(callback) {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', callback);
    } else {
      callback();
    }
  }

  /**
   * Swiper 인스턴스를 초기화하고 반환합니다.
   * @returns {Swiper}
   */
  function createSwiper() {
    return new Swiper('.swiper1', {
      direction: 'horizontal',
      loop: true,
      centeredSlides: true,
      slidesPerView: 3,
      spaceBetween: 20,
      pagination: {
        el: '.swiper-pagination',
        type: 'progressbar',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        addIcons: false,
      },
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
    });
  }

  /**
   * play/pause 버튼 동작을 초기화합니다.
   * @param {Swiper} swiperInstance
   */
  function setupPlayPauseToggle(swiperInstance) {
    var playToggleBtn = document.querySelector('.swiper-button-play-toggle');

    if (!playToggleBtn) {
      return;
    }

    playToggleBtn.addEventListener('click', function() {
      var isPlay = playToggleBtn.classList.contains('is-play');

      if (isPlay) {
        playToggleBtn.classList.remove('is-play');
        playToggleBtn.classList.add('is-pause');
        swiperInstance.autoplay.stop();
      } else {
        playToggleBtn.classList.remove('is-pause');
        playToggleBtn.classList.add('is-play');
        swiperInstance.autoplay.start();
      }
    });
  }

  onReady(function() {
    var swiper1 = createSwiper();
    setupPlayPauseToggle(swiper1);
  });
})(document);
