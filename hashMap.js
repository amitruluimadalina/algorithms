class Pair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
  }
}

class HashMap {
  constructor() {
    this.size = 0;
    this.capacity = 2;
    this.map = new Array(null, null);
  }
  //key => hash(sum of all chars transformed)%length => index
  hash(key) {
    //sum all integers
    let index = 0;
    for (let char in key) {
      //.charCodeAt method of String values returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index
      index += char.charCodeAt(0);
    }
    //mod by capacity (length)
    return index % this.capacity;
  }

  get(key) {
    //find index by hash
    let index = hash(key);
    // if index is in position, get value
    while (this.map[index] !== null) {
      if (this.map[index].key === key) return this.map[index].value;
      //open addressing, find a collision, try next
      index++;
      // in case we are out of bounds, mod by capacity to stay inside the array
      index = index % this.capacity;
    }
    return null;
  }

  put(key, value) {
    // find a index, hash first, check to see if the specified index is empty => insert/ look for next available index
    let index = hash(key);
    if (this.map[index] === null) {
      this.map[index] = new Pair(key, value);
      this.size++;
      //if size > capacity/2 => double it (rehash)
      if (this.size >= this.capacity / 2) rehash();
      return;
      //key exists=> update value
    } else if (this.map[index].key === key) {
      this.map[index].value === value;
      return;
    }
    // if no return=> next index
    index++;
    index = index % this.capacity;
  }

  rehash() {
    this.capacity = this.capacity * 2; // or find next number
    let copy = this.map;
    this.map = new Array(size).fill(null);
    this.size = 0;
    for (let pair in copy) {
      if (pair !== null) {
        this.put(pair.key, pair.value);
      }
    }
  }
}

const hashMap = new HashMap();

var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  const charCodeOfFirstLetter = "a".charCodeAt(0);

  const first = {};
  const second = {};

  for (let i = 0; i < s.length; i++) {
    const firstArrayKey = s[i].charCodeAt(0) - charCodeOfFirstLetter;
    const secondArrayKey =
      t[t.length - i - 1].charCodeAt(0) - charCodeOfFirstLetter;
    if (first[firstArrayKey]) {
      first[firstArrayKey]++;
    } else {
      first[firstArrayKey] = 1;
    }

    if (second[secondArrayKey]) {
      second[secondArrayKey]++;
    } else {
      second[secondArrayKey] = 1;
    }
  }

  return JSON.stringify(first) === JSON.stringify(second);
};

console.log(isAnagram("anagramsdss", "nagaram"));

var containsDuplicate = function (nums) {
  const counterMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (counterMap.has(nums[i])) {
      return true;
    } else {
      counterMap.set(nums[i], 1);
    }
  }
  return false;
};

console.log(containsDuplicate([1, 2, 3, 3]));

var twoSum = function (nums, target) {
  const sumMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (sumMap.has(target - nums[i])) {
      return [sumMap.get(target - nums[i]), i];
    }
    sumMap.set(nums[i], i);
  }
  return [];
};
console.log(twoSum([3, 3, 6], 9));

function isAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;

  const first = {};
  const second = {};

  for (let i = 0; i < str1.length; i++) {
    if (first[str1[i]]) {
      first[str1[i]]++;
    } else {
      first[str1[i]] = 1;
    }

    if (second[str2[str1.length - i - 1]]) {
      second[str2[str1.length - i - 1]]++;
    } else {
      second[str2[str1.length - i - 1]] = 1;
    }
  }
  const isAnagram = JSON.stringify(first) === JSON.stringify(second);

  return isAnagram;
}

var groupAnagrams = function (strs) {
  const anagrams = {};

  for (let i = 0; i < strs.length; i++) {
    const existing = Object.keys(anagrams);
    let isAnagramBool = false;
    for (let j = 0; j < existing.length; j++) {
      if (isAnagram(strs[i], existing[j])) {
        anagrams[existing[j]].push(strs[i]);
        isAnagramBool = true;
      }
    }

    if (!isAnagramBool) anagrams[strs[i]] = [strs[i]];
  }
  const groups = Object.values(anagrams);
  return groups.sort((a, b) => a.length - b.length);
};
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
