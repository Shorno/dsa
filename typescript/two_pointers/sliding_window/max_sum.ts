function max_subarray_sum_size_k(nums: number[], k: number): number {
  let max_sum = -Infinity;
  let current_sum = 0;

  for (let i = 0; i <= nums.length; i++) {
    if (i < k) {
      current_sum += nums[i]!;
    } else {
      current_sum -= nums[i - k]!;
      current_sum += nums[i]!;
    }

    if (current_sum > max_sum) {
      max_sum = current_sum;
    }
  }

  return max_sum;
}
const result = max_subarray_sum_size_k([4, 2, 1, -9, 8, 4, 3], 3);
console.log(result);
