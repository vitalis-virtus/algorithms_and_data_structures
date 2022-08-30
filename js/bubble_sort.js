const array = [
  1, 5, 1, 4, 6, 87, 4, 6, 2, 5, 2, 4, 6, 8, 5, 5, 55, 2, 34, 5, 56, 67, 65, 6,
  53, 5, 54, 6, 78,
];
let count = 0; //number of iterations

function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[j + 1] < array[j]) {
        //we swap elements array[i] and array[j+1]
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
      count += 1;
    }
  }
  return array;
}

console.log(bubbleSort(array));
console.log("Number of iterations: ", count);
