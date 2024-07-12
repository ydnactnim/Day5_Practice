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
