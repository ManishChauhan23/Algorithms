
//Helper function
let getDigit = (num, i) => {
    return Math.floor((Math.abs(num) / Math.pow(10, i)) % 10);
}

let digitCount = (num) => {
    if(num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num)) + 1);
}

let mostDigits = (num) => {
    let maxDigits = 0;
    for(let i = 0; i < num.length; i++) {
        maxDigits = Math.max(maxDigits, digitCount(num[i]));
    }
    return maxDigits;
}

//Main Function
function radixSort(arr) {
    let maxDigitCount = mostDigits(arr);
    for(let k = 0 ; k < maxDigitCount; k++) {
        let digitBucket = Array.from({length: 10}, () => []);
        for(let i = 0; i < arr.length; i++) {
            let digit = getDigit(arr[i], k);
            digitBucket[digit].push(arr[i]);
        }
        arr = [].concat(...digitBucket);
    }
    return arr;
}
 