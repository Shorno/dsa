function longestConsecutive(nums: number[]): number {
    if (nums.length === 0) return 0;

    nums.sort((a, b) => a - b);

    let currentCount = 1;
    let maxCount = 1;

    for (let i = 1; i < nums.length; i++) {
        // Skip duplicates
        if (nums[i] === nums[i - 1]) {
            continue;
        }

        // Consecutive number
        if (nums[i] === nums[i - 1]! + 1) {
            currentCount++;
        } else {
            // Sequence broke
            currentCount = 1;
        }

        maxCount = Math.max(maxCount, currentCount);
    }

    return maxCount;
}