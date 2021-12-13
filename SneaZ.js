
for (let i = 0; i < 10; i++) {
  console.log('Hello');
}


// function hello(name, age) {
//     // let name = 'Code Mafia';
//     console.log('hello ' + name + age);
//     return name + age;
// }
// hello('Code Mafia', 10);
// const returnVal = hello('Code Mafia 2', 20);
// console.log(returnVal);

// function hello(a, b) {
//   console.log(a + b);
//   console.log(a - b);
//   console.log(a * b);
// }
// hello(2, 10);


// function abc(a,b){
//   let x = (a + b);
//   let y = (a - b);
//   let z = (a * b);
//   return x;
// }

// let a = 2;
// let b = 2;


// var xx = hello;
// if( xx % 2 == 0 ){
// document.write( "数値 " + xx + "は、偶数です。");
// } else {
// document.write( "数値 " + xx + "は、奇数です。");
// }


// function greeting(a,b) {
//   return a + b;
//   return a - b;
//   return a * b;
// }
// console.log(greeting(2,2));

// 引数が偶数かどうかを判定する関数
function isEven(number){
  let r = ((number % 2) == 0);
  return r;
}

// isEven関数を呼び出す
let number = 12;
document.write(`<p>number=${number} ${isEven(number)}</p>`);