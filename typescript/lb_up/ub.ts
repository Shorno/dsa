/*
Index:   0  1  2  3  4  5
nums:   [1, 2, 2, 2, 4, 7]
target: 2
*/

function upper_bound(nums: number[], target: number): number {

  let left = 0;
  let right = nums.length;

  while (left < right) {
    const mid = left + Math.floor((right - left) / 2);

    if (nums[mid]! <= target) {
      left = mid + 1;
    } else {
      right = mid;
    }

  }

  return right;


}


console.log(upper_bound([1, 2, 2, 2, 4, 7], 2)); // Expected: 4
console.log(upper_bound([1, 2, 2, 2, 4, 7], 3)); // Expected: 4
console.log(upper_bound([1, 2, 2, 2, 4, 7], 4)); // Expected: 5
console.log(upper_bound([1, 2, 2, 2, 4, 7], 7)); // Expected: 6
console.log(upper_bound([1, 2, 2, 2, 4, 7], 0)); // Expected: 0
console.log(upper_bound([2, 2, 2], 2));          // Expected: 3
console.log(upper_bound([], 5));               // Expected: 0
