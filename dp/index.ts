function checkSum(number: number, num_arr: number[]) {

    if (number < 0) return false;
    if(number === 0 ) return true;

    for (const num of num_arr){
        const remaning = number - num;


        if(checkSum(remaning, num_arr) === true) return true;
    }

    return false;

}


const res = checkSum(8, [3, 6, 7])
