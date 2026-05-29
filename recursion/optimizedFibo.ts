function OptimizedFibo(n:number, memo = new Map()): number {
    if (n<=1) return n;

    if (memo.has(n)) return  memo.get(n);

    const result = OptimizedFibo(n-1, memo)+ OptimizedFibo(n-2, memo);

    memo.set(n, result);

    return  result;


};

const OFRES = OptimizedFibo(1000);

console.log(OFRES)
