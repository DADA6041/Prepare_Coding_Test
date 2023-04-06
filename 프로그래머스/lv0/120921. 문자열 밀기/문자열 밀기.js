function solution(A, B) {
    if(A === B){
        return 0;
    }
    
    let total = 0;
    let tempArr = A.split('');
    
    for (let i = tempArr.length-1; i >= 0; i--){
        let temp = tempArr.splice(tempArr.length - 1, 1)[0];
        tempArr.unshift(temp);
        total++;
        if(tempArr.join('') === B){
            return total;
        }
    }
    return -1;
}