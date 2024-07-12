const arr = [];

for (let i = 0; i < 100; i++) {
  arr[i] = Math.ceil(Math.random() * 100);
}

for (let element of arr) {
  console.log(element);
}

arr.forEach((element) => {
  console.log(element);
});

const obj = { a: "apple", b: "banana", c: "cake", d: "dish", e: "eraser" };

for (let element in obj) {
  console.log(element);
  console.log(obj[element]);
}

for (let key of Object.keys(obj)) {
  console.log(obj[key]);
}
