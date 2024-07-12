// const arr = [];

// for (let i = 0; i < 100; i++) {
//   arr[i] = Math.ceil(Math.random() * 100);
// }

// for (let element of arr) {
//   console.log(element);
// }

// arr.forEach((element) => {
//   console.log(element);
// });

// const obj = { a: "apple", b: "banana", c: "cake", d: "dish", e: "eraser" };

// for (let element in obj) {
//   console.log(element);
//   console.log(obj[element]);
// }

// for (let key of Object.keys(obj)) {
//   console.log(obj[key]);
// }

// const salaries = { John: 100, Ann: 160, Pete: 130 };
// let salarySum = 0;

// for (let name in salaries) {
//   salarySum += salaries[name];
// }

// console.log(salarySum);

// const drinkPriceObj = {
//   아메리카노: 3500,
//   에스프레소더블: 3500,
//   카페라떼: 4500,
//   카푸치노: 4500,
//   바닐라라떼: 4900,
//   돌체라떼: 4900,
//   카페모카: 4900,
//   카라멜마끼아또: 4900,
//   두유라떼: 4900,
//   바닐라오트라떼: 5900,
// };

// Object.keys(drinkPriceObj).forEach((menu) => {
//   if (drinkPriceObj[menu] <= 5000) drinkPriceObj[menu] += 500;
// });

// for (let menu in drinkPriceObj) {
//   console.log(`${menu} : ${drinkPriceObj[menu]}`);
// }

function sayYaho() {
  console.log("야호");
}

function plusOne(num) {
  return num + 1;
}

function plus(num1, num2) {
  return num1 + num2;
}

function minNum(num1, num2) {
  return num1 > num2 ? num2 : num1;
}

sayYaho();
console.log(plusOne(12));
console.log(plus(3, 4));
console.log(minNum(13, 5));
