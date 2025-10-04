const arrayEx = [1, 2, 3, 4, 5, 11, 1, 5];
const left = 3;
const right = 6;

function prefixSumUpdated(arr) {
  let copy = new Array(arr.length + 1);
  copy[0] = arr[1];
  for (let i = 1; i < arr.length + 1; i++) {
    copy[i] = copy[i - 1] + arr[i - 1];
  }
  return copy;
}

function rangeSum(left, right, arr) {
  if (right + 1 > arr.length) right = arr.length;
  const copy = prefixSumUpdated(arr);
  // sum for left - right will be copy[right] - copy[left-1] but since we added one 0 at the beginning to avoid the issue where left =0=> right+1 - left
  return copy[right + 1] - copy[left];
}

console.log(rangeSum(left, right, arrayEx));

var isPalindrome = function (s) {
  const cleanedString = s.replace(/[^a-z0-9]/gi, "");
  const cleanedArray = cleanedString.toLowerCase().split("");
  const reversedArray = [...cleanedArray].reverse();

  let isPalindrome = true;
  for (let i = 0; i < cleanedArray.length; i++) {
    if (cleanedArray[i] !== reversedArray[i]) {
      isPalindrome = false;
    }
  }
  return isPalindrome;
};

console.log(isPalindrome("am i?"));
