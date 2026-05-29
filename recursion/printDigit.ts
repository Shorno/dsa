function printDigit(n: number): void {
    if (n === 0) return;
    const digit = n % 10;
    printDigit(Math.floor(n/10));
    console.log(digit);
}

printDigit(56839);
