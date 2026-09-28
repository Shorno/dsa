function isPalindrome(s: string): boolean {
    s = s.toLowerCase();

    let clean = "";

    for(let char of s){
        if(isAlphaNumeric(char)){
            clean += char;
        }
    }

    let left = 0;
    let right = clean.length - 1;


    while (left< right){
        if (clean[left] !== clean[right]){
            return false;
        }

        left++;
        right--;
    }
    return true;

};



function isAlphaNumeric(char:string){
    const code = char.charCodeAt(0);
    const isLower = code >= 97 && code <= 122;
    const isNum = code >=48 && code <= 57

    return isLower || isNum;
}



const result = isPalindrome("A man, a plan, a canal: Panama")
console.log(result)
