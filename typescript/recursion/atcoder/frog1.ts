const tokens = (await Bun.stdin.text()).trim().split(/\s+/);
const N = parseInt(tokens[0]!);
const h = tokens.slice(1, N + 1).map(Number);

console.log(N)