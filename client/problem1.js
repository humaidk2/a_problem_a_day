//Given an array of integers, every element appears twice except for one. Find that single one.

//Note:
//Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?



var nonRepeatFinder = function(arr) {
  arr.sort(function(a, b) {
    return a - b;
  });
  for (var i = 1; i < arr.length - 1; i++) {
    if (arr[i - 1] !== arr[i] && arr[i] !== arr[i + 1]) {
      return arr[i];
    }
  }
}



console.assert(nonRepeatFinder([2,4,5,2,4,7,8,9,9,5,8]) === 7);
console.log(nonRepeatFinder([2,4,5,2,4,7,8,9,9,5,8]) === 7);
