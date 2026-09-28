function twoSum(nums: number[], target: number): number[] {
    const map = new Map();


    for(let i = 0; i < nums.length; i++) {
        const needed = target - nums[i]!;

        if(map.has(needed)){
            return [map.get(needed),i];
        }
        map.set(nums[i], i);

    }
    return  [];

};

const result = twoSum([2,7,11,15], 9)
console.log(result)