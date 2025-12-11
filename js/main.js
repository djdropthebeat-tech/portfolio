// 텍스트 글자 단위 스판 생성 (ScrollReveal보다 먼저 실행)
document.addEventListener("DOMContentLoaded", () => {
    const titles = document.querySelectorAll(".intro-title");  // 여러 개 대응

    titles.forEach(title => {
        const text = title.innerText.trim();
        title.innerHTML = "";

        [...text].forEach(char => {
            const span = document.createElement("span");
            span.textContent = char === " " ? "\u00A0" : char; // 공백 유지
            span.style.display = "inline-block"; // 글자 애니메이션 가능하도록
            title.appendChild(span);
        });
    });
});


// ScrollReveal 애니메이션
document.addEventListener('DOMContentLoaded', function () {

    const sr = ScrollReveal({
        origin: 'bottom',
        distance: '60px',
        duration: 1500,
        delay: 200,
        reset: false
    });

    // 글자 하나씩 순차적으로 올라오게
    sr.reveal('.intro-title span', {
        interval: 70,
        duration:1000,
        delay: 200,
        distance: '40px',
        easing: 'ease-out'
    });

    sr.reveal('h2', {
        duration: 700,
        distance: '40px',
        delay: 100
    });

    sr.reveal('.float-txt', {
        duration: 900,
        distance: '60px',
        delay: 300
    });

    // info-section 순차 등장
    sr.reveal('.info-section', {
        interval: 300,
        duration: 1200,
        distance: '50px'
    });

    // work 목록 순차 등장
    sr.reveal('.work', {
        interval: 400,
        duration: 1500,
        distance: '80px'
    });
});

//네비게이션 페이지 이동
  $(function () {
    const sections = [".about-info", ".works", ".contact"];

    $(".nav-tab").each(function (i) {
      $(this).on("click", function () {
        const target = $(sections[i]);
        if (!target.length) return;

        $("html, body").animate(
          { scrollTop: target.offset().top },
          800 // 스크롤 속도
        );
      });
    });
  });

