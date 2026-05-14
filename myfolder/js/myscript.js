// myscript.js - Swiper 슬라이더 초기화 및 재생/정지 토글 기능
(function() {
  'use strict';

  // DOM 준비 상태 확인 및 초기화 함수
  function initSwiper() {
    // Swiper 인스턴스 생성 및 설정
    const swiper1 = new Swiper('.swiper1', {
      // 기본 설정: 수평 방향, 무한 루프, 가운데 정렬, 3개 슬라이드 표시
      direction: 'horizontal',
      loop: true,
      centeredSlides: true,
      slidesPerView: 3,
      spaceBetween: 20,

      // 자동 재생 설정: 2초 간격, 사용자 상호작용 후에도 계속 재생
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },

      // 페이지네이션 설정: 프로그레스바 타입, 클릭 가능
      pagination: {
        el: '.swiper-pagination',
        type: 'progressbar',
        clickable: true,
      },

      // 네비게이션 설정: 이전/다음 버튼, 아이콘 추가 안함
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        addIcons: false,
      },
    });

    // 재생/정지 토글 버튼 이벤트 리스너 설정
    const playToggleButton = document.querySelector('.swiper-button-play-toggle');
    if (playToggleButton) {
      playToggleButton.addEventListener('click', () => {
        // 현재 재생 상태 확인 (is-pause 클래스 존재 여부)
        if (playToggleButton.classList.contains('is-pause')) {
          // 슬라이더 일시정지 및 버튼 상태 변경 (재생 아이콘 표시)
          swiper1.autoplay.stop();
          playToggleButton.classList.remove('is-pause');
          playToggleButton.classList.add('is-play');
        } else {
          // 슬라이더 재생 및 버튼 상태 변경 (정지 아이콘 표시)
          swiper1.autoplay.start();
          playToggleButton.classList.remove('is-play');
          playToggleButton.classList.add('is-pause');
        }
      });
    }
  }

  // DOM 준비 상태 확인: 로딩 중이면 DOMContentLoaded 이벤트 대기, 아니면 즉시 실행
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSwiper);
  } else {
    initSwiper();
  }
})();