
const child = document.querySelector('.child');
const cb = function (entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      console.log('inview');
      observer.unobserve(entry.target);
    } else {
      console.log('out view');
    }
  });
  // alert('intersecting');
}

const io = new IntersectionObserver(cb);
io.observe(child);