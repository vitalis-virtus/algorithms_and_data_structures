const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let count = 0; //number of iterations

// binary search without recursion
function binarySearch(array, item) {
  let start = 0; //index of first element in array
  let end = array.length; //index of last element in array
  let middle; // index of middle element in array
  let found = false; // flag
  let position = -1; //position of searched element
  while (found === false && start <= end) {
    count += 1;
    middle = Math.floor((start + end) / 2);
    if (array[middle] === item) {
      found = true;
      position = middle;
      return position;
    }
    if (item < array[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
  }
  return position;
}

function binarySearchRecursive(array, item, start, end) {
  let middle = Math.floor((start + end) / 2); //index of middle element in array
  count += 1;
  if (item === array[middle]) {
    return middle;
  }
  if (item < array[middle]) {
    return binarySearchRecursive(array, item, start, middle - 1);
  } else {
    return binarySearchRecursive(array, item, middle + 1, end);
  }
}

console.log(binarySearch(array, 7));
console.log("number of iterations in binarySearch: ", binarySearch(array, 7));

console.log(binarySearchRecursive(array, 7, 0, array.length));
console.log("Number of iterations in binarySearchRecursive: ", count);
