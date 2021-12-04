const num = null;
const bool = Boolean(num);
console.log(bool);

if (!num) {
  console.log('this is true');
} else {
  console.log('this is false');
}