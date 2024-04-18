// type number[] (array of numbers)
let numbers: number[] = [1, 2, 3, 4, 5];

numbers.forEach((num: number) => {
  // num.toLocaleString(); // typescript will show suggestions, based on the type
  console.log(num);
});
