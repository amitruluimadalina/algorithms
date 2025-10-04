// useful for situations where there are common elements and just the element hat enters the window and the number that gets out of the window are changing
// ex: find the biggest sum for k numbers from an array=> calculate the first k numbers sum and on each iteration addthe next number and subtract the one that got out

//defined no of items
function findBiggestSum(arr, k) {
  let currentSum = 0;
  for (i = 0; i < k; i++) {
    currentSum = currentSum + arr[i];
  }
  let biggestSum = currentSum;

  for (let i = k; i < arr.length; i++) {
    currentSum = currentSum + arr[i] - arr[i - k];
    if (biggestSum < currentSum) {
      biggestSum = currentSum;
    }
  }
  return biggestSum;
}

console.log(findBiggestSum([1, 3, 4, 5, 9, 99, 9, 9], 3));

//dynamic sized

function findLongestArrayLength(arr, sum) {
  let left = -1;
  let currentSum = 0;
  let longest = 0;
  for (let i = 0; i < arr.length; i++) {
    currentSum += arr[i];
    while (currentSum >= sum) {
      left++;
      currentSum = currentSum - arr[left];
    }
    if (longest < i - 1) {
      longest = i - 1;
    }
  }
  return longest;
}

var maxProfit = function (prices) {
  let maxProfit = 0;
  let lowestPrice = prices[0];

  for (let i = 0; i < prices.length; i++) {
    if (lowestPrice > prices[i]) {
      lowestPrice = prices[i];
    }
    if (prices[i] - lowestPrice > maxProfit) {
      maxProfit = prices[i] - lowestPrice;
    }
  }
  return maxProfit;
};

//look for the smallest input first and then the biggest number after

console.log(maxProfit([7, 1, 5, 3, 6, 4]));

var lengthOfLongestSubstring = function (s) {
  let longest = 0;
  let left = 0;
  let chars = new Map();
  for (let i = 0; i < s.length; i++) {
    while (chars.has(s[i].charCodeAt(0))) {
      chars.delete(s[left].charCodeAt(0));
      left++;
    }
    if (longest < i - left + 1) {
      longest = i - left + 1;
    }
    chars.set(s[i].charCodeAt(0), i);
  }
  return longest;
};

console.log(lengthOfLongestSubstring("shdsdjs"));
