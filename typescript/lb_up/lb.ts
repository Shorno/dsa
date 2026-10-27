/*
Index:   0  1  2  3  4  5
nums:   [1, 2, 2, 2, 4, 7]
target: 2
*/


function lower_bound(nums: number[], target: number): number {


  let left = 0;
  let right = nums.length;

  while (left < right) {
    const mid = left + Math.floor((right - left) / 2);
    if (nums[mid]! < target) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return left;

}


console.log(lower_bound([1, 2, 2, 2, 4, 7], 2)); // Expected: 1
console.log(lower_bound([1, 2, 2, 2, 4, 7], 3)); // Expected: 4
console.log(lower_bound([1, 2, 2, 2, 4, 7], 9)); // Expected: 6
console.log(lower_bound([], 5));                  // Expected: 0
