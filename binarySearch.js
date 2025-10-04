// for a sorted array, to find an element
//look for the middle element, if element on left < target => look for it in the right
//look again for the middle after splitting the array in half and compare t to target, if left element < target=> look for it in the middle;

//recursion
const arr = [1, 3, 5, 6, 8, 9];
function searchBinaryRecursion(target, start, end) {
  if (start > end) return null;
  const middle = Math.floor((start + end) / 2);
  if (arr[middle] === target) {
    return middle;
  }

  if (arr[middle] < target) {
    return searchBinaryRecursion(target, middle + 1, end);
  }

  if (arr[middle] > target) {
    return searchBinaryRecursion(target, start, middle - 1);
  }
}

// while loop

function searchBinaryLoop(target, start, end) {
  let startCopy = start;
  let endCopy = end;
  let middle = Math.floor((startCopy + endCopy) / 2);
  while (startCopy < endCopy) {
    if (arr[middle] === target) {
      return middle;
    }
    if (arr[middle] > target) {
      endCopy = middle - 1;
      break;
    }
    if (arr[middle] < target) {
      startCopy = middle + 1;
      break;
    }
  }

  return null;
}

console.log(searchBinaryLoop(5, 0, 5));

console.log(searchBinaryRecursion(5, 0, 5));

var search = function (nums, target) {
  const start = 0;
  const end = nums.length - 1;
  function searchFunc(start, end) {
    if (start > end) return -1;
    const middle = Math.floor((start + end) / 2);
    if (nums[middle] === target) {
      return middle;
    }
    if (nums[middle] > target) {
      return searchFunc(0, middle - 1);
    }
    if (nums[middle] < target) {
      return searchFunc(middle + 1, end);
    }
  }
  return searchFunc(start, end);
};

const searchFind = search([1, 2, 3, 5, 8], 7);
console.log(searchFind);

var searchMatrix = function (matrix, target) {
  let matrixFlat = matrix.flat();
  const start = 0;
  const end = matrixFlat.length - 1;
  function searchBinary(start, end) {
    if (start > end) return false;

    const middle = Math.floor((start + end) / 2);
    if (matrixFlat[middle] === target) {
      return true;
    }
    if (target > matrixFlat[middle]) {
      return searchBinary(middle + 1, end);
    }

    if (target < matrixFlat[middle]) {
      return searchBinary(0, middle - 1);
    }
  }
  return searchBinary(start, end);
};

console.log(
  searchMatrix(
    [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ],
    8
  )
);
