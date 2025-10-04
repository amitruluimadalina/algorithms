const arr = new Array(5).fill(1);

function prefixSum(arr) {
  let copy = new Array(arr.length);
  copy[0] = arr[0];
  for (let i = 1; i < copy.length; i++) {
    copy[i] = copy[i - 1] + arr[[i]];
  }
  return copy;
}

console.log(prefixSum(arr));
