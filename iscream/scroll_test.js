// JavaScript Documentdocument.addEventListener('DOMContentLoaded', () => {
    const boxes = document.querySelectorAll('.box');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                entry.target.classList.remove('hidden');
            }
        });
    }, {
        threshold: 0.5 // 50%가 화면에 보일 때 작동
    });

    boxes.forEach(box => {
        observer.observe(box);
    });
});
