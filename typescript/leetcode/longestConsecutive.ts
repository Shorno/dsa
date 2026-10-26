function longestConsecutive(nums: number[]): number {
    if (nums.length === 0) return 0;

    const set = new Set(nums);
    const sortedArr = [...set].sort((a, b) => a - b);

    let currCount = 1;
    let maxCount = 1;

    for (let i = 1; i < sortedArr.length; i++) {
        if (sortedArr[i]! - sortedArr[i - 1]! === 1) {
            currCount++;
            maxCount = Math.max(maxCount, currCount);
        } else {
            currCount = 1;
        }
    }

    return maxCount;
}

