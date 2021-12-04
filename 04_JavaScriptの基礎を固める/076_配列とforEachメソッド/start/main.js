const arry = [1, 2, 3, 4, 5];

// arry.forEach(function (val, i, ary) {
//   console.log(val, i, ary);
// });

arry.forEach(val => console.log(val));

for (let i = 0; i < arry.length; i++) {
  const v = arry[i];
  console.log(v);
}