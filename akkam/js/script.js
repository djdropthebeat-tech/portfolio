$(function () {

    // 처음에는 모든 sub 숨김
    $('.sub').hide();
    $('.sub-wrap').hide();

    $('.main-menu').mouseenter(function () {
        const target = $(this).data('target');

        if (!target) {
            // SHOP, ARCHIVE 아닌 메뉴에 올라가면 서브 닫기
            $('.sub-wrap').stop().slideUp();
            return;
        }

        // 서브랩이 닫혀있으면 슬라이드 다운(애니메이션 1번만 발생)
        if (!$('.sub-wrap').is(':visible')) {
            $('.sub-wrap').stop().slideDown();
        }

        // 모든 sub 숨기고 필요한 sub만 표시
        $('.sub').hide();
        $('.' + target).show();
    });

    // 메뉴 영역 벗어나면 서브 전체 닫기
    $('header').mouseleave(function () {
        $('.sub-wrap').stop().slideUp();
    });
});

$(function(){
    $('.main2').mouseenter(function(){
        $('.sub2').stop().slideDown();
    });
    $('.gnb').mouseleave(function(){
        $('.sub2').stop().slideUp();
    });
});


$(function(){
  var visual = $('.slide');
  var current = 0;
  var total = visual.length;

  function move(i){
    if(current == i) return;

    var cu = visual.eq(current);
    var ne = visual.eq(i);

    cu.css('left','0').stop().animate({'left':'-100%'},900);
    ne.css('left','100%').stop().animate({'left':'0%'},900);

    current = i;
  }

  // 자동 슬라이드
  setInterval(function(){
    var next = (current + 1) % total; // 다음 슬라이드 인덱스
    move(next);
  }, 5000); // 3초마다 슬라이드
});


$(function () {

    /*** PC: Hover 메뉴 ***/
    $('.main-menu').mouseenter(function () {
        if (window.innerWidth <= 768) return; // 모바일에서는 작동 금지

        const target = $(this).data('target');

        if (!target) {
            $('.sub-wrap').stop().slideUp();
            return;
        }

        $('.sub').hide();
        $('.sub-' + target).show();
        $('.sub-wrap').stop().slideDown();
    });

    $('header').mouseleave(function () {
        if (window.innerWidth <= 768) return;
        $('.sub-wrap').stop().slideUp();
    });


    /*** 모바일: 햄버거 메뉴 ***/
    $('.mobile-nav').on('click', function () {
        $(this).toggleClass('active');
        $('.gnb').toggleClass('active');
        $('.sub-wrap').removeClass('active').hide(); // 모바일에서 메뉴 열릴 때 서브는 초기화
    });


    /*** 모바일: SHOP, ARCHIVE 클릭 시 서브메뉴 열기 ***/
    $('.main-menu').on('click', function (e) {
        if (window.innerWidth > 768) return; // PC에서는 클릭 동작 차단

        e.preventDefault();

        const target = $(this).data('target');
        if (!target) return;

        $('.sub').hide();
        $('.sub-' + target).show();

        $('.sub-wrap').toggleClass('active').toggle();
    });

});

