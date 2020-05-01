let str = 'abcabbccc';

function countOfLastRepeatChar(str) {
    const map = {};
    const newStr = str.split('');
    let ans = '';
    map['No repeated Character'] = 'No repeated Character';

    for(let i = 0; i < newStr.length; i++) {
        if(!map[newStr[i]]) {
            map[newStr[i]] = 1;
        } else {
            map[newStr[i]]++;
        }
    };

    for(let j = newStr.length - 1; j >= 0; j--) {
        if(newStr[j] === newStr[j - 1]) {
            ans = newStr[j];
            break;
        } else {
            ans = 'No repeated Character';
        }
    }

    return map[ans];
}

console.log(countOfLastRepeatChar(str));
