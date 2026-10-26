function topKFrequent(nums: number[], k: number): number[] {
    const memo = new Map();

    for (const num of nums) {
        memo.set(num, (memo.get(num) || 0) + 1);
    }

    const sorted = [...memo.entries()].sort((a,b)=> b[1]-a[1]);
    return sorted.slice(0, k).map((item=>item[0]))


};

