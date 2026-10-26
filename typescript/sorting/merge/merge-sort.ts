function mergeSort(arr: number[]): number[] {
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

function merge(left: number[], right: number[]): number[] {
  let leftIndex = 0;
  let rightIndex = 0;

  const temp: number[] = [];

  while (leftIndex < left.length && rightIndex < right.length) {
    const leftValue = left[leftIndex]!;
    const rightValue = right[rightIndex]!;

    if (leftValue <= rightValue) {
      temp.push(leftValue);
      leftIndex++;
    } else {
      temp.push(rightValue);
      rightIndex++;
    }
  }

  while (leftIndex < left.length) {
    temp.push(left[leftIndex]!);
    leftIndex++;
  }

  while (rightIndex < right.length) {
    temp.push(right[rightIndex]!);
    rightIndex++;
  }

  return temp;
}



const arr = [10, 5, 6, 4, 25, 15, 2, 7];

console.log(mergeSort(arr));
