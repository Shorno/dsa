export default function tribu(n: number) {
  return innerTribu(n);
}

function innerTribu(n: number, memo = new Map<number, number>()): number {
  if (memo.has(n)) return memo.get(n)!;

  if (n === 0) return 0;
  if (n === 1) return 0;
  if (n === 2) return 1;

  const value = innerTribu(n - 1, memo) + innerTribu(n - 2, memo) + innerTribu(n - 3, memo);
  memo.set(n, value);

  return value;
}