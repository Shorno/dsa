function checkSum(number: number, num_arr: number[], memo: Record<number, boolean>= {}) {

    if (number in memo) return memo[number];
    if (number < 0) return false;
    if(number === 0 ) return true;

    for (const num of num_arr){
        const remaining = number - num;


        if(checkSum(remaining, num_arr, memo)){
            memo[number] = true;
            return  true;
        }
    }

    memo[number] = false;
    return false;

}

const res = checkSum(50, [3,3,3])
console.log(res)