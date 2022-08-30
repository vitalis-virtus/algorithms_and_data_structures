const array = [
  1, 5, 1, 4, 6, 87, 4, 6, 2, 5, 2, 4, 6, 8, 5, 5, 55, 2, 34, 5, 56, 67, 65, 6,
  53, 5, 54, 6, 78,
];

let count = 0; //number of iterations

function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let indexMin = i; // index of min item. At start of loop it's 0
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[indexMin]) {
        indexMin = j;
      }
      count += 1;
    }

    //we swap elements array[i] and array[indexMin]
    let temp = array[i];
    array[i] = array[indexMin];
    array[indexMin] = temp;
  }
  return array;
}

console.log(selectionSort(array));
console.log("Number of iterations: ", count);
