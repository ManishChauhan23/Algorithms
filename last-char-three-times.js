const str = 'mhjsbbbgdhjjjsghvgxooojb';

function lastCharThreeTimes(str) {
    const map = {};
    map['undefined'] = 'No Such Key Found';
    let newStr = str.split('');
    let ans = '';

    for(let i = 0 ; i < newStr.length; i++) {
        if(!map[newStr[i]]) {
            map[newStr[i]] = 1;
        } else {
            map[newStr[i]]++;
        }
    };

    for(let j = newStr.length - 1; j >= 0; j--) {
        if(map[newStr[j]] >= 3) {
            ans = newStr[j];
            break;
        } else {
            ans = 'No Such Key Found';
        }
    };
    
    return ans;
};

console.log(lastCharThreeTimes(str));
