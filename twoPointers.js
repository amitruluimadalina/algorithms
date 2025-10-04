// we say pointers but we mean indices => one at the beggining and the other at the end and they meet at the middle
//while l point < r point, build the array

function sortedSquares(nums) {
  let left = 0;
  let right = nums.length - 1;
  let sortedSquares = new Array();
  while (left <= right) {
    if (nums[left] ** 2 < nums[right] ** 2) {
      sortedSquares.push(nums[right] ** 2);
      //move to the center
      right--;
    } else {
      sortedSquares.push(nums[left] ** 2);
      //move to the center
      left++;
    }
  }

  //reverse with 2 points
  let reverseLeft = 0;
  let reverseRight = sortedSquares.length - 1;
  let reversedSortedArray = new Array();
  while (reverseLeft <= reverseRight) {
    if (sortedSquares[reverseLeft] < sortedSquares[reverseRight]) {
      reversedSortedArray.push(sortedSquares[reverseLeft]);
      reverseLeft++;
    } else {
      reversedSortedArray.push(sortedSquares[reverseRight]);
      reverseRight--;
    }
  }

  return reversedSortedArray;
}

console.log(sortedSquares([-1, 0, 3, 5]));

var isPalindrome = function (s) {
  let left = 0;
  const cleanString = s.replace(/[^a-z0-9]/gi, "");
  const cleanArray = cleanString.toLowerCase().split("");
  let right = cleanArray.length - 1;
  while (left <= right) {
    if (cleanArray[left] !== cleanArray[right]) {
      return false;
    }
    right--;
    left++;
  }

  return true;
};

console.log(isPalindrome("P0"));
