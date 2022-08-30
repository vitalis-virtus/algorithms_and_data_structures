const array = [1, 5, 1, 3, 53, 34, 3, 6, 8, 3, 10];

let count = 0; //NUMBER OF ITERATIONS
function linearSearch(array, item) {
  for (let arrayItem of array) {
    count += 1;
    if (arrayItem === item) {
      return array.indexOf(item);
    }
  }
  return "No such item in the array";
}

const item = 5;

console.log(`Index of '${item}': `, linearSearch(array, item));
console.log("Number of iterations: ", count);
