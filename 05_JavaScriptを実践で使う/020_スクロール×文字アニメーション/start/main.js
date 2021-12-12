document.addEventListener('DOMContentLoaded', function () {
    
    const cb = function (el, isIntersecting) {
        if (isIntersecting) {
            const ta = new TextAnimation(el);
            ta.animate();
        }
    }

    const so = new ScrollObserver('.animate-title', cb);

    // text-animation.jsに以下のコードをカット＆ペースト
    // してファイル分割をしましょう。
    
    // const cb = function (entries, observer) {
    //     entries.forEach(entry => {
    //         if (entry.isIntersecting) {
    //             // const ta = new TextAnimation(entry.target);
    //             // ta.animate();
    //             observer.unobserve(entry.target);
    //             // console.log('inview');
    //             // entry.target.classList.add('inview');
    //             // observer.unobserve(entry.target);
    //         } else {
    //             // console.log('out view');
    //             entry.target.classList.remove('inview');
    //         }
    //     });
    //     // alert('intersecting');
    // }
    
    
});

class ScrollObserver{
    constructor(els, cb, options) {
        this.els = document.querySelectorAll(els);
        const defaultOptions = {
            root: null,
            rootMargin: "0px",
            threshold: 0
        };
        this.cb = cb;
        this.options = Object.assign(defaultOptions, options);
        this._init();
    }
    _init() {
        const callback = function (entries, observer) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {

                    this.cb(entry.target, true);
                    observer.unobserve(entry.target);
                } else {
                    this.cb(entry.target, false);
                }
            });
        };
        const io = new IntersectionObserver(callback.bind(this), this.options);
        this.els.forEach(el => io.observe(el));
    }
}

