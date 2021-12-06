const btn = document.querySelector('#btn');
const h1 = document.querySelector('h1');

function changeColor() {
  h1.style.color = 'red';
  // h1.style.color = 'red';
  // console.log(this);
  // alert('hello');
}
function changeBgColor() {
  h1.style.backgroundColor = 'green';
}
// btn.addEventListener('click', changeColor);
// btn.addEventListener('click', changeBgColor);

// btn.onclick = changeColor;
// btn.onclick = changeBgColor;

// btn.removeEventListener('click', hello);
// btn.addEventListener('mouseenter', hello);