const array = [
  1, 5, 1, 4, 6, 87, 4, 6, 2, 5, 2, 4, 6, 8, 5, 5, 55, 2, 34, 5, 56, 67, 65, 6,
  53, 5, 54, 6, 78,
];
let count = 0; //number of iterations

function quickSort(array) {
  //point of exit from recursion
  if (array.length <= 0) {
    return array;
  }

  let pivotIndex = Math.floor(array.length / 2); //index of pivot element
  let pivot = array[pivotIndex]; //pivot element
  let less = []; //array with values less than pivot
  let greater = []; //array with values greater than pivot
  for (let i = 0; i < array.length; i++) {
    count += 1;
    if (i === pivotIndex) {
      continue;
    }
    if (array[i] < pivot) {
      less.push(array[i]);
    } else {
      greater.push(array[i]);
    }
  }
  return [...quickSort(less), pivot, ...quickSort(greater)]; //we call quickSort function recursively for less[] and greater []
}

console.log(quickSort(array));
console.log("count :", count);
