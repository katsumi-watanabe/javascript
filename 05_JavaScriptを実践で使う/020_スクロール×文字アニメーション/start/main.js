document.addEventListener('DOMContentLoaded', function () {
    
    
    // text-animation.jsに以下のコードをカット＆ペースト
    // してファイル分割をしましょう。
    const els = document.querySelectorAll('.animate-title');
    const cb = function (entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const ta = new TextAnimation(entry.target);
                ta.animate();
                observer.unobserve(entry.target);
                // console.log('inview');
                // entry.target.classList.add('inview');
                // observer.unobserve(entry.target);
            } else {
                // console.log('out view');
                entry.target.classList.remove('inview');
            }
        });
        // alert('intersecting');
    }
    const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0
    }
    
    const io = new IntersectionObserver(cb, options);
    els.forEach(el => io.observe(el));
});