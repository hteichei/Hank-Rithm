// ES5:
// var name = 'Michael';
// var favoriteColor = 'purple';
// var city = 'San Francisco';

// console.log(
//   name +
//     ' lives in ' +
//     city +
//     ' and his favorite color is ' +
//     favoriteColor +
//     '.'
// );

// ES6:
const name = 'Michael';
const favoriteColor = 'purple';
const city = 'San Francisco';

console.log(
  `${name} lives in ${city} and his favorite color is ${favoriteColor}.`
);



// ES5:
// var PI = 3.14;
// PI = 42; // stop me from doing this!

// ES6:
const PI = 3.14;



// ES5: 
// var obj = {
//   numbers: {
//     a: 1,
//     b: 2
//   }
// };

// var a = obj.numbers.a;
// var b = obj.numbers.b;

// ES6: 
let { a, b } = obj.numbers;



// ES5: 
// var arr = [1, 2];
// var temp = arr[0];
// arr[0] = arr[1];
// arr[1] = temp;

// ES6: 
let arr = [1, 2];
[arr[1], arr[0]] = [arr[0], arr[1]];



// ES5:
// function double(arr) {
//   return arr.map(function (val) {
//     return val * 2;
//   });
// }

// ES6:
function double(arr) {
  return arr.map(val => val * 2);
}



// ES5:
// function add(a, b) {
//   if (a === 0) {
//     a = 0;
//   } else {
//     a = a || 10;
//   }
//   if (b === 0) {
//     b = 0;
//   } else {
//     b = b || 10;
//   }
//   return a + b;
// }

// ES6:
function add(a = 10, b = 10);



// ES5: 
// function sumMany() {
//   var nums = Array.prototype.slice.call(arguments);
//   return nums.reduce(function(a, b) {
//     return a + b;
//   }, 0);
// }

ES6:
function sumMany(...numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}