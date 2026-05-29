function factorial(n: number): number {
    if (n < 1) return 1;
    return factorial(n - 1) * n;
}

const result = factorial(100);
console.log(result);
