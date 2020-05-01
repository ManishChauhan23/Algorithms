let x = [1, 4, 1, 6, 1, 7];

function sumOfPair(x, sum) {
    let arr = x.sort((a, b) => {return a-b;});
    let l = 0;
    let r = arr.length - 1;
    let result = [];
    
    while(l < r) {
        if(arr[l] + arr[r] > sum) {
            r--;
        } else if (arr[l] + arr[r] < sum) {
            l++;
        } else {
            result.push([arr[l],arr[r]]);
            l++;
        }
    }
    return result;
}

console.log(sumOfPair(x,8));
