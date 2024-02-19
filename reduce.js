// map()

//---Using for loop---
[1, 2, 3, 4, 5, 6].map((num) => num * 2);

function map(fn, arr) {
  var arr1 = [];
  for (var num in arr) {
    arr1[num] = fn(arr[num], num);
  }
  return arr1;
}
map((x, i) => x * 2 * i, [1, 2, 3, 4, 5, 6]);

//---using Reduce---
function map(arr, double) {
  return arr.reduce(function (acc, curr) {
    acc.push(double(curr));
    return acc;
  }, []);
}

const arr = [1, 2, 3, 4, 5];

function double(val) {
  return val * 2;
}

const newArr = map(arr, double);

console.log(newArr);

//filter()

function customFilter(arr, check) {
  return arr.reduce((acc, curr) => {
    if (check(curr)) {
      acc.push(curr);
    }
    return acc;
  }, []);
}

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNum = customFilter(num, (num) => num % 2 === 0);

console.log(evenNum);
