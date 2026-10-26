



function mergeSort(arr: number[]): number[]{

    if(arr.length <= 1) return  arr;

    let mid= Math.floor((arr.length/2));
    let left= mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));

    return merge(left, right)

}

function merge(left: number[], right:number[]):number[]{
    let leftIndex = 0;
    let rightIndex =0;
    let temp:number[] = [];


    while(leftIndex<left.length && rightIndex<right.length){
        if(left[leftIndex]!<right[rightIndex]!){
            temp.push(left[leftIndex]!);
            leftIndex++;
        } else {
            temp.push(right[rightIndex]!);
            rightIndex++;
        }
    }
    while(leftIndex<left.length){
        temp.push(left[leftIndex]!);
        leftIndex++;
    }
    while(rightIndex<right.length){
        temp.push(right[rightIndex]!);
        rightIndex++;
    }
    return temp;
}

const arr = [10, 5, 6, 4, 25, 15, 2, 7];


const res= mergeSort(arr)

console.log(res)
